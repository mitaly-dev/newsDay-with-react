import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../Firebase/Firebase.config";
import toast from 'react-hot-toast';;
export const AuthContext = createContext()

const UserContext = ({children}) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const signWithGoogle=()=>{
        setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(()=>{
            toast.success('Sign with Google Successfull !')
        })
        .catch(error=>toast.error(error.message))
    }

    const signWithGithub=()=>{
        setLoading(true)
        signInWithPopup(auth,githubProvider)
        .then(()=>{
            toast.success('Sign with Github Successfull !')
        })
        .catch(error=>toast.error(error.message))
    }

    const logOut=()=>{
       setLoading(true)
       signOut(auth)
       .then(()=>{})
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const emailVerification=()=>{
        setLoading(true)
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            setTimeout(() => {
                toast.success('Please check and verify your email !')
            }, 2000);
        }) 
    }

    const updateProfileHandle=(name,url)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,
            {displayName:name ,
            photoURL:url
        })
    }

    const signInHandle=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, current=>{
            if(current == null || current.emailVerified){
                setUser(current)
            }
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
    
    const value ={
        user ,
        loading,
        setLoading,
        signWithGoogle ,
        signWithGithub ,
        logOut ,
        createUser ,
        emailVerification ,
        updateProfileHandle,
        signInHandle,
    }
    return (
       <AuthContext.Provider value={value}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;
