import '@styles/AdvertThumb.scss';
import heart_img from '@images/main/heart.svg'


function AdvertThumb(data) {
  const advert = data.message
  const formattedPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(advert.price);
  return (

    <a href={`http://altujaar.kvokka.net/${advert.slug}`} className="advert-thumb advert-thumb_props">
      <a className="advert-thumb__heart-holder" href="/">
        <img className="advert-thumb__heart-img" src={heart_img} alt="Heart" />
      </a>
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
  );
}

export default AdvertThumb;
