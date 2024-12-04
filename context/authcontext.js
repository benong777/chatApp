import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  // isAuthenticated: go to Home page
  // !isAuthenticated: go to SignIn page
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {                   // got authenticated user
        console.log('Got user: ', user);
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;   // clear hook when component unmounts
  }, [])

  const login = async (email, password) => {
    try {

    } catch (e) {

    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true }
    } catch (e) {
      return { success: false, msg: e.message, error: e }
    }
  }

  const register = async (email, password, username, profileUrl) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Register response:', res?.user);

      ////-- Not needed since the useEffect above will trigger and set both
      // setUser(res?.user);
      // setIsAuthenticated(true);

      await setDoc(doc(db, 'users', res?.user?.uid), {
        username,
        profileUrl,
        userId: res?.user?.uid
      });
      return { success: true, data: res?.user };
    } catch (e) {
      let msg = e.message;
      if (msg.includes('(auth/invalid-email)')) msg = 'Invalid email'
      return { success: false, msg };
    }
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  )
};


export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error ('useAuth must be wrapped inside AuthContextProvider!');
  }
  return value;
}