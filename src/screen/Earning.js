import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../Components/utils/Colors'
import Header from '../Components/ReusableComponets/Header'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions';



export default function Earning({ navigation }) {

    const SrtShortData = [
        {
            order: '#237O',
            price: '30.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '50.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },
        {
            order: '#237O',
            price: '90.00',
            shopId: '978467o9E'

        },


    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Earnings" onPress={() => navigation.goBack('')} />

            <ImageBackground source={require('../assets/backgroundimage.png')} style={{ height: heightPixel(180), marginHorizontal: 10, }}>
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
                        <TouchableOpacity
                            onPress={() => navigation.navigate("WalletScreen")}
                            style={{ paddingVertical: 5, backgroundColor: Colors.Orange, width: widthPixel(80), alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 4 }}>
                            <Text style={{ fontWeight: "500", fontSize: fontPixel(20), color: Colors.Withe }}>₹ 150</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <ScrollView contentContainerStyle={{ marginHorizontal: 15, top: 10, paddingBottom: 20 }}>
                <Text style={{ color: Colors.Balck, fontSize: fontPixel(22), fontWeight: '500' }}>Today’s Earnings</Text>

                {/* // *!  {Data not found wiith show image}  */}

                {SrtShortData.map((Value, index) => (
                    <View
                        key={index}
                        style={{ paddingVertical: 20, marginTop: 10, top: 15, backgroundColor: Colors.Withe, elevation: 5, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <View>
                                <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '900' }}>Order {Value.order}</Text>
                                <Text style={{ color: Colors.Lightgrey, fontSize: fontPixel(20), marginTop: 10 }}>Shop ID To Customer ID</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#FF0000', fontSize: fontPixel(20), fontWeight: '900' }}>₹ {Value.price}</Text>
                                <Text style={{ color: Colors.Balck, marginTop: 10, fontSize: fontPixel(18), fontWeight: '500' }}>{Value.shopId}</Text>
                            </View>
                        </View>
                    </View>
                ))}
                <View style={{ paddingVertical: 40, marginHorizontal: 10 }}>
                    <Text style={{ color: Colors.Balck, fontSize: fontPixel(22), fontWeight: '500', }}>Week’s Earnings  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, top: -20 }}>
                    <Text style={{ color: Colors.Lightgrey, fontSize: fontPixel(20), fontWeight: '500' }}>Total Orders- 23</Text>
                    <Text style={{ color: '#FF0000', fontSize: fontPixel(20), fontWeight: '900' }}>₹ 30.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, }}>
                    <Text style={{ color: Colors.Lightgrey, fontSize: fontPixel(18), fontWeight: '500' }}>Spotlight Shop- </Text>
                    <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '500' }}>8748487kuy</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 30 }}>
                    <TouchableOpacity style={{ paddingVertical: 13, width: widthPixel(100), backgroundColor: Colors.Orange, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: Colors.Withe, fontWeight: "500", fontSize: fontPixel(16) }}>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BonusScreen')}
                        style={{ paddingVertical: 13, width: widthPixel(100), backgroundColor: Colors.Green, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: Colors.Withe, fontWeight: "500", fontSize: fontPixel(16) }}>Bonus</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}