import React from "react";
import { signingoogle } from "../firebase_service/firebase";
import { signingithub } from "../firebase_service/github";
import { loginfacebook } from "../firebase_service/facebook";
import "../css/button.css";
import "../css/command.css";

function Login() {
    return (
        <div>
            <h2 className="Center">Login Methods</h2>
            <button className="bn54 center" onClick={loginfacebook}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    className="space bn54span changesize"
                    alt="logofacebook"
                />
                <span className="bn54span">Sign In</span>
            </button>

            <button className="bn54 center" onClick={signingoogle}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    className="space bn54span changesize"
                    alt="logogoogle"
                />
                <span className="bn54span">Sign In</span>
            </button>

            <button className="bn54 center" onClick={signingithub}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                    className="space bn54span changesize"
                    alt="logogithub"
                />
                <span className="bn54span">Sign In</span>
            </button>
        </div>
    );
}

export default Login;
