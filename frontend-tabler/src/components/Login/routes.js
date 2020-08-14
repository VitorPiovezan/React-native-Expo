import * as React from 'react';
import { Navigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Signup from '../Signup/signup';
import Tab from '../Home/routes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                          headerShown: false,
                        }}
                        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Routes" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;