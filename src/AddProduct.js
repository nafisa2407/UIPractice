import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {addProduct, editProduct,deleteProduct} from './Redux/ProductSlice';

const AddProduct = ({navigation}) => {
  const route = useRoute();
  console.log('route', route);

  const [name, setName] = useState(
    route.params.type == 'edit' ? route.params.data.name : '',
  );
  const [number, setNumber] = useState(
    route.params.type == 'edit' ? route.params.data.number : '',
  );

  const [email, setEmail] = useState(
    route.params.type == 'edit' ? route.params.data.email : '',
  );
  const dispatch = useDispatch();

  return (
    <View style={{justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#000',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 50,
          paddingLeft: 10,
        }}>
        <Text
          style={{color: '#fff', fontSize: 20}}
          onPress={() => navigation.goBack()}>
          {'< Back'}
        </Text>
        <Text style={{color: '#fff', fontSize: 18, paddingLeft: 20}}>
          {' '}
          {route.params.type == 'add' ? 'Create Contact' : 'Edit Contact'}
        </Text>
      </View>
      <TextInput
        placeholder="Enter Name"
        onChangeText={name => setName(name)}
        value={name}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Phone Number"
        onChangeText={number => setNumber(number)}
        value={number}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Email id"
        onChangeText={email => setEmail(email)}
        value={email}
        style={styles.input}
      />
      {route.params.type == 'add' ? (
        <TouchableOpacity
       style={styles.addButtonStyle}
          onPress={() => {
            
              dispatch(addProduct({name: name, number: number, email: email}));
            

            navigation.goBack();
          }}>
          <Text style={styles.textStyle}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
                dispatch(
                  deleteProduct(route.params.index),
                );
         
             

              navigation.goBack();
            }}>
            <Text style={styles.textStyle}>
             Delete
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
             
           
                dispatch(
                  editProduct({
                    name: name,
                    number: number,
                    email: email,
                    index: route.params.index,
                  }),
                );
              

              navigation.goBack();
            }}>
            <Text style={styles.textStyle}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal:20
  },
  buttonStyle: {
    backgroundColor: '#08036D',
    //
    flex :1,
    // width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    // marginBottom: 20,
  },
  addButtonStyle: {
    backgroundColor: '#08036D',
    alignSelf:'center',
  
     width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    //marginHorizontal: 20,
    // marginBottom: 20,
  },
  textStyle: {color: '#fff', fontSize: 18},
});

export default AddProduct;
