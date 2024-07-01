import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Main from '@pages/Main';

import reportWebVitals from './reportWebVitals';
import '@globalStyles/fonts.scss';
import '@globalStyles/globals.scss';
import '@globalStyles/mixins.scss';
import '@globalStyles/normalize.scss';
import '@globalStyles/variables.scss';
import {RecoilRoot} from 'recoil';
import useAuth from '@scripts/useAuth';
import { useEffect } from 'react';
import { isUserFetchingState } from '@scripts/authState';
import { useRecoilState } from 'recoil';



const App = (props) => {
  const [isUserFetching, setIsUserFetching] = useRecoilState(isUserFetchingState);

  const {
    initUser,
    isAuthorised
  } = useAuth();

  useEffect(() => {
    if (!isUserFetching && !isAuthorised) {
      setIsUserFetching(true)
      initUser()
      setIsUserFetching(false)
    }
  }, [isAuthorised, isUserFetching])



  return props.children
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App>
        <Main />
      </App>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
