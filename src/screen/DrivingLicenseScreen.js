import { View, Text, SafeAreaView, TextInput, Dimensions, Image } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import CustomButton from '../Components/ReusableComponets/CustomButton'

const { width, height } = Dimensions.get('window')


export default function DrivingLicenseScreen(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header
                title="Driving License"
                onPress={() => props.navigation.goBack('')}
            />
            <View style={{ marginTop: 15, backgroundColor: Colors.Withe, marginHorizontal: 15 }}>
                <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500' }}>Driving License number </Text>
                <TextInput
                    placeholder='KA08 2017 000 5771'
                    // keyboardType="number-pad"
                    maxLength={16}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500' }}>Upload Driving License images</Text>
            </View>
            <View style={{ height: height / 5, marginTop: 20, marginHorizontal: 30, borderRadius: 10, borderWidth: 1, borderColor: Colors.Lightgrey }}>

            </View>
            <View style={{ height: height / 5, marginTop: 15, marginHorizontal: 30, borderWidth: 1, borderRadius: 10, borderColor: Colors.Lightgrey }}>
            </View>
            <CustomButton
                title='Save'
                onPress={() => { console.log("hey") }}
            />
            <View style={{ alignSelf: 'center', marginHorizontal: 35, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/fullstop.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, paddingHorizontal: 10 }}>This is optional if you will use a vehicle exempted from vehicle Registration.</Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/fullstop.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, flexWrap: 'wrap', paddingHorizontal: 10 }}>Texts and Images must be visible properly. Advisable to take photo without flashlight to avoid glare.</Text>

                </View><View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 25, width: 25, }}
                        source={require('../assets/fullstop.png')}
                    />
                    <Text style={{ color: Colors.Lightgrey, flexWrap: 'wrap', paddingHorizontal: 10 }}>Your profile picture and the picture on this Driving License should match.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}