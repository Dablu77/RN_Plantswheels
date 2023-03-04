import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import Colors from '../Components/utils/Colors'

export default function MoneyTransfers({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header title="Money Transfers" onPress={() => navigation.goBack('')} />
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: heightPixel(90), width: widthPixel(90), borderRadius: 50, backgroundColor: Colors.Orange }}>
                    <Text style={{ color: Colors.Withe, fontWeight: '500', fontSize: fontPixel(17) }}>₹ 500</Text>
                </View>
                <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center', height: heightPixel(130), width: widthPixel(130), borderRadius: 100, backgroundColor: Colors.Lightgrey }}>
                    <Text style={{ color: Colors.Balck, fontWeight: '500', fontSize: fontPixel(17) }}>Withdraw</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}