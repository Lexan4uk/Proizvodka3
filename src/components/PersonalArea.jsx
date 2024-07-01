import '@styles/PersonalArea.scss';
import useAuth from '@scripts/useAuth';
import { useState } from 'react';
import exit_img from '@images/auth/cross.svg';
import Register from '@components/Register';
import Login from '@components/Login';
import ForgetPass from '@components/ForgetPass';



function PersonalArea() {
    const {
        isPersonalAreaOpen,
        openPersonalArea,
        closePersonalArea,
    } = useAuth();

    const [currentComponent, setCurrentComponent] = useState('Login');
    const renderComponent = () => {
        switch (currentComponent) {
            case 'Register':
                return <Register onSwitch={setCurrentComponent} />;
            case 'Login':
                return <Login onSwitch={setCurrentComponent} />;
            case 'ForgetPass':
                return <ForgetPass onSwitch={setCurrentComponent} />;
            default:
                return <Login onSwitch={setCurrentComponent} />;
        }
    }


    return (
        <>
            {
                isPersonalAreaOpen && (
                    <form action="#" className="personal-area personal-area_props">
                        <div className="personal-area__user-block">
                            <h2 className="personal-area__article font-xl weight-xl">Personal area</h2>
                            {renderComponent()}
                            <span className="personal-area__tos text-gray font-s">By signing up I agree to the Terms and Conditions and Privacy Policy</span>
                            <button className="personal-area__close-btn button text-black" onClick={closePersonalArea}>
                                <img src={exit_img} alt="Cross" />
                            </button>
                        </div>
                    </form>
                )
            }
        </>
    );
}

export default PersonalArea;