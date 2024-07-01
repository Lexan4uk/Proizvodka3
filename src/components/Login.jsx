import '@styles/PersonalArea.scss';
import { getToken } from '@api/token';
import { login } from '@api/login';
import { useState } from 'react';


function Login({onSwitch}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logQuerry = async () => {
        const logData =  {
            email: email,
            password: password
        }
        const responseToken = await getToken(logData);
        localStorage.setItem('token', responseToken.token);
        const responseLogin = await login();
    }

    return (
        <div className="personal-area__action-field">
            <input type="email" className="personal-area__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" className="personal-area__input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="button personal-area__confirm-button" onClick={logQuerry}>Login</button>
            <button className="button text-green personal-area__link weight-s" onClick={() => onSwitch('ForgetPass')}>Forgot your password?</button>
            <button className="button text-green personal-area__link weight-s" onClick={() => onSwitch('Register')}>Registration</button>
        </div>

    );
}

export default Login;