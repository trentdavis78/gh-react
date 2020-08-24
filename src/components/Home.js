import React from 'react';
import './Home.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Home = ({ inputValue, invalidCode, setInputValue, setInvalidCode, checkCode }) => {
    
    return (
        <div className="container home-container">
            <div className="form-container">
                <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter your code</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="ex: 0x23sdesw390ndsfyl49" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={() => setInvalidCode(false)}
                    />
                    <Form.Text className="text-muted">
                        Codes are received from ARK: Survival Evolved master, Thad
                    </Form.Text>
                </Form.Group>
                
                <div className="error-container">
                    {' '}
                    {invalidCode && <small style={{color:'red'}}>Invalid Code!</small>}
                </div>
                <div className="button-container">
                    <Button 
                        variant="dark" 
                        size="lg" 
                        block
                        onClick={() => { checkCode(inputValue); }}
                        type="submit"
                       
                    >
                        Take Me To My Lore
                    </Button>
                </div>
                </Form>
            </div>
        </div>
    )
}
export default Home;