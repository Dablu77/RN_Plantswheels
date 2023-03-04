import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'

export default function BonusScreen({ navigation }) {

    const Srtdata = [
        {
            total: '9 Delivery ',
            price: '30',
            message: "You have completed your target.....",
        },
        {
            total: '4 Delivery ',
            price: '600',
            message: "You have completed your target.....",
        },
        {
            total: '1 Delivery ',
            price: '30',
            message: "You have completed your target.....",
        },
        {
            total: '9 Delivery ',
            price: '50',
            message: "You have completed your target.....",
        },
        {
            total: '2 Delivery ',
            price: '20',
            message: "You have completed your target.....",
        },
        {
            total: '2 Delivery ',
            price: '20',
            message: "You have completed your target.....",
        },
        {
            total: '2 Delivery ',
            price: '20',
            message: "You have completed your target.....",
        },

    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Bonus" onPress={() => navigation.goBack('')} />
            <ImageBackground source={require('../assets/backgroundimage.png')} style={{ height: heightPixel(180), marginHorizontal: 10, justifyContent: 'center' }}>
                <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View>
                        <Text style={{ fontSize: fontPixel(22), color: Colors.Withe, textAlign: 'center', fontWeight: '900' }}>
                            Earn  ₹300 if you
                            {'\n'} Complete
                        </Text>
                        <Text style={{ top: 10, fontSize: fontPixel(20), color: Colors.Withe, textAlign: 'center' }}>
                            15 Delivery
                        </Text>
                    </View>
                    <Image source={require('../assets/Scootersmall.png')} style={{ height: heightPixel(120), width: widthPixel(120) }} />
                </View>
            </ImageBackground>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                {Srtdata.map((value, index) => (
                    <View
                        key={index}
                        style={{ elevation: 1, paddingVertical: 20, }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ height: 20, width: 20, borderRadius: 45, backgroundColor: "#06B003" }}>
                                </View>
                                <View >
                                    <Text style={{ color: Colors.Balck, left: 10, fontWeight: 'bold', fontSize: fontPixel(18) }}>{value.total}</Text>
                                </View>

                            </View>
                            <Text style={{ color: Colors.Balck, fontSize: fontPixel(25), fontWeight: '900' }}>₹ {value.price}</Text>

                        </View>
                        <Text style={{ paddingHorizontal: 30, top: 5, color: '#06B003', left: 10, fontWeight: 'bold', fontSize: fontPixel(18) }}>{value.message}</Text>
                    </View>
                ))}


            </ScrollView>
        </SafeAreaView>
    )
}