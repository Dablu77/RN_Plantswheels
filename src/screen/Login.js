import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import CustomButton from '../Components/ReusableComponets/CustomButton'

export default function Login() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ color: '#097150', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Earn money by partnering with local shops</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{ height: '50%', width: "50%", }}
                    source={require('../assets/logo.jpeg')}
                />
            </View>
            <View style={styles.textInputCntnr}>
                <TextInput
                    placeholder="Enter your phone number"
                    placeholderTextColor="gray"
                    style={styles.input}
                    keyboardType="number-pad"
                    maxLength={10}

                />
            </View>
            <View>
                <Text style={{ color: '#7A7A7A', textAlign: 'center', fontWeight: '400', top: 10 }}>By entering your mobile number you accept our T&C</Text>
            </View>
            <CustomButton
                title={'Send OTP'}
            />
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginHorizontal: 30 }}>
                <Image
                    style={{ height: 25, width: 25, }}
                    source={require('../assets/whatsappicone.png')}
                />
                <View><Text style={{ color: "black" }}>Notifications</Text></View>
                <View><Text style={{ color: "black" }}>Notifications</Text></View>

            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    textInputCntnr: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15

    },
    input: {
        fontSize: 15,
        color: '#000',
    },
})