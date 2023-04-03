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

  const addUserToDatabase = async (userImpl) => {
    try {
      await axios.post("auth/register", {
        name: userImpl.user.displayName,
        email: userImpl.user.email,
        accessToken: userImpl.user.accessToken,
      });
    } catch (error) {
      console.log("Error posting user data to the server", error);
    }
  };

  const signUp = async (name, email, password) => {
    const userImpl = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    await addUserToDatabase(userImpl);
    return userImpl;
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    const userImpl = await signInWithPopup(auth, googleAuthProvider);
    await addUserToDatabase(userImpl);
    return userImpl;
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
