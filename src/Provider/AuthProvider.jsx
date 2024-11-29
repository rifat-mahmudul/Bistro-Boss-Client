/* eslint-disable react/prop-types */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";


export const authContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                console.log('log in user : ', currentUser);
            })
        }

        return () => unSubscribe();
    }, [])

    const authInfo = {
        loading,
        user,
        signInWithGoogle,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider
