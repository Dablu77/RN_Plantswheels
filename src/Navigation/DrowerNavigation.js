import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../Components/utils/Colors';
import CustomDrawerMenu from '../Components/DrawerMenu/CustomDrawerMenu';
import Earning from '../screen/Earning';


const Drawer = createDrawerNavigator();
export default function DrowerNavigation() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerMenu {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#AFFBC8',
                drawerInactiveTintColor: '#150F0F',
                drawerActiveTintColor: '#563D31',
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.Orange,
                },
            }}>
            <Drawer.Screen name="ALL IN ONE" component={Earning} />
        </Drawer.Navigator>
    );
}

