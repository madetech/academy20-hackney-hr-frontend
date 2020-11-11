import React, { useState } from "react";
import SubmitButton from "../submitButton/submitButton"
import "./login.css";

let users = require("../../MOCK_DATA.json")

export default function Login(props) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loginSuccess, setLoginSuccess] = useState(false);
   const [loginFail, setLoginFail] = useState(false);

   const inputChangeHandler = event => {
       const { name, value } = event.target;
       if (name === "email") {
           setEmail(value);
       } else {
           setPassword(value);
       }
   }

   const submitHandler = event => {
        event.preventDefault();
        const user = users.find(user => user.contact_email === email)
        if (user && user.password === password){
            setLoginSuccess(true);
            props.setId(user.id);
            props.setIsLoggedIn(true);
        } else {
            setLoginSuccess(false);
            setLoginFail(true);
            props.setIsLoggedIn(false);
        }
   }
   
   return (
    <section>
        <div className="welcome-text">
            <h1>Employee Login</h1>
            <p>Please enter your credentials.</p>
        </div>
        <form onSubmit={submitHandler}>

            <label htmlFor="email">
                Email:
            </label><br/>
            <input 
                type="text" 
                id="email" 
                name="email"
                value={email}
                onChange={inputChangeHandler}/>
            <br/>

            <label htmlFor="password">
                Password:
            </label><br/>
            <input 
                type="password" 
                id="password" 
                name="password"
                value={password}
                onChange={inputChangeHandler}/><br/>

                <SubmitButton/>

        </form>
        {loginSuccess && <div>You have logged in as {email}</div>}
        {loginFail && <div>Your email or password is incorrect, please re-enter your information again</div>}
    </section>
   )
}