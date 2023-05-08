import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity,ActivityIndicator} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {fetchProducts} from './Redux/FetchProductSlice';
const ItemList = ({navigation}) => {
  const products = useSelector(state => state.product.data);
  const items = useSelector(state => state.items.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <View style={{flex: 1, marginTop: 40}}>
      <View
        style={{
          backgroundColor: '#000',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 50,
          justifyContent: 'center',

        }}>
        <Text
          style={{color: '#fff', fontSize: 20}}
        >
          {'Product Listing'}
        </Text>
        
      </View>
      <FlatList
        data={items}
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
                paddingRight: 50,
                paddingHorizontal: 10,
              }}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
             
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}>
                  {item.title}
                </Text>

                <Text style={{fontSize: 16}}>
                  Category:-{item.category}
                </Text>
                {/* <Text style={{fontSize: 16}}>{item.description}</Text> */}
                <Text style={{fontSize: 16,fontWeight: 'bold'}}>£{item.price}</Text>
              </View>
            </View>
          );
        }}></FlatList>

    </View>
  );
};

export default ItemList;
