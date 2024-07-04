import '@styles/Footer.scss';

import getSvg from '@images/svg'

import appstore_img from '@images/footer/App_Store.png';
import googlestore_img from '@images/footer/Google_Play_Store.png';
import phone_img from '@images/footer/phone-img.png';





function Footer() {
    const {
        facebook,
        instagram,
        twitter
    } = getSvg()
    return (
        <footer className="footer footer_bg">
            <div className="footer__content-holder block-normalizer">
                <div className="footer__information">
                    <h3 className="footer__info-article">About us</h3>
                    <h3 className="footer__info-article">Users</h3>
                    <h3 className="footer__info-article">Document</h3>
                    <a className="footer__info-link text-gray" href="/">Help</a>
                    <a className="footer__info-link text-gray" href="/">Payment and delivery</a>
                    <a className="footer__info-link text-gray" href="/">License agreement</a>
                    <a className="footer__info-link text-gray" href="/">Advertising</a>
                    <a className="footer__info-link text-gray" href="/">Feedback</a>
                    <a className="footer__info-link text-gray" href="/">About company policy</a>
                    <a className="footer__info-link text-gray" href="/">Returns</a>
                </div>
                <div className="footer__socials">
                    <a className="footer__social-link" href="https://www.consultant.ru/document/cons_doc_LAW_10699/c10532ab76df5c84c18ee550a79b1fc8cb8449b2/">
                        {facebook("var(--gray-icon")}
                    </a>
                    <a className="footer__social-link" href="https://www.consultant.ru/document/cons_doc_LAW_10699/c10532ab76df5c84c18ee550a79b1fc8cb8449b2/">
                        {instagram("var(--gray-icon")}
                    </a>
                    <a className="footer__social-link" href="https://www.consultant.ru/document/cons_doc_LAW_10699/c10532ab76df5c84c18ee550a79b1fc8cb8449b2/">
                        {twitter("var(--gray-icon", "var(--gray-icon")}
                    </a>
                </div>
                <aside className="footer__mobapp-add">
                    <div className="footer__mobapp-info">
                        <h3 className="footer__mobapp-article font-l weight-xl">Mobile App for iOS and Android</h3>
                        <span className="footer__mobapp-text text-gray">Buy and sell in a snap</span>
                        <div className="footer__mobapp-links-holder">
                            <a className="footer__mobapp-link" href="/">
                                <img className="footer__mobapp-link-img" src={appstore_img} alt="appstore" />
                            </a>
                            <a className="footer__mobapp-link" href="/">
                                <img className="footer__mobapp-link-img" src={googlestore_img} alt="google_store" />
                            </a>
                        </div>
                    </div>
                    <img className="footer__mobapp-img" src={phone_img} alt="phone" />
                </aside>
                <div className="footer__bottom-text-holder">
                    <span className="footer__bottom-text text-gray">© BoardAd 2022. All rights reserved.</span>
                    <span className="footer__bottom-text text-gray">Made in kvokka</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
