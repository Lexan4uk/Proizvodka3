import '@styles/header_component/DropdownProfileMenu.scss';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import getSvg from '@images/svg'


function DropdownProfileMenu({ isShow, block = "modal-root-dropdown"}) {
    const ref = useRef();
    const [mounted, setMounted] = useState(false);
    const {
        person,
        home,
        job,
        company,
        favorite,
        message,
        support,
        exit
    } = getSvg()

    useEffect(() => {
        const modalRoot = document.getElementById(block);
        if (modalRoot) {
            ref.current = modalRoot;
            setMounted(true);
        }
    }, []);
    if (!mounted) {
        return null;
    }


    return isShow && ref.current ? createPortal(
        <div className="dropdown-profile-menu dropdown-profile-menu_props">
            <a className="dropdown-profile-menu__element" href="/profile">
                {person()}
                <span className="dropdown-profile-menu__text">My profile</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {home()}
                <span className="dropdown-profile-menu__text">My adverts</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {job()}
                <span className="dropdown-profile-menu__text">My job</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {company()}
                <span className="dropdown-profile-menu__text">My company</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {favorite()}
                <span className="dropdown-profile-menu__text">My favorite</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {message()}
                <span className="dropdown-profile-menu__text">Message</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {support()}
                <span className="dropdown-profile-menu__text">Support</span>
            </a>
            <a className="dropdown-profile-menu__element" href="/">
                {exit()}
                <span className="dropdown-profile-menu__text">Exit</span>
            </a>
        </div>,
        ref.current
    ) : null;
}

DropdownProfileMenu.propTypes = {
    isShow: PropTypes.bool.isRequired,
};

export default DropdownProfileMenu;
