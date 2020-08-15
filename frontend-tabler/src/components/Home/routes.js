import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Feed/feed';
import Home from './home';
import Profile from '../Profile/profile';

const Tab = createMaterialTopTabNavigator();

export default function HomeTab() {
  return (
      <Tab.Navigator  initialRouteName="Feed">
      <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}
