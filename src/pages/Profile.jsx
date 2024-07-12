import '@styles/pages/Profile.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useEffect, useState } from 'react';
import useAuth from '@scripts/custom_hooks/useAuth';
import DropdownProfileMenu from '@components/header_component/DropdownProfileMenu';
import getSvg from '@images/svg'
import useSWR from 'swr';
import simpleGet from '@api/simpleGet';


function Input({ type = "text", data = "", active = true }) {
  const {
    pencil
  } = getSvg()

  const [activeInput, setActiveInput] = useState(false)
  return (
    <div className={`profile__form-input-holder gray-border ${activeInput && "profile__form-input-holder_outline"} ${!active && "profile__form-input-holder_non-active"}`}>
      <input className={`profile__form-input ${!active && "profile__form-input_non-active"}`} value={data} type={type} onFocus={() => setActiveInput(true)} onBlur={() => setActiveInput(false)} />
      {activeInput && pencil("var(--gray-icon)", undefined, undefined, "profile__form-input-pencil")}
    </div>
  )
}





function Profile() {
  const {
    accData
  } = useAuth()
  const [selectedCountry, setSelectedCountry] = useState()
  const { data: countryList } = useSWR("country/list", simpleGet);
  const handleSelectCountry = (event) => {
    setSelectedCountry(event.target.value);
  };
  const { data: cityList } = useSWR(selectedCountry ? `country/${selectedCountry}/districts` : null, simpleGet);

  
  useEffect(() => {
    setSelectedCountry(accData.country ? accData.country.id : undefined)
  }, [accData])
  const { 
    photo,
    pencil
  } = getSvg()

  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__content block-normalizer">
          <aside className="profile__side-block f-column gap-20">
            <div className="profile__user-infoblock f-row gray-border">
              <div className="profile__user-img-holder f-row">
                {accData.avatar ? <img className="profile__user-img" src={`http://altujaar-admin.kvokka.net/${accData.avatar}`} alt="" /> : <span className="profile__user-img_def"></span>}
              </div>
              <div className="profile__user-info f-column">
                {accData.first_name && accData.last_name && <span className="profile__user-name font-l">{accData.first_name} {accData.last_name}</span>}
                <span className="profile__user-email text-gray font-s">{accData.email}</span>
                {accData.phone && <span className="profile__user-phone text-gray font-s">{accData.phone}</span>}
              </div>
            </div>
            <div id="profile__user-sideblock-holder" className="profile__user-sideblock-holder"></div>

          </aside>
          <form action='#' className="profile__main-block f-column">
            <section className="profile__top-block f-column gap-20">
              <h1 className="profile__article font-xxl weight-xl">My profile</h1>
              <div className="profile__actions-holder f-row gap-20">
                <div className="profile__action f-column gap-20 gray-border">
                  <button className="profile__action-top-btn f-row">
                    <div className="profile__action-img-holder">
                      {accData.avatar ? <img className="profile__user-img" src={`http://altujaar-admin.kvokka.net/${accData.avatar}`} alt="" /> : <span className="profile__user-img_def"></span>}
                    </div>
                    <div className="profile__action-svg-holder">
                      {photo("var(--white)")}
                    </div>
                  </button>
                  <div className="profile__action-bottom">
                    <h2 className="profile__action-article font-m">Profile photo</h2>
                    <span className="profile__action-text text-gray font-s">The photo JPG or PNG maximum size is 25MB.</span>
                  </div>
                </div>
                <div className="profile__action f-column gap-20 gray-border">
                  <button className="profile__action-top-btn f-row">
                    <div className="profile__action-img-holder">
                      <img className="profile__user-img" src={`http://altujaar.kvokka.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsearch.06d0e4a3.png&w=96&q=75`} alt="Search resume" />
                    </div>
                  </button>
                  <div className="profile__action-bottom">
                    <h2 className="profile__action-article font-m">Fill out a resume on our website and find a job today</h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="profile__form f-column gap-20">
              <h2 className="profile__form-article font-l weight-xl">Personal information</h2>
              <div className="profile__form-place">
                <div className="profile__form-input-block f-column">
                  <span className="profile__form-input-text gray-text">First Name</span>
                  <Input data={accData.first_name && accData.first_name} />
                </div>
                <div className="profile__form-input-block f-column">
                  <span className="profile__form-input-text gray-text">Last Name</span>
                  <Input data={accData.last_name && accData.last_name} />
                </div>
                <div className="profile__form-input-block f-column">
                  <span className="profile__form-input-text gray-text">Phone</span>
                  <Input data={accData.phone && accData.phone} type={"number"} />
                </div>
                <div className="profile__form-input-block f-column">
                  <span className="profile__form-input-text gray-text">Email</span>
                  <Input data={accData.email && accData.email} type={"email"} active={false} />
                </div>
                {countryList &&
                  <div className="profile__form-input-block f-column">
                    <span className="profile__form-input-text gray-text">Country</span>
                    <select className="profile__filter-input" onChange={handleSelectCountry}>
                      <option className="profile__filter-option" value="" disabled hidden>rfdfd</option>
                      {countryList.items.map((country) => {
                        return <option className="profile__filter-option" selected={accData.country?.id  == country?.id ? true : false} key={country.id} value={country.id}>{country.name}</option>;
                      })}
                    </select>
                  </div>
                }
                <div className="profile__form-input-block f-column">
                    <span className="profile__form-input-text gray-text">City</span>
                    {selectedCountry  &&
                    <select className="profile__filter-input" value={accData.city ? accData.city.id : ""}>
                      <option className="profile__filter-option" value="" disabled hidden></option>
                      {cityList && cityList?.items.map((city) => {
                        return <option className="profile__filter-option" key={city.id} value={city.id}>{city.name}</option>;
                      })}
                    </select>
                    }
                  </div>
              </div>
            </section>
          </form>
        </div>
        <DropdownProfileMenu isShow={true} block="profile__user-sideblock-holder" />

      </section>
      <Footer />
    </>
  );
}

export default Profile;
