import '@styles/PersonalArea.scss';
import AuthHook from '@scripts/AuthHook';
import { useState } from 'react';
import exit_img from '@images/auth/cross.svg';



function PersonalArea() {
    const {
        isPersonalAreaOpen,
        //togglePersonalArea,
        openPersonalArea,
        closePersonalArea
    } = AuthHook();
    const FuncclosePersonalArea = () => {
        document.querySelector('.personal-area').remove();
    }
    return (
        <div className="personal-area personal-area_props">
            <div className="personal-area__user-block">
                <h2 className="personal-area__article font-xl weight-xl">Personal area</h2>
                <span className="personal-area__tos text-gray font-s">By signing up I agree to the Terms and Conditions and Privacy Policy</span>
                <button className="personal-area__close-btn button text-black" onClick={FuncclosePersonalArea}>
                    <img src={exit_img} alt="Cross" />
                </button>
            </div>
        </div>

    );
}

export default PersonalArea;