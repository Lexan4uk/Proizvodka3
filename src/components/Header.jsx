import '@styles/Header.scss';
import { useState } from 'react';
import useSWR from 'swr';
import { CSSTransition } from 'react-transition-group';

import { apiTags, getCategories } from '@api/categories';
import Menu from '@components/header_component/Menu';
import PersonalArea from '@components/authorization/PersonalArea';
import useAuth from '@scripts/custom_hooks/useAuth';
import DropdownProfileMenu from '@components/header_component/DropdownProfileMenu';
import getSvg from '@images/svg'

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
    const {
        logo,
        menu,
        cross,
        search,
        language,
        pin,
        favorite,
        message,
        person
    } = getSvg()



    return (
        <header className="header header_props">
            <div className="header__holder block-normalizer">
                <div className="header__holder header__padding">
                    <div className="header__top-block">
                        <a href="/" className="header__logo-link">
                            {logo()}
                        </a>
                        <div className="header__actions">
                            <div className="header__search-block">
                                <button className="header__category-btn button green-button" onClick={toggleMenu}>
                                    {isMenuOpen ? cross("var(--white") : menu("var(--white)")}
                                    All category
                                </button>
                                <div className="header__search-holder">
                                    <input type="text" className="header__search-field" placeholder="Search" />
                                    {search("var(--gray-icon)", undefined, undefined, "header__search-holder_img")}
                                </div>
                            </div>
                            <div className="header__minimenu">
                                <button className="header__lang-button text-button  header__minimenu-item">
                                    {language("var(--black)")}
                                    Eng
                                </button>
                                <a href="/" className="header__minimenu-item">
                                    {pin()}
                                </a>
                                <a href="/" className="header__minimenu-item">
                                    {favorite()}
                                </a>
                                <a href="/" className="header__minimenu-item">
                                    {message(!isAuthorised ? "var(--gray-icon)" : "var(--iconcolor)")}
                                </a>
                                <button className="header__minimenu-item header__minimenu-button button" onClick={handleProfileClick}>
                                    {person(isDropdownProfileMenuOpen ? "var(--green)" : "var(--iconcolor)")}
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
