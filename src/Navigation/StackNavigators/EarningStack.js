import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletScreen from '../../screen/WalletScreen';
import MoneyTransfers from '../../screen/MoneyTransfers';
import BonusScreen from '../../screen/BonusScreen';
import Earning from '../../screen/Earning';

const Stack = createNativeStackNavigator();
function EarningStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Earning"
                component={Earning}
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
            <Stack.Screen
                name="BonusScreen"
                component={BonusScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default EarningStack;
