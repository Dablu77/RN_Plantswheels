import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/ReusableComponets/Header';
import Colors from '../Components/utils/Colors';
import { fontPixel, heightPixel } from '../Components/ReusableComponets/Dimensions';
import beans from '../assets/Rectangle.png'

export default function OrderDetailsScreen({ navigation }) {

    const SrtData = [
        {
            price: '30.00',
            kg: '500 g',
            name: "Beans",
            image: beans
        },
        {
            price: '80.00',
            kg: '600 g',
            name: "Beans",
            image: beans
        },
        {
            price: '90.00',
            kg: '200 g',
            name: "Beans",
            image: beans
        },
        {
            price: '30.00',
            kg: '500 g',
            name: "Beans",
            image: beans
        },
        {
            price: '30.00',
            kg: '500 g',
            name: "Beans",
            image: beans
        },
        {
            price: '30.00',
            kg: '500 g',
            name: "Beans",
            image: beans
        },
        {
            price: '30.00',
            kg: '500 g',
            name: "Beans",
            image: beans
        },
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Details" onPress={() => navigation.goBack('')} />
            <View
                style={{
                    paddingHorizontal: 20,
                    alignItems: 'flex-end',
                    paddingVertical: 12,
                    backgroundColor: Colors.Green,
                }}>
                <Text style={{ color: Colors.Withe }}>Delivered</Text>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginHorizontal: 1,
                }}>
                <Text
                    style={{
                        color: Colors.Balck,
                        fontSize: fontPixel(23),
                        fontWeight: '500',
                    }}>
                    Order ID : #3W81
                </Text>
                <Text
                    style={{
                        color: Colors.Lightgrey,
                        fontSize: fontPixel(14),
                        fontWeight: '500',
                        right: 15,
                    }}>
                    (Today at 5.00 PM)
                </Text>
                <TouchableOpacity
                    style={{ borderColor: Colors.Orange, borderBottomWidth: 1 }}>
                    <Text
                        style={{
                            color: Colors.Orange,
                            fontSize: fontPixel(18),
                            fontWeight: '500',
                        }}>
                        Contact
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: '5%', marginHorizontal: 10 }}>
                <Text
                    style={{
                        color: Colors.Balck,
                        fontSize: fontPixel(23),
                        fontWeight: '500',
                    }}>
                    Cameron Williamson
                </Text>
            </View>
            <View style={{ marginTop: '5%', marginHorizontal: 10 }}>
                <Text
                    style={{
                        color: Colors.Lightgrey,
                        fontSize: fontPixel(18),
                        fontWeight: '500',
                    }}>
                    Mathil Perul Mathamangalam Rd ,Town Mathil Kerala,India,670343
                    ,49852581500
                </Text>
            </View>
            <View style={{ marginTop: '5%', marginHorizontal: 10, flexDirection: 'row' }}>
                <Text
                    style={{
                        color: Colors.Lightgrey,
                        fontSize: fontPixel(18),
                        fontWeight: '500',
                    }}>
                    Cost
                </Text>
                <Text
                    style={{
                        color: "red",
                        fontSize: fontPixel(18),
                        fontWeight: '500',
                        left: 5
                    }}>
                    ₹ 90.00
                </Text>
                <Text
                    style={{
                        color: Colors.Lightgrey,
                        fontSize: fontPixel(18),
                        fontWeight: '500',
                        left: 10

                    }}>
                    Distance 5 KM
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        color: Colors.Balck,
                        fontSize: fontPixel(23),
                        fontWeight: 'bold',
                        marginTop: 50,
                        marginHorizontal: 15
                    }}>
                    Product Details
                </Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                {SrtData.map((Value, index) => (
                    <View
                        key={index}
                        style={{ backgroundColor: Colors.Withe, elevation: 5, height: heightPixel(80), marginHorizontal: 15, top: 15, borderBottomWidth: 1, borderColor: Colors.Lightgrey }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/Rectangle.png')} style={{ height: 60, width: 60 }} />
                                <View style={{ paddingHorizontal: 15, alignItems: 'center' }}>
                                    <Text style={{ color: "#5D5D5D", fontSize: fontPixel(20), fontWeight: '500' }}>{Value.name}</Text>
                                    <Text style={{ color: Colors.Lightgrey, fontWeight: '500', top: 5 }}>{Value.kg}</Text>
                                </View>
                            </View>
                            <Text style={{ color: '#FF0000', top: 5, fontSize: fontPixel(22), fontWeight: '500' }}>₹ {Value.price}</Text>

                        </View>
                    </View>

                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
