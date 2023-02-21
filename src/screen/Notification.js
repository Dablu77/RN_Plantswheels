import { View, Text, SafeAreaView, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'

import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import * as Progress from 'react-native-progress';


export default function Notification({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const SrtData = [
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },
        {
            Title: "our payout is successfull and the amount is credited into your account."
        },


    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header
                title="Notifications"
                onPress={() => navigation.goBack('')}
            />
            <ScrollView>
                <View >
                    <Text style={{ color: Colors.Balck, fontWeight: '700', fontSize: fontPixel(20), marginHorizontal: 20, marginVertical: 10 }}>Volume</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Progress.Bar progress={0.7} width={widthPixel(330)} height={8} color={Colors.Orange} />
                </View>
                {SrtData.map((valu, index) =>
                    <View key={index}>

                        <View style={{ backgroundColor: '#F5F5F5', marginHorizontal: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', height: heightPixel(70), borderWidth: 1, marginTop: 20, borderRadius: 7 }}>
                            <Text style={{ color: Colors.Balck, fontWeight: '500', paddingHorizontal: 20 }}>{valu.Title}</Text>
                        </View>
                    </View>
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30, marginVertical: 15 }}>
                    <Text style={{ color: Colors.Balck, fontWeight: 'bold', fontSize: fontPixel(17) }}>Wallet notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#F58850' }}
                        thumbColor={isEnabled ? '#F58850' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}