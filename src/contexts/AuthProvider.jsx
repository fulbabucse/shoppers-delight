import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.config.js";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signUpEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userSignOut = () => {
    setLoading(true);
    localStorage.removeItem("ShopperToken");
    return signOut(auth);
  };

  const updateUserProfile = (updatesInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatesInfo);
  };

  const userAccountVerify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    signInUser,
    userSignOut,
    setLoading,
    googleSignIn,
    forgetPassword,
    userAccountVerify,
    updateUserProfile,
    signUpEmailPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
