import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { heightPixel } from '../Components/ReusableComponets/Dimensions';
import Colors from '../Components/utils/Colors';
import MapView from 'react-native-maps';

export default function Home() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: heightPixel(65),
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center',
          backgroundColor: Colors.Withe
        }}>
        <TouchableOpacity>
          <Image
            style={{ height: 30, width: 30, borderRadius: 20 }}
            source={require('../assets/logo.jpeg')}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/Vector10.png')}
              style={{ height: 25, width: 15, right: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ height: 30, width: 30, borderRadius: 20 }}
              source={require('../assets/Ellipse.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 10, }}>
        <MapView
          style={{
            height: '93%',
            width: '100%',
            borderRadius: 10
          }}
          initialRegion={{
            latitude: 28.5355,
            longitude: 77.391,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
