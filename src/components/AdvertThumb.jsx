import '@styles/AdvertThumb.scss';
import { useState } from 'react';
import useAuth from '@scripts/useAuth';


function AdvertThumb(data) {
  const advert = data.message
  const formattedPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(advert.price);
  const [activeHeart, setActiveHeart] = useState(false);
  const {
    isAuthorised,
    openPersonalArea,
  } = useAuth();
  const handleHeartClick = () => {
    if (isAuthorised) {
      setActiveHeart(!activeHeart);
    } else {
      openPersonalArea();
    }
  };

  return (
    <div className="advert-thumb advert-thumb__props">
      <button className={`advert-thumb__heart-holder ${activeHeart && "advert-thumb__heart-holder_active"}`} onClick={handleHeartClick}>
        <svg
          className="advert-thumb__heart-img"
          width="22"
          height="24"
          viewBox="0 0 22 14"
          fill="#333333"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.8376 1.5C16.3836 1.49954 16.9243 1.6081 17.4279 1.81931C17.9314 2.03052 18.3877 2.34014 18.7701 2.73C19.5579 3.52979 19.9995 4.60737 19.9995 5.73C19.9995 6.85264 19.5579 7.93022 18.7701 8.73L11.0001 16.5975L3.23008 8.73C2.44226 7.93022 2.00067 6.85264 2.00067 5.73C2.00067 4.60737 2.44226 3.52979 3.23008 2.73C3.61264 2.34042 4.06901 2.03096 4.57251 1.81972C5.07601 1.60848 5.61656 1.49968 6.16258 1.49968C6.7086 1.49968 7.24914 1.60848 7.75264 1.81972C8.25614 2.03096 8.71251 2.34042 9.09508 2.73L11.0001 4.68L12.8976 2.745C13.2788 2.35049 13.7356 2.0369 14.2407 1.82298C14.7459 1.60906 15.289 1.49921 15.8376 1.5ZM15.8376 2.01214e-06C15.0918 -0.000630028 14.3534 0.147643 13.6657 0.436128C12.9779 0.724614 12.3547 1.1475 11.8326 1.68L11.0001 2.52L10.1676 1.68C9.64479 1.14846 9.02142 0.726309 8.33382 0.438145C7.64621 0.149981 6.90812 0.00157307 6.16258 0.00157307C5.41703 0.00157307 4.67894 0.149981 3.99133 0.438145C3.30373 0.726309 2.68036 1.14846 2.15758 1.68C1.09398 2.76272 0.498047 4.21977 0.498047 5.7375C0.498047 7.25523 1.09398 8.71228 2.15758 9.795L11.0001 18.75L19.8426 9.795C20.9062 8.71228 21.5021 7.25523 21.5021 5.7375C21.5021 4.21977 20.9062 2.76272 19.8426 1.68C19.3199 1.14818 18.6966 0.725734 18.009 0.437298C17.3214 0.148862 16.5832 0.000207074 15.8376 2.01214e-06Z" />
        </svg>
      </button>
      <a href={`http://altujaar.kvokka.net/${advert.slug}`} className="advert-thumb__content-holder">
        <div className="advert-thumb__img-holder">
          <img className="advert-thumb__img" src={`${advert.cover ? `http://altujaar-admin.kvokka.net${advert.cover}` : "http://altujaar.kvokka.net/_next/static/media/default.24d178cb.png"}`} alt="" />
        </div>
        <div className="advert-thumb__text-holder">
          <h2 className="advert-thumb__advert-name weight-xl font-m">{advert.name}</h2>
          <span className="advert-thumb__advert-price text-green weight-xl font-l">{formattedPrice}</span>
          <span className="advert-thumb__advert-desc text-gray font-s">{advert.description}</span>
          <span className="advert-thumb__advert-location text-gray font-s">{advert.country.name}</span>
        </div>
      </a>
    </div>

  );
}

export default AdvertThumb;
