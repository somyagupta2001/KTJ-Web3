import React, { useState } from 'react';

const MyForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementsByClassName("alert")[0].innerHTML = "Signed in successfully! Happy Posting!!";
        console.log(password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul className="fields">
                <li>
                    <label htmlFor="emailField">Email Address: </label><br />
                    <input
                        type="email" id="emailField"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="passwordField">Password: </label><br />
                    <input
                        type="password" id="passwordField"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </li>
                <li>
                    <input type="submit" id="submit-button" value="Sign In" />
                </li>
            </ul>
            <div className="alert"></div>
        </form>
    );
}

export default MyForm;