import '@styles/Header.scss';
import { useState } from 'react';
import logo_img from '@images/header/logo.svg'
import heart_img from '@images/header/heart.svg'
import lang_img from '@images/header/lang.svg'
import adress_img from '@images/header/location.svg'
import mail_img from '@images/header/mail.svg'
import user_img from '@images/header/user.svg'
import category_img from '@images/header/category.svg'
import search_img from '@images/header/search.svg'
import cross_img from '@images/header/cross.svg'
import { CSSTransition } from 'react-transition-group';



import { apiTags, getCategories } from '@api/categories';
import useSWR from 'swr';
import Menu from '@components/Menu';

function Header() {
    const { data, error, isLoading } = useSWR(apiTags.advert_categories, () => getCategories());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <>
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
                                        <input type="text" className="header__search-field " placeholder="Search" />                        </div>
                                    <img className="header__search-holder_img" src={search_img} alt="Search" />
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
                                    <a href="/" className="header__minimenu-item">
                                        <img className="header__minimenu-img" src={user_img} alt="User" />
                                    </a>
                                </div>
                                <a href="/" className="button red-button header__make-add-btn">Post ad</a>
                            </div>
                        </div>
                        <div className="header__bottom-block" style={{ display: isMenuOpen ? 'none' : 'flex' }}>
                            {data?.items.map(item => (
                                <a className="header__bottom-block-link" key={item.id} href={'/' + item.tech_name}>{item.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <CSSTransition
                    in={isMenuOpen}
                    timeout={300}
                    classNames="header__menu-animation"
                    unmountOnExit
                >
                    <Menu message={data?.items} />
                </CSSTransition>
            </header>
        </>
    );
}

export default Header;
