import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);

    const googleLoginProvider = (provider) => {
        setLoad(false)
        return signInWithPopup(auth, provider)
    }
    const gitLoginProvider = (provider) => {
        setLoad(false)
        return signInWithPopup(auth, provider)
    }
    const facebookProvider = (provider) => {
        setLoad(false)
        return signInWithPopup(auth, provider)
    }
    const logout = () => {
        setLoad(false)
        return signOut(auth);
    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const createNewUser = (email, password) => {
        setLoad(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoad(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoad(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const authDetails = { user, googleLoginProvider, logout, createNewUser, signIn, load, updateUser, gitLoginProvider, facebookProvider }
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;