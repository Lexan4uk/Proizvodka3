import '@styles/cards/AdvertThumb.scss';
import { useState } from 'react';
import useAuth from '@scripts/custom_hooks/useAuth';
import getSvg from '@images/svg'


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
  const {
    favorite,
  } = getSvg()

  return (
    <div className="advert-thumb advert-thumb__props">
      <button className={`advert-thumb__heart-holder ${activeHeart && "advert-thumb__heart-holder_active"}`} onClick={handleHeartClick}>
        {favorite(activeHeart ? "var(--white)" : "var(--iconcolor)")}
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
