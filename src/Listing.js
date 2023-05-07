import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo,editTodo} from './Redux/TodoSlice';
import { useRoute } from '@react-navigation/native';
import { addProduct } from './Redux/ProductSlice';

const Listing = ({navigation}) => {
  const route = useRoute()
  console.log('route',route)
 
   const [title, setTitle] = useState(route.params.type=='edit'?route.params.data.title:'');
 const [desc, setDesc] = useState(route.params.type=='edit'?route.params.data.desc:'');
  const dispatch = useDispatch();

  return (
    <View style={{justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#000',
          alignItems: 'center',
         flexDirection:'row',
          width: '100%',
          height: 50,
          paddingLeft:10
        }}>
        <Text style={{color: '#fff', fontSize: 20}} onPress={()=>navigation.goBack()}>{'< Back'}</Text>
        <Text style={{color: '#fff', fontSize: 18, paddingLeft:20}}> {route.params.type=='add'?'Add Todo':'Edit Todo'}</Text>
      </View>
      <TextInput
        placeholder="Enter Task Title"
        onChangeText={title => setTitle(title)}
        value={title}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Description"
        onChangeText={desc => setDesc(desc)}
        value={desc}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          if(route.params.type=='add'){
            dispatch(addProduct({title: title, desc: desc}));
          }
          //dispatch(action(payload));
          else{
            dispatch(editTodo({title: title, desc: desc,index:route.params.index}));
          }

          navigation.goBack();
        }}>
        <Text style={styles.textStyle}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#08036D',
    // width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  textStyle: {color: '#fff', fontSize: 18},
});

export default Listing;
