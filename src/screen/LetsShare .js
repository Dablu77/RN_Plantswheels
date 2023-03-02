import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/ReusableComponets/Header'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import Colors from '../Components/utils/Colors'
import CustomButton from '../Components/ReusableComponets/CustomButton'

export default function LetsShare({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Let’s Share " onPress={() => navigation.goBack('')} />
      <Text>LetsShare </Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/rafiki.png')} style={{ height: heightPixel(300), width: widthPixel(300) }} />
      </View>
      <View style={{ top: heightPixel(40) }}>
        <Text style={{ textAlign: 'center', color: Colors.Lightgrey, fontWeight: '500', fontSize: fontPixel(16) }}>Bring your friends and earn together flexibly.</Text>
      </View>
      <View style={{ top: 50 }}>
        <CustomButton
          title={'Share your link'}
          onPress={() => navigation.navigate('DrowerNavigation')}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, top: 50, paddingVertical: 13, marginHorizontal: 20, borderRadius: 10, borderColor: Colors.Orange }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: Colors.Orange, fontWeight: '500' }}>My code @234561</Text>
          <TouchableOpacity>
            <Text style={{ color: '#097150', fontWeight: '900', left: 5, fontSize: fontPixel(12) }}>Click to copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ top: 120, alignItems: 'center', justifyContent: 'center', borderWidth: 1, paddingVertical: 15, width: widthPixel(240), borderRadius: 10, borderColor: '#097150' }}>
          <Text style={{ color: '#097150', fontWeight: '500', fontSize: fontPixel(20) }}>Earned till now ₹ 100</Text>
        </View>
      </View>

    </SafeAreaView>
  )
}