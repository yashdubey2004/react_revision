import React from 'react';
import UserContextProvider from "../context/UserContextProvider";
import {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <>
        <h2>Login</h2>
        <br/>
        <input type = "Text" placeholder = "Enter Username" onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <input type = "Text" placeholder = "Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login;