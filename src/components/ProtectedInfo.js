import React from 'react';
import './Page.css';

const ProtectedInfo = (props) => {
    console.log(props.secretData.code)
    return (
        <div className="container protected-container">
            <h2>Protected Info</h2>
            <hr />
            <h3>Code: {props.secretData.code} </h3>
            {props.secretData.code !== "69" ?
                <img alt={props.secretData.code} src={props.secretData.imgSrc} />
                : <iframe title="rickroll" 
                          width="560" 
                          height="315" 
                          src={`https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1`} 
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen></iframe>}

        </div>
    )
}

export default ProtectedInfo;