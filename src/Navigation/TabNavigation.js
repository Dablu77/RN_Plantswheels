import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../Components/utils/Colors';
import Home from '../screen/Home';
import homeIcone from '../assets/homeIcone.png'
import EarningIcone from '../assets/Earning.png'
import NotificationIcone from '../assets/NotificationIcone.png'
import Earning from '../screen/Earning';
import Notification from '../screen/Notification';

const Tab = createBottomTabNavigator();

function TabNavigation() {

    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                headerShown: true,
                tabBarActiveTintColor: Colors.Orange,
                // tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle: {
                    // backgroundColor: Colors.darkOrange,
                    height: 55,
                },
                tabBarLabelStyle: {
                    fontWeight: '500',
                    fontSize: 12,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={homeIcone}
                            style={{
                                height: 25,
                                width: 25,

                                tintColor: focused ? Colors.Orange : Colors.Lightgrey,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Earning"
                component={Earning}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={EarningIcone}
                            style={{
                                height: 25,
                                width: 26,

                                tintColor: focused ? Colors.Orange : Colors.Lightgrey,
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={NotificationIcone}
                            style={{
                                height: 25,
                                width: 25,

                                tintColor: focused ? Colors.Orange : Colors.Lightgrey,
                            }}
                        />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

export default TabNavigation;