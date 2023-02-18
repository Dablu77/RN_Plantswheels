import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Colors from '../utils/Colors';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Header = props => {
    return (
        <View
            style={{
                backgroundColor: Colors.Withe,
                paddingHorizontal: '4%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15
            }}>
            <TouchableOpacity onPress={props.onPress}>
                <FontAwesome5 name="angle-left" color={"#313232"} size={28} />
            </TouchableOpacity>
            <View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: Colors.Balck,
                        marginLeft: '8%',
                    }}>
                    {props.title}
                </Text>
            </View>
        </View>
    );
};

export default Header;