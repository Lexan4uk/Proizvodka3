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

  const initUser = async () => {
    const token = localStorage.getItem('token');
      if (!isAuthorised && token) {
        const responseLogin = await login();
        setIsAuthorised(true)
      }
  }
  
  const closePersonalArea = () => {
    setIsPersonalAreaOpen(false);
  };

  return {
    isPersonalAreaOpen,
    openPersonalArea,
    closePersonalArea,
    initUser,
    isAuthorised
  };
}

export default useAuth;
