import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { WelcomeStack } from './navigation/WelcomeStack';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <WelcomeStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
