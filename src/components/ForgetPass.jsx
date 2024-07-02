import '@styles/PersonalArea.scss';
import { useState } from 'react';
import { postRemind } from '@api/forgetPassword';




function ForgetPass({ onSwitch }) {
    const [reminded, setReminded] = useState(false)
    const [email, setEmail] = useState('');

    const remindClick = async () => {
        const data = {
            email: email
        }
        const responce = await postRemind(data)
        if (responce)
            setReminded(true)
    }
    return (
        <>
            {reminded ? (
                <div className="personal-area__action-field">
                    <span className="text-gray font-s ">A new password has been sent! Check your email!</span >
                    <button className="button personal-area__confirm-button" onClick={() => onSwitch('Login')}>Back to login</button>
                </div >
            ) : (
                <div className="personal-area__action-field">
                    <span className="text-gray font-s ">Enter your email</span >
                    <input type="email" className="personal-area__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <button className="button personal-area__confirm-button" onClick={remindClick}>Continue</button>
                    <button className="button text-green personal-area__link weight-s" onClick={() => onSwitch('Register')}>Registration</button>
                </div >
            )}

        </>

    );
}

export default ForgetPass;