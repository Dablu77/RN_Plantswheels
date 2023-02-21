import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Colors from '../utils/Colors';

const { height, width } = Dimensions.get('screen');

const CustomDrawerMenu = props => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.Orange }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: Colors.Blue }}>
                <View>
                    <Text style={{ color: 'red' }}>Hello</Text>
                </View>
            </DrawerContentScrollView>
        </ScrollView>
    );
};

export default CustomDrawerMenu;

