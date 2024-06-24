import './../styles/Header.scss';
import logo_img from './../src/header/logo.svg'
import { apiTags, getCategories } from './../api/categories';
import useSWR from 'swr';
 
function Header() {
    const { data, error, isLoading } = useSWR(apiTags.advert_categories,()=>getCategories());
    // console.log(data)

    return (
        <header className="header block-normalizer">
            <div className="header__padding">
                <div className="header__top-block">
                    <a href="/" className="header__logo-link">
                        <img src={logo_img} alt="Logo" />
                    </a>
                </div>
                <div className="header__bottom-block">
                    {/* <a href="">{getCategories()}</a> */}
                </div>
            </div>  
        </header>
    );
  }
  
  export default Header;
  