import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Components/utils/Colors'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../Components/ReusableComponets/CustomButton';

const { width, height } = Dimensions.get('window')

export default function Otp({ navigation }) {
    const [pin, setPin] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <View style={{ alignItems: 'center', top: 20, paddingVertical: 40 }}>
                <Image
                    style={{ height: height / 6, width: width / 2.4, borderRadius: 10 }}
                    source={require('../assets/Scootersmall.png')}
                />
            </View>
            <View style={{ alignItems: 'center', }}>
                <Text style={{ color: Colors.Balck, fontSize: 18, fontWeight: '500' }}>OTP Verification</Text>
                <Text style={{ color: Colors.Balck, fontSize: 15, marginTop: 10, fontWeight: '500' }}>Code sent to +99******56</Text>

            </View>
            <View style={{ marginVertical: '-13%' }}>
                <OTPInputView
                    style={{ marginHorizontal: 25, height: height / 4, }}
                    pinCount={4}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={code => {
                        setPin(code);
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', top: 15 }}>
                <TouchableOpacity style={{ alignItems: 'center', }}>
                    <Text style={{ color: Colors.Orange, fontWeight: '500' }}>Resend</Text>
                </TouchableOpacity>
                <Text style={{ color: Colors.Lightgrey, fontWeight: '500' }}> code in 55 s</Text>
            </View>
            <View style={{ marginVertical: 50 }}>
                <CustomButton
                    title={'Verify & Proceed'}
                    onPress={() => navigation.navigate('Signup')}

                />
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({


    borderStyleHighLighted: {
        borderColor: Colors.Orange,

    },

    underlineStyleBase: {
        height: 55,
        width: 70,
        borderRadius: 4,
        color: Colors.Balck,
        fontSize: 17,
        backgroundColor: '#F7F6F4',
    },

    underlineStyleHighLighted: {
        borderColor: Colors.Orange,
    },

});