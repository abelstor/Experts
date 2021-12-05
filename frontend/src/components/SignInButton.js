// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyChT1m00eF9tB-MyjkV8mPoOPTXRVoHzSU",
    authDomain: "experts-3fb3d.firebaseapp.com",
    projectId: "experts-3fb3d",
    storageBucket: "experts-3fb3d.appspot.com",
    messagingSenderId: "292845102118",
    appId: "1:292845102118:web:6bec6be4887d4356f072e7",
    measurementId: "G-RG8RJKBYZ9"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/home',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {

            const user = {
                uid: authResult.user.uid,
                photoUrl: authResult.user.photoURL,
                email: authResult.user.email,
                flagNewUser: authResult.additionalUserInfo.isNewUser,
                name: authResult.user.displayName
            };
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        }
    }
};

function SignInButton() {
    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
    );
}

export default SignInButton;