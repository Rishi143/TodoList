import React, { useState } from 'react'
import { TextField,Button } from '@material-ui/core'

export function Login() {

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const loginHandler = () => {
        if(userName === "" || password === "") {
            alert('uname/pass is empty!');
        } else {
            console.log(userName);
            console.log(password);
        }
    }

    return (
        <div>
            <br />
            <TextField variant="outlined" label="Username" onChange = {(e)=>setUserName(e.target.value)} value = {userName}/>
            <br />
            <br />
            <TextField variant="outlined" type="password" label="Password" onChange = {(e)=>setPassword(e.target.value)} value = {password}/>
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={loginHandler} >
                Login
            </Button>

        </div>
    )
}

export default Login
