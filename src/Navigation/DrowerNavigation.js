import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../Components/utils/Colors';
import CustomDrawerMenu from '../Components/DrawerMenu/CustomDrawerMenu';
import Home from '../screen/Home';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function Drawernavigation({ }) {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerMenu {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#AFFBC8',
                drawerInactiveTintColor: '#150F0F',
                drawerActiveTintColor: '#563D31',
                headerShown: false,




                // headerTintColor: 'white',
            }}>
            <Drawer.Screen name="BottomNavigator" component={TabNavigation} />
        </Drawer.Navigator>
    );
}
