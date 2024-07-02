import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { isPersonalAreaOpenState } from '@scripts/paState';
import { isAuthorisedState, isUserFetchingState } from '@scripts/authState';
import { login } from '@api/login';


function useAuth() {
  const [isPersonalAreaOpen, setIsPersonalAreaOpen] = useRecoilState(isPersonalAreaOpenState);
  const [isAuthorised, setIsAuthorised] = useRecoilState(isAuthorisedState);


  const openPersonalArea = () => {
    setIsPersonalAreaOpen(true);
  };

  const closePersonalArea = () => {
    setIsPersonalAreaOpen(false);
  };

  const initUser = async () => {
    const token = localStorage.getItem('token');
      if (!isAuthorised && token) {
        const responseLogin = await login();
        setIsAuthorised(true)
      }
  }

  return {
    isPersonalAreaOpen,
    isAuthorised,
    setIsAuthorised,
    openPersonalArea,
    closePersonalArea,
    initUser,
    
  };
}

export default useAuth;
