import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../Feed/feed';
import Home from './home';
import Profile from '../Profile/profile';

const Tab = createMaterialTopTabNavigator();

export default function HomeTab({navitagion, route}) {
  const user = route.params.userId
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
        <Tab.Screen name="Room" component={Feed} initialParams={{ userId: user }}/>
        <Tab.Screen name="Home" component={Home} initialParams={{ userId: user }}/>
        <Tab.Screen name="Profile" component={Profile} initialParams={{ userId: user }}/>
      </Tab.Navigator>
  );
}
