import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));
        })
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
