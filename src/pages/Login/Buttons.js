import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "1058476437495-rbsovcqabm175n534bri36e2c9q967ae.apps.googleusercontent.com";



const Buttons = () => {
    const navigate = useNavigate();
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Se ha iniciado sesión:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        navigate('/inicio');
    };

    const onLoginFailure = (res) => {
        console.log('Error al iniciar sesión:', res);
    };

    const onSignoutSuccess = () => {
        alert("Se ha cerrado la sesión");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="ACCEDE CON GOOGLE"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Cerrar sesión"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
};
export default Buttons;