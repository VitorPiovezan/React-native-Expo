import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Feed/feed';
import Home from './home';
import Profile from '../Profile/profile';

const Tab = createMaterialTopTabNavigator();

export default function HomeTab() {
  
  return (
      <Tab.Navigator  tabBarOptions={{
                        inactiveTintColor: '#99785D',
                        activeTintColor: '#DDBC91',
                        style: {
                          backgroundColor: '#5e3200',
                        },
                        indicatorStyle: {
                          backgroundColor: '#DDBC91'
                        }
                      }}
                      initialRouteName="Room">
      <Tab.Screen name="Room" component={Feed} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}
