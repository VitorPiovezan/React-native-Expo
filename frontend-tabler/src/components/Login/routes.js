import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Signup from '../Signup/signup';
import Tab from '../Home/routes';
import Config from '../Config/config';
import Preview from '../Room/preview'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                          headerShown: false,
                        }}
                        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
      
        }}
        
                        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
        <Stack.Screen name="Routes" component={Tab}/>
        <Stack.Screen name="Config" component={Config} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
        <Stack.Screen name="Preview" component={Preview} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}