import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Colors from '../utils/Colors';
import {
    fontPixel,
    heightPixel,
    widthPixel,
} from '../ReusableComponets/Dimensions';
import CustomButton from '../ReusableComponets/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Svg from 'react-native-svg';




const Rating = ({ rating, maxRating }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
            {Array(rating)
                .fill(1)
                .map((el, index) => (
                    <View key={index}>
                        <FontAwesome name="star" color={"#FFC928"} size={28} />

                    </View>
                ))}
            {Array(maxRating - rating)
                .fill(1)
                .map((el, index) => (
                    <View key={index}>
                        <FontAwesome name="star" color={"#FFC928"} size={28} />

                    </View>
                ))}
        </View>
    );
};

const CustomDrawerMenu = props => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.Withe }}>
            <DrawerContentScrollView
                {...props}
            // contentContainerStyle={{ backgroundColor: Colors.Balck }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: 30,
                        backgroundColor: Colors.Withe,
                    }}>
                    <Image
                        source={require('../../assets/Ellipse.png')}
                        style={{ height: heightPixel(90), width: widthPixel(90) }}
                    />
                    <View>
                        <Rating rating={4} maxRating={5} />
                    </View>
                    <Text
                        style={{
                            color: Colors.Orange,
                            marginTop: 10,
                            fontWeight: 'bold',
                            fontSize: fontPixel(20),
                        }}>
                        Jacqueline Fernandez
                    </Text>
                    <Text
                        style={{
                            color: Colors.Lightgrey,
                            marginTop: 5,
                            fontWeight: '500',
                            fontSize: fontPixel(18),
                        }}>
                        Joined 322 days Ago
                    </Text>
                </View>
                <View>
                    <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/account.png')}
                                    style={{ height: heightPixel(30), width: widthPixel(30) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                User ID : 00154
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('OrderHistory')}

                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/arowupdown.png')}
                                    style={{ height: heightPixel(30), width: widthPixel(20) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Order History
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/verIcone.png')}
                                    style={{ height: heightPixel(20), width: widthPixel(30) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Incentives
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Support')}

                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/SupportIcone.png')}
                                    style={{ height: heightPixel(30), width: widthPixel(30) }}
                                />
                                {/* <Image
                                    href={require('../../assets/support.svg')}
                                    width={100}
                                    height={100}
                                /> */}

                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Support
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/Offers.png')}
                                    style={{ height: heightPixel(30), width: widthPixel(30) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Offers for you
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Personaldetails')}

                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/account.png')}
                                    style={{ height: heightPixel(30), width: widthPixel(30) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Personal info
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/Vehicledetails.png')}
                                    style={{ height: heightPixel(25), width: widthPixel(25) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Vehicle details
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Accountdetails')}

                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/Accountdetails.png')}
                                    style={{ height: heightPixel(25), width: widthPixel(25) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Account details
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#F7F6F4',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    height: heightPixel(40),
                                    width: widthPixel(40),
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/Preferred.png')}
                                    style={{ height: heightPixel(30), width: widthPixel(30) }}
                                />
                            </View>
                            <Text
                                style={{
                                    color: Colors.Lightgrey,
                                    fontSize: fontPixel(20),
                                    left: widthPixel(15),
                                }}>
                                Preferred language
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}>
                        <View
                            style={{
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: Colors.Orange,
                                height: heightPixel(45),
                                width: widthPixel(130),
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                            }}>
                            <Image
                                source={require('../../assets/SignOut.png')}
                                style={{ height: heightPixel(30), width: widthPixel(30) }}
                            />
                            <Text style={{ color: Colors.Orange, fontWeight: 'bold', fontSize: fontPixel(17) }}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                    <CustomButton
                        title='Invite'
                        onPress={() => { props.navigation.navigate("LetsShare") }}
                    />
                </View>
            </DrawerContentScrollView>
        </ScrollView>
    );
};

export default CustomDrawerMenu;
