import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Signup from '../Signup/signup';
import HomeTab from '../Home/routes';
import EditProfile from '../EditProfile/editprofile';
import Preview from '../Room/preview'
import CreateRoom from '../CreateRoom/createroom'
import CreatePlayer from '../Room/createplayer'

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
        <Stack.Screen name="Routes" component={HomeTab}/>
        <Stack.Screen name="Config" component={EditProfile} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
        <Stack.Screen name="Preview" component={Preview} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
        <Stack.Screen name="CreateRoom" component={CreateRoom} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
        <Stack.Screen name="CreatePlayer" component={CreatePlayer} options={{gestureEnabled: true, gestureDirection: "horizontal"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}