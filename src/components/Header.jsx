import '@styles/Header.scss';
import { useState } from 'react';
import useSWR from 'swr';
import { CSSTransition } from 'react-transition-group';

import logo_img from '@images/header/logo.svg';
import heart_img from '@images/header/heart.svg';
import lang_img from '@images/header/lang.svg';
import adress_img from '@images/header/location.svg';
import mail_img from '@images/header/mail.svg';
import user_img from '@images/header/user.svg';
import category_img from '@images/header/category.svg';
import search_img from '@images/header/search.svg';
import cross_img from '@images/header/cross.svg';

import { apiTags, getCategories } from '@api/categories';
import Menu from '@components/header_component/Menu';
import PersonalArea from '@components/authorization/PersonalArea';
import useAuth from '@scripts/custom_hooks/useAuth';
import DropdownProfileMenu from '@components/header_component/DropdownProfileMenu';

function Header() {
    const { data, error, isLoading } = useSWR(apiTags.advert_categories, getCategories);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownProfileMenuOpen, setDropdownProfileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const {
        isPersonalAreaOpen,
        isAuthorised,
        openPersonalArea,
    } = useAuth();
    const handleAdClick = () => {
        if (isAuthorised) {
            alert("Вы авторизированы. тут может быть действие кнопки");
        } else {
            openPersonalArea();
        }
    };
    const handleProfileClick = () => {
        if (isAuthorised) {
            if (!isDropdownProfileMenuOpen)
                setDropdownProfileMenuOpen(true)
            else
                setDropdownProfileMenuOpen(false)
        }
        else {
            openPersonalArea()
        }
    }



    return (
        <header className="header header_props">
            <div className="header__holder block-normalizer">
                <div className="header__holder header__padding">
                    <div className="header__top-block">
                        <a href="/" className="header__logo-link">
                            <img className="header__button-img" src={logo_img} alt="Logo" />
                        </a>
                        <div className="header__actions">
                            <div className="header__search-block">
                                <button className="header__category-btn button green-button" onClick={toggleMenu}>
                                    <img className="header__category-img" src={isMenuOpen ? cross_img : category_img} alt="Category" />
                                    All category
                                </button>
                                <div className="header__search-holder">
                                    <input type="text" className="header__search-field" placeholder="Search" />
                                    <img className="header__search-holder_img" src={search_img} alt="Search" />
                                </div>
                            </div>
                            <div className="header__minimenu">
                                <button className="header__lang-button text-button  header__minimenu-item">
                                    <img className="header__minimenu-img" src={lang_img} alt="Language" />
                                    Eng
                                </button>
                                <a href="/" className="header__minimenu-item">
                                    <img className="header__minimenu-img" src={adress_img} alt="Adress" />
                                </a>
                                <a href="/" className="header__minimenu-item">
                                    <img className="header__minimenu-img" src={heart_img} alt="Heart" />
                                </a>
                                <a href="/" className="header__minimenu-item">
                                    <img className="header__minimenu-img" src={mail_img} alt="Mail" />
                                </a>
                                <button className="header__minimenu-item header__minimenu-button button" onClick={handleProfileClick}>
                                    <svg className="header__minimenu-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="header__minimenu-svg_hover" cx="12" cy="7" r="4.25" stroke={isDropdownProfileMenuOpen ? "var(--green)" : "var(--black)"} strokeWidth="1.5" />
                                        <path className="header__minimenu-svg_hover" d="M20 21C20 19.1435 19.1571 17.363 17.6569 16.0503C16.1566 14.7375 14.1217 14 12 14C9.87827 14 7.84344 14.7375 6.34315 16.0503C4.84286 17.363 4 19.1435 4 21" stroke={isDropdownProfileMenuOpen ? "var(--green)" : "var(--black)"} strokeWidth="1.5" />
                                    </svg>
                                </button>
                            </div>
                            <button className="button red-button header__make-add-btn" onClick={handleAdClick}>
                                Post ad
                            </button>
                        </div>
                    </div>
                    <div className="header__bottom-block" style={{ display: isMenuOpen ? 'none' : 'flex' }}>
                        {data?.items.map(item => (
                            <a className="header__bottom-block-link" key={item.id} href={'/' + item.tech_name}>{item.name}</a>
                        ))}
                    </div>
                </div>
                <div id="modal-root-dropdown" className="header__dropdown-portal"></div>
            </div>
            <CSSTransition
                in={isMenuOpen}
                timeout={300}
                classNames="header__menu-animation"
                unmountOnExit
            >
                <Menu message={data?.items} />
            </CSSTransition>
            <PersonalArea isShow={isPersonalAreaOpen} />
            <DropdownProfileMenu isShow={isDropdownProfileMenuOpen} />
        </header>
    );
}

export default Header;
