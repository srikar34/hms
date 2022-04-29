
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "../App.css";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { GUEST } from "../assets/guestDetails";

export let guestEmail = "";
export let userEmail = "";

function Login() {
    const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      userEmail=user?.email;
      navigate("/guest");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
    <span>
    <br/>
    <div class="container"> <br/><div class="screen"> <br/><div class="screen__content">
    <input type="text" class="login__input" placeholder="Email"
      onChange={(event) => {
        guestEmail = event.target.value;
        setLoginEmail(event.target.value);
      }}
    />
    <input type="password" class="login__input" placeholder="Password"
      onChange={(event) => {
        setLoginPassword(event.target.value);

      }}
    />

    <button onClick={login} class="button login__submit">
    <span class="button__text">Log In</span>
    </button>  
    </div></div></div>
    </span>
    <span class="hotelbrand">Welcome to Hotel Nostalgia</span>
        
    </div>
  );
}

export default Login;