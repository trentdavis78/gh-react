import React, { useState } from 'react';
import './firebase/firebase';
import { database } from './firebase/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/Home';
import FAQ from './components/FAQ';
import './App.css';
import ProtectedInfo from './components/ProtectedInfo';




export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [invalidCode, setInvalidCode] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [secretData, setSecretData] = useState({});
  const checkCode = (inputValue) => {
    database.ref().once('value')
      .then((snapshot) => {
          snapshot.forEach((childsnap) => {
            const val = childsnap.val()
            if (inputValue === val.code) {
              setAuthenticated(true);
              console.log(val)
              setSecretData({...val})
              setInputValue('');
            } else {
              setInvalidCode(true);
              setInputValue('');
            }
          })
        
      })
      .catch((e) => {
        console.log('Error fetching data', e);
      });
  }


  return (
    <Router>
      <div className="app-container">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            ARK Code Redeemer
                    </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/" exact render={
            () => isAuthenticated ? <ProtectedInfo secretData={secretData} /> 
            : <Home
            inputValue={inputValue}
            invalidCode={invalidCode}
            setInputValue={setInputValue}
            setInvalidCode={setInvalidCode}
            checkCode={checkCode}
          />
          } />
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

