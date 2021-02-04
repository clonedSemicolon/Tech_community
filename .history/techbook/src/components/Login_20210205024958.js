import { Button } from '@material-ui/core';
import React from 'react';
import { auth,provider } from '../firebase';
import "./Login.css;"

function Login() {

    const signIn=()=>{

        auth.signInWithPopup(provider).then(result =>{
            console.log(result)
        }).catch()

    }


    return (
        <div className="login">

            <div className="Login_logo">

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
