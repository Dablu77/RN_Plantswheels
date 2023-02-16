import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/Login';
import Otp from '../../screen/Otp';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
