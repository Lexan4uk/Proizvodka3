import '@styles/PersonalArea.scss';



function ForgetPass({onSwitch}) {

    return (
        <div className="personal-area__action-field">
            <span className="text-gray font-s ">Enter your email</span>
            <input type="email" className="personal-area__input" placeholder="Email"/>
            <button className="button personal-area__confirm-button">Continue</button>
            <button className="button text-green personal-area__link weight-s" onClick={() => onSwitch('Register')}>Registration</button>
        </div>

    );
}

export default ForgetPass;