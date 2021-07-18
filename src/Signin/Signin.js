import React, { useState } from 'react';
import MyForm from './MyForm'
import '../Form.css'

const Signin = () => {
    //const [formSnip, setFormSnip] = useState('');
    
    // const onValidEmail = () => {
    //     console.log("onvalidemail triggered");
    //     //setFormSnip ((<FormPass classname="Form" />));
    // }
    
    // //setFormSnip((<FormEmail className="Form" isValidEmail={onValidEmail}/>));
    
    return ( 
        <div className="Signin">
            <h1>Hello, Our Gorgeous Users on the Internet!</h1>
            <h2>SIGN IN TO GET STARTED</h2>
            <MyForm classname="Form" />
        </div>
     );
}
 
export default Signin;