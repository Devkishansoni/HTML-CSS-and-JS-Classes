import React,{useState,useEffect} from "react";

export default function Login() {
    
    const [accessToken, setAccessToken] = useState('');

    const handleLogin = () => {
        const CLIENT_ID = "596805938919-49e81114j9j7f1fbkcln17noo8b7l6bi.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000/inbox";
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    }

    const getAccessToken = () => {
        const url = window.location.href;
        const token = url.match(/access_token=([^&]+)/);
        localStorage.setItem("Token", token && token[1]);
    }

    useEffect(() => {
        getAccessToken();
    }, []);

    

    return (
        <>
            <div>
                {accessToken ? (
                    <div>
                        <h1>Access token obtained</h1>
                        <p>Access Token: {accessToken}</p>
                    </div>
                ) : (
                    <>
                        <button onClick={handleLogin}>Login with Google</button>
                    </>
                )}
            </div>
        </>
    )
}