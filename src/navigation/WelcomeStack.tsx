import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../scenes/welcome';

export type RootStackParamList = {
  Welcome: undefined;
  Sign: undefined;
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
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Sign"
          component={SignScreen}
          options={{ headerShown: true }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
