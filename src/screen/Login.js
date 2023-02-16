import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/ReusableComponets/CustomButton'
// import ToggleSwitch from 'toggle-switch-react-native'

export default function Login({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                onPress={() => navigation.navigate('Otp')}

            />
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginHorizontal: "20%" }}>
                <Image
                    style={{ height: 25, width: 25, }}
                    source={require('../assets/whatsappicone.png')}
                />
                <View><Text style={{ color: "black" }}>Notifications</Text></View>

                <Switch
                    trackColor={{ false: '#767577', true: '#F58850' }}
                    thumbColor={isEnabled ? '#F58850' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

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