import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import firebase from "./firebase_service/firebase";


import "./css/command.css";

function App() {
    const [user, setUser] = useState(null);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {  
            setUser(user);
        });
    }, []);

    function caller() {
        console.log("TEST");
        return <Login />;
    }


    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            {user ? <HomePage user={user} /> : caller()}
            {/* ถ้ามี user เรียก HomePage ไม่มีเรียก login */}
        </div>
    );
}

export default App;
