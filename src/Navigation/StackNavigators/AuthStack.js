import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screen/Login';
import Otp from '../../screen/Otp';
import Signup from '../../screen/Signup';
import AadhaarScreen from '../../screen/AadhaarScreen';
import EmergencyInfoScreen from '../../screen/EmergencyInfoScreen';
import DrivingLicenseScreen from '../../screen/DrivingLicenseScreen';
import TabNavigation from '../TabNavigation';
import DrowerNavigation from '../DrowerNavigation';
import Personaldetails from '../../screen/Personaldetails';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AadhaarScreen"
        component={AadhaarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrivingLicenseScreen"
        component={DrivingLicenseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmergencyInfoScreen"
        component={EmergencyInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrowerNavigation"
        component={DrowerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Personaldetails"
        component={Personaldetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
