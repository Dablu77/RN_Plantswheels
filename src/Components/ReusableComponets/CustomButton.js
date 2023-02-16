import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = props => {
    return (
        <View>
            <View style={{ marginVertical: 20 }}>
                <TouchableOpacity onPress={props.onPress} style={{ paddingVertical: 13, backgroundColor: '#F58850', alignItems: 'center', marginHorizontal: 20, borderRadius: 10 }}>
                    <Text style={{ color: "#FFFFFF", fontWeight: '500', }}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomButton;