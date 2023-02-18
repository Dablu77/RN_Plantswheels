import { View, Text, SafeAreaView, Image, Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Components/utils/Colors'
import CustomButton from '../Components/ReusableComponets/CustomButton'
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get('window')

export default function Signup({ navigation }) {

    const SubmitBtn = () => {
        Toast.showWithGravity('Coupon worked successfully,your voucher will be sent shortly.', Toast.LONG, Toast.BOTTOM);

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe, }}>
            <View style={{ alignItems: 'center', marginVertical: 30 }}>
                <Image
                    style={{ height: height / 5, width: width / 2, borderRadius: 10 }}
                    source={require('../assets/Scootersmall.png')}
                />
            </View>
            <View style={Styles.sectionStyle}>
                <Image source={require('../assets/account.png')}
                    style={{ height: 25, width: 25, }}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="Name"
                    placeholderTextColor="#888888"

                />
            </View>
            <View style={Styles.sectionStyle}>
                <Image source={require('../assets/indiaflagicon.png')}
                    style={{ height: 23, width: 25, borderRadius: 25 }}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="Phone Numbber"
                    placeholderTextColor="#888888"

                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('AadhaarScreen')}

                style={{
                    borderWidth: 1,
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: Colors.Lightgrey,
                    marginVertical: 5

                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={require('../assets/Vector3.png')}
                        style={{ height: 18, width: 24, }}
                    />
                    <Text style={{ color: Colors.Lightgrey, paddingHorizontal: 15, fontWeight: '500' }}>
                        Aadhaar*
                    </Text>
                </View>
                <TouchableOpacity
                >
                    <Image source={require('../assets/chevron.png')}
                        style={{ height: 25, width: 25, }}
                    />
                </TouchableOpacity>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('DrivingLicenseScreen')}

                style={{
                    borderWidth: 1,
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: Colors.Lightgrey,
                    marginVertical: 5
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/Vector3.png')}
                        style={{ height: 18, width: 24, }}
                    />
                    <Text style={{ color: Colors.Lightgrey, paddingHorizontal: 15, fontWeight: '500' }}>
                        Driving License
                    </Text>
                </View>
                <TouchableOpacity

                >
                    <Image source={require('../assets/chevron.png')}
                        style={{ height: 25, width: 25, }}
                    />
                </TouchableOpacity>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('EmergencyInfoScreen')}

                style={{
                    borderWidth: 1,
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: Colors.Lightgrey,
                    marginVertical: 5
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/Vector2.png')}
                        style={{ height: 25, width: 15, }}
                    />
                    <Text style={{ color: Colors.Lightgrey, paddingHorizontal: 15, fontWeight: '500' }}>
                        Emergency Info*
                    </Text>
                </View>
                <TouchableOpacity
                >
                    <Image source={require('../assets/chevron.png')}
                        style={{ height: 25, width: 25, }}
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 40 }}>
                <TextInput
                    style={{ color: Colors.Balck, borderWidth: 1, width: width / 1.7, borderRadius: 10, borderColor: Colors.Lightgrey, height: 45, fontWeight: '500', paddingHorizontal: 15 }}

                    placeholder="Reference Code, If any"
                    placeholderTextColor={Colors.Lightgrey}
                />

                <TouchableOpacity
                    onPress={SubmitBtn}
                    style={{
                        height: 45, borderRadius: 10,
                        borderWidth: 1, width: width / 4, height: 40,
                        alignItems: 'center', justifyContent: 'center', borderColor: Colors.Lightgrey,
                        backgroundColor: Colors.Withe
                    }}>
                    <Text style={{ color: Colors.Orange, fontWeight: 'bold' }}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{}}>
                <CustomButton
                    title={'Verify & Proceed'}
                    onPress={() => navigation.navigate('TabNavigation')}

                />
            </View>

        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    imgstyle: {
        height: 350,
        marginHorizontal: 10
    },
    titlestyle: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 30,
        margin: 10

    },
    input: {
        flex: 1,
        height: 40,
        color: '#F7B02D',
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
        marginVertical: 5,
        borderColor: Colors.Lightgrey,
        paddingHorizontal: 10,
        backgroundColor: Colors.Withe

    },

})
