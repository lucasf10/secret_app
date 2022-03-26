import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../scenes/welcome';
import SignScreen from '../scenes/sign';
import { DefaultStackOptions } from '../utils/constants';

export type RootStackParamList = {
  Welcome: undefined;
  Sign: {
    type: 'signIn'|'signUp'
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['http://localhost/'],
};

export const WelcomeStack = (): React.ReactElement => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={DefaultStackOptions}
        />
        <Stack.Screen
          name="Sign"
          component={SignScreen}
          options={DefaultStackOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
