import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Register with email and password;

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Log Out function

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const setNameImage = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
        })
    }



    //get currently logged user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = { user, loading, createUser, logIn, logOut, setNameImage };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;