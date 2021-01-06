import React, { useEffect, useState } from 'react';

const GoogleAuth = () => {

    const clientID = "504519795001-oedpi7m7u4bjp1bom3tqt757p9qlifsu.apps.googleusercontent.com"

    const [signIn, setSignIn] = useState(null)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: clientID,
                scope: "email",
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                setSignIn(auth.isSignedIn.get())
                auth.isSignedIn.listen(onAuthChange)
            })
        })
    }, [])

    console.log(signIn)

    const onAuthChange = () => {
        setSignIn(window.gapi.auth2.getAuthInstance().isSignedIn.get())
    }

    const onSignIn = () => {
        return window.gapi.auth2.getAuthInstance().signIn()
    }
    const onSignOut = () => {
        return window.gapi.auth2.getAuthInstance().signOut()
    }

    const renderAuthBtn = () => {
        if (signIn === null) {
            return <div>Sign In via Google</div>;
        }

        else if (signIn) {
            return (
                <div>
                    <button onClick={onSignIn}>SignOut Google</button>
                </div>
            )
        }

        else {
            return (
                <div>
                    <button onClick={onSignOut} >SignIn With Google</button>
                </div>)

        }
    }
    return (
        <div>
            {renderAuthBtn()}
        </div>
    )
}

export default GoogleAuth
