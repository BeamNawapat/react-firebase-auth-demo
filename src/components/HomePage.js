import React, { useState } from "react";
import "../css/button.css";
import "../css/command.css";

import { auth } from "../firebase_service/firebase";

function HomePage({ user }) {
    let us = [];
    let loginmethods = "None";
    let pictureclass = "Default";

    const [username, setusername] = useState(user.displayName);

    function callback(mail) {
        if (/(avatars.githubusercontent.com)/.test(user.photoURL) === true) {
            console.log("[GITHUB]");
            loginmethods = "Github";

            fetch(`https://api.github.com/search/users?q=${mail}`, {
                method: "GET",
            })
                .then((response) => response.json())
                .then(async (data) => {
                    if (data.message) {
                        console.log("API RATE LIMITS .");
                    }

                    await us.push({ data: data.items[0] });

                    setusername(us[0].data.login);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        if (/(googleusercontent.com)/.test(user.photoURL) === true) {
            console.log("[GOOGLE]");
            loginmethods = "Google";
        }

        if (/(facebook.com)/.test(user.photoURL) === true) {
            console.log("[FACEBOOK]");
            loginmethods = "Facebook";
            pictureclass = "fb";
        }
    }

    callback(user.email);

    return (
        <div>
            <h2>Hi there, {user.displayName}</h2>
            <h3>Your Login With {loginmethods}</h3>
            <img
                src={user.photoURL}
                alt="imggoogle"
                className={pictureclass}
            ></img>
            <div className="TextArea">
                <span>User : {username}</span>
                <br></br>
                <span>Email : {user.email}</span>
            </div>
            <button className="bn54 center" onClick={() => auth.signOut()}>
                <span className="bn54span">Sign Out</span>
            </button>
        </div>
    );
}

export default HomePage;
