import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'

export default function Support({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Support" onPress={() => navigation.goBack('')} />
            <View style={{ backgroundColor: Colors.Lightgrey, paddingVertical: 15, marginHorizontal: 30, alignItems: 'center', borderRadius: 10, marginVertical: 30 }}>
                <Text style={{ color: Colors.Balck, fontSize: fontPixel(20), fontWeight: '500' }}>Orga Plant’s Support Centre</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 15, alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <Image
                        styles={{ heigh: heightPixel(20), width: widthPixel(20) }}
                        source={require('../assets/call.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, left: widthPixel(30), fontWeight: '500', fontSize: fontPixel(20) }}>9938778388</Text>
                </View>
                <Image
                    style={{ heigh: heightPixel(50), width: widthPixel(10) }}
                    source={require('../assets/arowLeft.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 15, alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <Image
                        styles={{ heigh: heightPixel(20), width: widthPixel(20) }}
                        source={require('../assets/whatsapicone.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, left: widthPixel(30), fontWeight: '500', fontSize: fontPixel(20) }}>WhatsApp Us</Text>
                </View>
                <Image
                    style={{ heigh: heightPixel(50), width: widthPixel(10) }}
                    source={require('../assets/arowLeft.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 10, paddingVertical: 15, alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <Image
                        styles={{ heigh: heightPixel(20), width: widthPixel(20) }}
                        source={require('../assets/message.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, left: widthPixel(30), fontWeight: '500', fontSize: fontPixel(20) }}>support@orgaplants.com</Text>
                </View>
                <Image
                    style={{ heigh: heightPixel(50), width: widthPixel(10) }}
                    source={require('../assets/arowLeft.png')}
                />
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginVertical: heightPixel(100) }}>
                <Text style={{ color: Colors.Lightgrey, fontWeight: '500', fontSize: fontPixel(20) }}>https://www.orgaplants.com/</Text>

            </View>
        </SafeAreaView>
    )
}