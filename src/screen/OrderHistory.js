import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Components/utils/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions';



export default function OrderHistory({ navigation }) {

    const [date, setDate] = useState('');
    const [getDate, setGetDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
        AsyncStorage.getItem('Date').then(value => setGetDate(value));
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {

        const formattedDate = `${('0' + date.getDate()).slice(-2)}/${(
            '0' +
            (date.getMonth() + 1)
        ).slice(-2)}/${date.getFullYear()}`;

        setDate(formattedDate);

        hideDatePicker();
    };

    const dataSrt = [
        {
            OrderID: '#378W',
            ShopID: '74476476484',
            CustomerID: '674738648',
            date: "25 june 2023 5.00 PM",
            Price: "₹70",
            Distance: "5kms",

        },
        {
            OrderID: '#378W',
            ShopID: '74476476484',
            CustomerID: '674738648',
            date: "25 june 2023 5.00 PM",
            Price: "₹90",
            Distance: "5kms",

        },
        {
            OrderID: '#378W',
            ShopID: '74476476484',
            CustomerID: '674738648',
            date: "25 june 2023 5.00 PM",
            Price: "₹ 10",
            Distance: "5kms",

        },
        {
            OrderID: '#378W',
            ShopID: '74476476484',
            CustomerID: '674738648',
            date: "25 june 2023 5.00 PM",
            Price: "₹ 20",
            Distance: "5kms",

        },
        {
            OrderID: '#378W',
            ShopID: '74476476484',
            CustomerID: '674738648',
            date: "25 june 2023 5.00 PM",
            Price: "₹ 60",
            Distance: "5kms",

        },
        {
            OrderID: '#378W',
            ShopID: '74476476484',
            CustomerID: '674738648',
            date: "25 june 2023 5.00 PM",
            Price: "₹ 100",
            Distance: "5kms",

        },
    ]


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View
                style={{
                    backgroundColor: Colors.Withe,
                    paddingHorizontal: '4%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 15,
                    justifyContent: 'space-between'

                }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome5 name="angle-left" color={"#313232"} size={28} />
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: Colors.Balck,
                                marginLeft: '8%',
                            }}>
                            OrderHistory
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: heightPixel(40), width: widthPixel(120), justifyContent: 'space-around', borderRadius: 7 }}>
                    <Text style={{ color: Colors.Balck, }}>15/07/2023</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <TouchableOpacity onPress={showDatePicker}>
                        <FontAwesome5 name="calendar-times" color={Colors.Orange} size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                {dataSrt.map((Value, index) => (
                    <View
                        key={index}

                        style={{ elevation: 9, backgroundColor: Colors.Withe, height: heightPixel(200), marginHorizontal: 10, marginVertical: 10, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 5 }}>
                            <Text style={{ color: Colors.Balck, fontSize: fontPixel(22), fontWeight: '500' }}>Order ID - {Value.OrderID}</Text>
                            <Text style={{ color: Colors.Balck, color: Colors.Lightgrey, fontWeight: '500' }}>{Value.date}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, top: 10 }}>
                            <Text style={{ color: Colors.Balck, color: Colors.Lightgrey, fontWeight: '500', fontSize: fontPixel(18) }}>Shop ID -</Text>
                            <Text style={{ color: Colors.Balck, color: Colors.Lightgrey, fontWeight: '500', left: 10 }}>{Value.ShopID}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, top: 30, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: Colors.Balck, color: Colors.Lightgrey, fontWeight: '500', fontSize: fontPixel(18) }}>Customer ID - </Text>
                                <Text style={{ color: Colors.Balck, color: Colors.Lightgrey, fontWeight: '500', left: 10 }}>{Value.CustomerID}</Text>

                            </View>
                            <Ionicons name="location-sharp" color={Colors.Lightgrey} size={25} />
                        </View>
                        <View style={{ marginTop: "10%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15 }}>
                            <TouchableOpacity style={{ borderRadius: 20, backgroundColor: Colors.Green, paddingVertical: 10, width: widthPixel(120), alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ color: Colors.Withe, fontWeight: "500", fontSize: 16 }}>{Value.Price}</Text>
                            </TouchableOpacity>
                            <Text style={{ color: Colors.Balck, color: Colors.Lightgrey, fontWeight: '500', }}>Distance {Value.Distance}</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('OrderDetailsScreen')}
                                style={{ borderBottomWidth: 1, borderColor: Colors.Orange }}>
                                <Text style={{ color: Colors.Balck, color: Colors.Orange, fontWeight: '500', }}>Details</Text>

                            </TouchableOpacity>

                        </View>
                    </View>

                ))}

            </ScrollView>
        </SafeAreaView>
    )
}