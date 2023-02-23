import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Colors from '../Components/utils/Colors'
import Header from '../Components/ReusableComponets/Header'
import { heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'

export default function Personaldetails({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Text>Personaldetails</Text>
            <Header title="Personal Info" onPress={() => navigation.goBack('')} />
            <View style={{ borderWidth: 1, flexDirection: 'row', paddingVertical: 10 }}>
                <Image source={require('../assets/account.png')} style={{ height: heightPixel(30), width: widthPixel(30) }} />
                <Text>hello</Text>
            </View>
        </SafeAreaView>
    )
}