import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from '../scenes/feed';
import PostScreen from '../scenes/post';
import { DefaultStackOptions } from '../utils/constants';
import CreatePostScreen from '../scenes/createPosts';

export type LoggedStackParamList = {
  Feed: undefined;
  Post: undefined;
  CreatePost: undefined;
};

const Stack = createNativeStackNavigator<LoggedStackParamList>();

export const LoggedStack = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={DefaultStackOptions}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={DefaultStackOptions}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={DefaultStackOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
