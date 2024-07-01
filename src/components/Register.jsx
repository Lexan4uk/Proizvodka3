import '@styles/PersonalArea.scss';
import { postRegistration } from '@api/register';
import { useState } from 'react';

function Register({ onSwitch }) {
    const [email, setEmail] = useState('');

    const regQuerry = async () => {
        const formData = new FormData()
        formData.append("email", email)
        const response = await postRegistration(formData);
    }

    return (
        <div className="personal-area__action-field">
            <input type="email" className="personal-area__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button className="button personal-area__confirm-button" onClick={regQuerry}>Register</button>
            <button className="button text-green personal-area__link weight-s" onClick={() => onSwitch('Login')}>Go to authorization</button>
        </div>
    );
}

export default Register;
