import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

// Reference:
// https://www.youtube.com/watch?v=6kgitEWTxac

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const signUp = async (name, email, password) => {
    const userObj = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    try {
      await axios.post("http://localhost:5000/auth/register", {
        name: name,
        email: email,
        accessToken: userObj.user.accessToken,
      });
    } catch (error) {
      console.log("Error posting user data to the server", error);
    }
    return userObj;
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    window.location.reload();
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        signInWithGoogle,
        logOut,
        forgotPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
