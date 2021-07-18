import React, { useState } from 'react';

const MyForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const checkPass = () =>{
        const field=document.getElementById("confirmPasswordField");
        if(field.value===password)
            field.setCustomValidity("");
        else
        field.setCustomValidity("Invalid Credentials!\nPassword doesn't match");

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementsByClassName("alert")[0].innerHTML="Yayy!! Your account has been created successfully!";
        console.log(firstName, lastName, email, phoneNumber, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul className="fields">
                <li>
                    <label htmlFor="firstNameField">First Name: </label><br />
                    <input type="text" id="firstNameField"
                        required
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="lastNameField">Last Name: </label><br />
                    <input type="text" id="lastNameField"
                        required
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </li>
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
                    <label htmlFor="phoneNumberField">Phone Number (10 digits): </label><br />
                    <input type="text" id="phoneNumberField"
                        pattern="[7-9]{1}[0-9]{9}"
                        title="Enter a valid 10-digit number without country code"
                        required
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
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
                    <label htmlFor="confirmPasswordField">Confirm Password: </label><br />
                    <input
                        type="password" id="confirmPasswordField"
                        required
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        onInput={checkPass}
                    />
                </li>
                <li>
                    <input type="submit" id="submit-button" value="Sign Up!" onClick={checkPass}/>
                </li>
            </ul>
            <div className="alert"></div>
        </form>
    );
};

export default MyForm;