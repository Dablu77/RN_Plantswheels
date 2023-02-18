import { View, Text, SafeAreaView, TextInput, Dimensions, Image } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import CustomButton from '../Components/ReusableComponets/CustomButton'

const { width, height } = Dimensions.get('window')


export default function AadhaarScreen(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header
                title="Aadhar"
                onPress={() => props.navigation.goBack('')}
            />
            <View style={{ marginTop: 15, backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500' }}>Aadhaar number</Text>
                <TextInput
                    placeholder='9586 2415 9345'
                    keyboardType="number-pad"
                    maxLength={12}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500' }}>Upload Aadhaar card images</Text>
            </View>
            <View style={{ height: height / 5, marginTop: 20, marginHorizontal: 30, borderRadius: 10, borderWidth: 1, borderColor: Colors.Lightgrey }}>

            </View>
            <View style={{ height: height / 5, marginTop: 15, marginHorizontal: 30, borderWidth: 1, borderRadius: 10, borderColor: Colors.Lightgrey }}>
            </View>
            <CustomButton
                title='Save'
                onPress={() => { console.log("hey") }}
            />
            <View style={{ alignSelf: 'center', paddingHorizontal: 30, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/fullstop.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey }}>This is Compulsory for KYC</Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/fullstop.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey }}>Texts and your picture must be visible properly.</Text>

                </View><View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/fullstop.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, }}>dvisable to take photo without flashlight to avoid glare.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}