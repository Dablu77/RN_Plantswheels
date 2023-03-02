import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Components/utils/Colors'
import Header from '../Components/ReusableComponets/Header'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions';


const image = { uri: 'https://reactjs.org/logo-og.png' };
export default function Earning({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Earnings" onPress={() => navigation.goBack('')} />

            <ImageBackground source={require('../assets/backgroundimage.png')} style={{ flex: 1, height: heightPixel(180), marginHorizontal: 10, }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: fontPixel(23), color: Colors.Withe, fontWeight: '900', marginTop: 5 }}>Total Earnings</Text>
                    <Text style={{ fontSize: fontPixel(30), color: Colors.Withe, fontWeight: '900', top: 5 }}>₹ 6000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center', paddingTop: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe }}>Today</Text>
                        <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe }}>₹ 1500</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe }}>Incentives</Text>
                        <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe }}>₹ 1500</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe, borderBottomWidth: 1, borderColor: Colors.Withe }}>Wallet</Text>
                        <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: Colors.Orange, width: widthPixel(80), alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 4 }}>
                            <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe }}>₹ 150</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <View style={{ flex: 2.5, marginHorizontal: 15 }}>
                <Text style={{ color: Colors.Balck, fontSize: fontPixel(22), fontWeight: '500' }}>Today’s Earnings</Text>

                <View style={{ paddingVertical: 20, marginTop: 25, backgroundColor: Colors.Withe, elevation: 5, borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                        <View>
                            <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '900' }}>Order # 213</Text>
                            <Text style={{ color: Colors.Lightgrey, fontSize: fontPixel(20), marginTop: 10 }}>Shop ID To Customer ID</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#FF0000', fontSize: fontPixel(20), fontWeight: '900' }}>₹ 30.00</Text>
                            <Text style={{ color: Colors.Balck, marginTop: 10, fontSize: fontPixel(18), fontWeight: '500' }}>874876746</Text>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    )
}