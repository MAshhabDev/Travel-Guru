import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../FireBase/Firebase.config';


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const[loading,setLoading]=useState(true)


    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email, pass) => {
                setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }


    const AuthData = {
        user, setUser, createUser, logOut, logIn, loading,updateUser
    }

    return (
        <AuthContext value={AuthData}>{children}</AuthContext>
    );
};

export default AuthProvider;