import { View, Text, SafeAreaView, TextInput, Image } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import CustomButton from '../Components/ReusableComponets/CustomButton'

export default function EmergencyInfoScreen(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <Header
                title="Emergency details"
                onPress={() => props.navigation.goBack('')}
            />
            <View style={{ marginTop: 15, backgroundColor: Colors.Withe, marginHorizontal: 15 }}>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, top: 5 }}>
                    <Image source={require('../assets/account.png')}
                        style={{ height: 22, width: 22, }}
                    />
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>User ID</Text>

                </View>
                <TextInput
                    placeholder='7720393830'
                    // keyboardType="number-pad"
                    maxLength={10}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 15 }} />
            </View>
            <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, top: 5 }}>
                    <Image source={require('../assets/account.png')}
                        style={{ height: 22, width: 22, }}
                    />
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Emergency Contact Person’s Name</Text>

                </View>
                <TextInput
                    placeholder='Dablu Gupta'
                    // keyboardType="number-pad"
                    maxLength={10}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 15 }} />
            </View>
            <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, top: 5 }}>
                    <Image source={require('../assets/Vector10.png')}
                        style={{ height: 25, width: 15, }}
                    />
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Emergency Contact Number</Text>

                </View>
                <TextInput
                    placeholder='7737898734'
                    // keyboardType="number-pad"
                    maxLength={10}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 15 }} />
            </View>
            <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, top: 5 }}>
                    <Image source={require('../assets/Vector9.png')}
                        style={{ height: 20, width: 20, }}
                    />
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Blood Group</Text>

                </View>
                <TextInput
                    placeholder='B+'
                    // keyboardType="number-pad"
                    maxLength={10}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 15 }} />
            </View>
            <View style={{ backgroundColor: Colors.Withe, marginHorizontal: 15 }}>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, top: 5 }}>
                    <Image source={require('../assets/Vector4.png')}
                        style={{ height: 20, width: 20, }}
                    />
                    <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500', paddingLeft: 10 }}>Medications if any-</Text>

                </View>
                <TextInput
                    placeholder='Sugar, B.P '
                    // keyboardType="number-pad"
                    maxLength={10}
                    placeholderTextColor={Colors.Lightgrey}
                    style={{ borderWidth: 1, borderColor: Colors.Lightgrey, borderRadius: 10, color: Colors.Balck, paddingHorizontal: 15, marginHorizontal: 10, fontWeight: '500', fontSize: 16, paddingVertical: 10, marginVertical: 15 }} />
            </View>
            <CustomButton
                title='Save'
            />
        </SafeAreaView>
    )
}