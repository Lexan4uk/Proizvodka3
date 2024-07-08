import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from '@pages/Main';

import reportWebVitals from './reportWebVitals';
import '@globalStyles/fonts.scss';
import '@globalStyles/globals.scss';
import '@globalStyles/mixins.scss';
import '@globalStyles/normalize.scss';
import '@globalStyles/variables.scss';
import { RecoilRoot } from 'recoil';
import useAuth from '@scripts/custom_hooks/useAuth';
import { useEffect } from 'react';
import { isUserFetchingState } from '@scripts/atoms/authState';
import { useRecoilState } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilterPage from '@pages/FilterPage';





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
        <Router>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='/filter/:id' element={<FilterPage/>}></Route>
          </Routes>
        </Router>
      </App>
    </RecoilRoot>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
