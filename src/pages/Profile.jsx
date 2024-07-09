import '@styles/pages/Profile.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useEffect, useState } from 'react';
import useAuth from '@scripts/custom_hooks/useAuth';



function Profile() {
    const {
        accData
    } = useAuth()
    useEffect(()=> {
        console.log(accData)
    })

  return (
      <>
        <Header />
        <section className="main">
        
        </section>
        <Footer/>
      </>
  );
}

export default Profile;
