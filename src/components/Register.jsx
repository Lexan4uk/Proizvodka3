import '@styles/PersonalArea.scss';
import { postRegistration } from '@api/register';
import { useState } from 'react';

function Register({ onSwitch }) {
    const [email, setEmail] = useState('');
    const [infolabel, setInfolabel] = useState(false)

    const regQuerry = async () => {
        const formData = new FormData()
        formData.append("email", email)
        const response = await postRegistration(formData);
        console.log(response)
        if (response.item) {
            setInfolabel("Success registration!")
        }
        if (response.code === 309) {
            setInfolabel("This email already have an account!")
        }
        if (response.code === 300) {
            setInfolabel("Registration error!")
        }
        
    }

    return (
        <div className="personal-area__action-field">
            <input type="email" className="personal-area__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button className="button personal-area__confirm-button" onClick={regQuerry}>Register</button>
            {infolabel && (<span className="personal-area__success text-gray">{infolabel}</span>)}
            <button className="button text-green personal-area__link weight-s" onClick={() => onSwitch('Login')}>Go to authorization</button>
        </div>
    );
}

export default Register;
