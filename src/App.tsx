import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-easy-toast';

import { WelcomeStack } from './navigation/WelcomeStack';
import { LoggedStack } from './navigation/LoggedStack';
import { TOAST_DURATION } from './utils/constants';
import { store, persistor } from './store';
import api from './services/api';
import { actions as userActions } from './actions/user';

const App = () => {
  const { dispatch } = store;
  const [loggedIn, setLoggedIn] = useState(store.getState().user.isLoggedIn);
  const [toast, setToast] = useState<any>();

  store.subscribe(() => {
    const logged = store.getState().user.isLoggedIn;
    const toastText = store.getState().toast.text;

    if (logged !== loggedIn) setLoggedIn(logged);

    if (toastText) toast?.show(toastText, TOAST_DURATION);
  });

  if (!api.defaults.headers.common.Authorization && loggedIn)
    api.defaults.headers.common.Authorization = `Bearer ${store.getState().user.accessToken}`;

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      let message = error?.response?.data?.error as string;

      if (error?.response?.status === 401) {
        message = 'Your login has expired.';
        dispatch(userActions.signOut());
      }

      toast?.show(message || 'Something went wrong.', TOAST_DURATION);
      return Promise.reject(error);
    },
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toast position="top" ref={(ref) => setToast(ref)} />
        {!loggedIn ? <WelcomeStack /> : <LoggedStack />}
      </PersistGate>
    </Provider>
  );
};

export default App;
