import { View, Text, SafeAreaView, Image, ScrollView, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Components/utils/Colors'
import Header from '../Components/ReusableComponets/Header'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'

export default function Personaldetails({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header title="Personal Info" onPress={() => navigation.goBack('')} />
            <ScrollView contentContainerStyle={{ marginVertical: 20, paddingBottom: heightPixel(60) }}>
                <View style={Styles.sectionStyle}>
                    <Image source={require('../assets/account.png')}
                        style={{ height: 25, width: 25, }}
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder="Venkatesh Prasad"
                        placeholderTextColor="#888888"

                    />
                </View>
                <View style={Styles.sectionStyle}>
                    <Image source={require('../assets/indiaflagicon.png')}
                        style={{ height: 25, width: 25, borderRadius: 25 }}
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder="7498547759"
                        placeholderTextColor="#888888"
                    />
                </View>
                <View style={{ marginVertical: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, height: heightPixel(80), marginHorizontal: 20, borderRadius: 10 }}>
                    <Text style={{ fontWeight: '500', color: Colors.Lightgrey }}>2nd Floor, Tambe Bldg, 361/a Dr Ambedkar Rd, Matunga (c.r)</Text>
                </View>
                <View style={{ marginTop: 15, backgroundColor: Colors.Withe, marginHorizontal: 20, }}>
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingHorizontal: 5 }}>Aadhaar number </Text>
                    <TextInput
                        placeholder='9586  2415  9345'
                        // keyboardType="number-pad"
                        maxLength={16}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
                </View>
                <TouchableOpacity style={{}}>
                    <ImageBackground
                        source={require('../assets/Front2.png')}
                        style={{
                            paddingVertical: '22%',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30,
                            marginHorizontal: 30,
                            borderRadius: 10,
                            borderColor: Colors.Lightgrey,
                            resizeMode: 'cover'
                        }}>

                        {/* <Image
                            style={{ height: heightPixel(150), width: widthPixel(screenWidth - 20), borderRadius: 8, resizeMode: 'cover' }}
                            source={require('../assets/')}
                        /> */}

                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <ImageBackground
                        source={require('../assets/BackIcone.png')}
                        style={{
                            paddingVertical: '22%',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30,
                            marginHorizontal: 30,
                            borderRadius: 10,
                            borderColor: Colors.Lightgrey,
                            resizeMode: 'cover'
                        }}>

                        {/* <Image
                            style={{ height: heightPixel(150), width: widthPixel(screenWidth - 20), borderRadius: 8, resizeMode: 'cover' }}
                            source={require('../assets/')}
                        /> */}

                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ marginTop: 20, backgroundColor: Colors.Withe, marginHorizontal: 20, }}>
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingHorizontal: 5 }}>PAN number</Text>
                    <TextInput
                        placeholder='GYIJ7678890'
                        // keyboardType="number-pad"
                        maxLength={16}
                        placeholderTextColor={Colors.Lightgrey}
                        style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 10 }} />
                </View>
                <TouchableOpacity style={{}}>
                    <ImageBackground
                        source={require('../assets/panicone.png')}
                        style={{
                            paddingVertical: '22%',
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30,
                            marginHorizontal: 30,
                            borderRadius: 10,
                            borderColor: Colors.Lightgrey,
                            resizeMode: 'cover'
                        }}>

                        {/* <Image
                            style={{ height: heightPixel(150), width: widthPixel(screenWidth - 20), borderRadius: 8, resizeMode: 'cover' }}
                            source={require('../assets/')}
                        /> */}

                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.Orange, width: widthPixel(130), alignItems: 'center', justifyContent: 'center', paddingVertical: 13, borderRadius: 10 }}>
                        <Text style={{ color: Colors.Withe, fontWeight: '500' }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({


    input: {
        flex: 1,
        height: 40,
        color: Colors.Balck,
        fontSize: 15,
        paddingHorizontal: 15,
        fontWeight: '500'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        borderColor: Colors.Lightgrey,
        paddingHorizontal: 10,
        backgroundColor: Colors.Withe

    },

})
