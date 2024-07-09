import { useRecoilState } from 'recoil';
import { isPersonalAreaOpenState } from '@scripts/atoms/paState';
import { isAuthorisedState } from '@scripts/atoms/authState';
import { login } from '@api/login';
import {accDataAtom } from '@scripts/atoms/accDataAtom'
import { set } from 'react-hook-form';


function useAuth() {
  const [isPersonalAreaOpen, setIsPersonalAreaOpen] = useRecoilState(isPersonalAreaOpenState);
  const [isAuthorised, setIsAuthorised] = useRecoilState(isAuthorisedState);
  const [accData, setAccData] = useRecoilState(accDataAtom)

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
        setAccData(responseLogin.item)
      }
  }

  return {
    isPersonalAreaOpen,
    isAuthorised,
    setIsAuthorised,
    openPersonalArea,
    closePersonalArea,
    initUser,
    accData
  };
}

export default useAuth;
