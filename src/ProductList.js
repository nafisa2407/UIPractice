import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import SendSMS from 'react-native-sms';
import {deleteProduct} from './Redux/ProductSlice';
import call from 'react-native-phone-call';
const ProductList = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('9594945468');
  const [bodySMS, setBodySMS] = useState(
    'Please follow https://aboutreact.com',
  );

  const products = useSelector(state => state.product.data);
  const dispatch = useDispatch();

  const initiateSMS = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 11) {
      alert('Please insert correct contact number');
      return;
    }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
        // An array of types
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured', error);
        }
      },
    );
  };

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 11) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: mobileNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <View style={{flex: 1, marginTop: 40}}>
      <View
        style={{
          alignSelf: 'center',
          right: 10,

          zIndex: 1,
          position: 'absolute',
          bottom: 10,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddProduct', {type: 'add'})}>
          <Image
            source={require('./images/add.png')}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignSelf: 'center',
                borderRadius: 5,
                alignContent: 'center',
                paddingVertical: 20,
                margin: 5,
                paddingHorizontal: 10,
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor:
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() =>
                  navigation.navigate('AddProduct', {
                    type: 'edit',
                    data: item,
                    index: index,
                  })
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {item && item.name && item.name.charAt(0)}
                </Text>
              </TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}>{item.name}</Text>
                <Text style={{fontSize: 16}}>{item.number}</Text>
                <Text style={{fontSize: 16}}>{item.email}</Text>
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  // marginTop: 30,
                  position: 'absolute',
                  right: 30,
                  // top: 10,
                }}>
                <TouchableOpacity onPress={() => triggerCall()}>
                  <Image
                    source={require('./images/call.png')}
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  position: 'absolute',
                  right: 80,
                }}>
                <TouchableOpacity onPress={() => initiateSMS()}>
                  <Image
                    source={require('./images/msg.png')}
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default ProductList;
