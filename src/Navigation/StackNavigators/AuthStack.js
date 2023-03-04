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
import Support from '../../screen/Support';
import OrderHistory from '../../screen/OrderHistory';
import Accountdetails from '../../screen/Accountdetails';
import LetsShare from '../../screen/LetsShare ';
import OrderDetailsScreen from '../../screen/OrderDetailsScreen';
import WalletScreen from '../../screen/WalletScreen';
import MoneyTransfers from '../../screen/MoneyTransfers';

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
      <Stack.Screen
        name="Support"
        component={Support}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Accountdetails"
        component={Accountdetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LetsShare"
        component={LetsShare}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MoneyTransfers"
        component={MoneyTransfers}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
