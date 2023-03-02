import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Components/utils/Colors'
import Header from '../Components/ReusableComponets/Header'
import { widthPixel } from '../Components/ReusableComponets/Dimensions'

export default function Accountdetails({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Account details" onPress={() => navigation.goBack('')} />
            <ScrollView>
                <View style={{ marginTop: 15, backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, top: 5 }}>
                        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>UPI ID</Text>
                    </View>
                    <TextInput
                        placeholder='plantschain@ybl'
                        // keyboardType="number-pad"
                        maxLength={10}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
                </View>
                <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, }}>
                        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Account holder name</Text>
                    </View>
                    <TextInput
                        placeholder='Dablu gupta'
                        // keyboardType="number-pad"
                        maxLength={10}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
                </View>
                <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, }}>
                        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Account Number</Text>
                    </View>
                    <TextInput
                        placeholder='8874448748'
                        // keyboardType="number-pad"
                        maxLength={10}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 15 }} />
                </View>
                <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, }}>
                        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Bank name</Text>
                    </View>
                    <TextInput
                        placeholder='State Bank Of India'
                        // keyboardType="number-pad"
                        maxLength={10}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
                </View>
                <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, }}>
                        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>IFSC </Text>
                    </View>
                    <TextInput
                        placeholder='SBIN0005943'
                        // keyboardType="number-pad"
                        maxLength={10}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
                </View>
                <View style={{ alignItems: 'center', marginVertical: 70 }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.Orange, width: widthPixel(130), alignItems: 'center', justifyContent: 'center', paddingVertical: 13, borderRadius: 10 }}>
                        <Text style={{ color: Colors.Withe, fontWeight: '500' }}>Save</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}