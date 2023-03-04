import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function WalletScreen({ navigation }) {

    const Srtdate = [
        {
            Time: "5:00 PM",

        }
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Wallet" onPress={() => navigation.goBack('')} />
            <View style={{ alignItems: 'center', marginVertical: 30 }}>
                <Text style={{ fontSize: fontPixel(25), color: Colors.Green, fontWeight: '900' }}>Wallet balance</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MoneyTransfers')}
                    style={{ marginVertical: 15, paddingVertical: 13, width: widthPixel(120), backgroundColor: Colors.Orange, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: Colors.Withe, fontWeight: "500", fontSize: fontPixel(20) }}>₹ 500</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '500' }}>Transfer History</Text>
                </View>

                <View style={{ backgroundColor: '#F5F5F5', marginTop: 20, borderRadius: 15, height: heightPixel(150), marginHorizontal: 15 }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, top: 10 }}>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '500' }}>Today</Text>
                        <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '500' }}>5.00 PM</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, top: 20 }}>
                        <Text style={{ color: Colors.Lightgrey, fontSize: fontPixel(20), }}> Amount</Text>
                        <Ionicons name="location-sharp" color={Colors.Green} size={28} />
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, top: 10 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MoneyTransfers')}
                            style={{ marginVertical: 15, paddingVertical: 10, width: widthPixel(120), backgroundColor: Colors.Orange, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: Colors.Withe, fontWeight: "500", fontSize: fontPixel(18) }}>₹ 500</Text>
                        </TouchableOpacity>
                        <Text style={{ color: Colors.Lightgrey, fontSize: fontPixel(20), }}>Total Distance 52 KM</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}