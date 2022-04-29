
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "../App.css";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
export let staffEmail = "";

function StaffLogin() {
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
      navigate("/staff");
    } catch (error) {
      console.log(error.message);
      window.alert(error.message);
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
        staffEmail = event.target.value;
        localStorage.setItem('staff', JSON.stringify({email : event.target.value}))
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

export default StaffLogin;