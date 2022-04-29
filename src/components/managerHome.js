import React, { Component } from 'react'; 
import ManagerPortalHeader from './managerPortalHeader';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Manager(){
    const navigate = useNavigate();
    const logout = async () => {
        await signOut(auth);
         navigate('/');
      };
        return(
            <div>
            <ManagerPortalHeader />
            <div class="center">Use navigation bar to move across various sections</div>
            <button onClick={logout} class="button logout__submit">
            <span class="button__text">Log Out</span>  
            </button> 
            </div>
            
        );
}

export default Manager;