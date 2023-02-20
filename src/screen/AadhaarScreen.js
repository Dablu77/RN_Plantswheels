import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/ReusableComponets/Header';
import Colors from '../Components/utils/Colors';
import CustomButton from '../Components/ReusableComponets/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import { heightPixel, screenWidth, widthPixel } from '../Components/ReusableComponets/Dimensions';

const { width, height } = Dimensions.get('window');

export default function AadhaarScreen(props) {
  const [imageUrlPath, setImageUrlPath] = useState(null);
  const [imageUrlData, setImageUrlData] = useState(null);
  console.log("log...................", imageUrlPath);

  const onGallary = () => {
    ImagePicker.openPicker({
      cropping: true,
      quality: 1,
      // includeBase64: true,
      height: heightPixel(550),
      width: widthPixel(300),
      mediaType: 'any',
    }).then(image => {
      setImageUrlPath(image.path);
      setImageUrlData(image);
    });
  };

  const onGallary2 = () => {
    ImagePicker.openPicker({
      cropping: true,
      quality: 1,
      mediaType: 'any',
    }).then(image => {
      setImageUrlPath(image.path);
      setImageUrlData(image);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Withe }}>
      <Header title="Aadhar" onPress={() => props.navigation.goBack('')} />
      <View
        style={{
          marginTop: 15,
          backgroundColor: Colors.Withe,
          marginHorizontal: 15,
        }}>
        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500' }}>
          Aadhaar number
        </Text>
        <TextInput
          placeholder="9586 2415 9345"
          keyboardType="number-pad"
          maxLength={12}
          placeholderTextColor={Colors.Lightgrey}
          style={{
            borderWidth: 1,
            borderColor: Colors.Lightgrey,
            borderRadius: 10,
            color: Colors.Balck,
            paddingHorizontal: 15,
            fontWeight: '500',
            fontSize: 16,
            paddingVertical: 10,
            marginVertical: 10,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ color: Colors.Balck, fontSize: 17, fontWeight: '500' }}>
          Upload Aadhaar card images
        </Text>
      </View>
      <TouchableOpacity onPress={onGallary} style={{ height: height / 5 }}>
        <ImageBackground
          source={require('../assets/Front2.png')}
          style={{
            paddingVertical: '22%',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginHorizontal: 30,
            borderRadius: 10,
            borderColor: Colors.Lightgrey,
          }}>
          {imageUrlPath && (
            <Image
              style={{ height: 150, width: '95%', borderRadius: 8, justifyContent: 'center' }}
              source={{ uri: imageUrlPath }}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={onGallary2} style={{ height: height / 5 }}>
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
          {imageUrlPath && (
            <Image
              style={{ height: heightPixel(150), width: widthPixel(screenWidth - 20), borderRadius: 8, resizeMode: 'cover' }}
              source={{ uri: imageUrlPath }}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>

      <View style={{ top: 30 }}>
        <CustomButton
          title="Save"
          onPress={() => {
            console.log('hey');
          }}
        />
      </View>

      <View
        style={{
          alignSelf: 'center',
          paddingHorizontal: 30,
          marginVertical: 10,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require('../assets/fullstop.png')}
          />
          <Text style={{ color: Colors.Lightgrey }}>
            This is Compulsory for KYC
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require('../assets/fullstop.png')}
          />
          <Text style={{ color: Colors.Lightgrey }}>
            Texts and your picture must be visible properly.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require('../assets/fullstop.png')}
          />
          <Text style={{ color: Colors.Lightgrey }}>
            dvisable to take photo without flashlight to avoid glare.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
