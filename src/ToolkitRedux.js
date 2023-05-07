import {View, Text} from 'react-native';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { deleteTodo } from './Redux/TodoSlice';
const ToolkitRedux = ({navigation}) => {
  const todos = useSelector(state => state.todo.data);
  const dispatch = useDispatch();

  console.log("todos====>",todos);
  return (
    <View style={{flex:1}}>
      {/* <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          position: 'absolute',
         bottom: 10,
          right: 10,
          backgroundColor: 'red',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text onPress={() => navigation.navigate('Listing')}>Add</Text>
        </View> */}
      <TouchableOpacity 
      
      onPress={() => navigation.navigate('Listing',{type:'add'})}>
        <Text>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={({item,index}) => {

          return(
          <View
            style={{
              width: '90%',
              height: 50,
              backgroundColor:'#fff',
              alignSelf:'center',
              borderRadius:5,
              alignContent:'center',
              justifyContent:'center',
              padding:10

            }}>
            <Text>{item.title}</Text>
            <Text>{item.desc}</Text>
            
        <Text style={{position:'absolute',right:10,top:10,color:'red',alignSelf:'center'}}
         onPress={() => {
          //dispatch(action(payload));
          dispatch(deleteTodo(index));

       
        }}
        >Delete</Text>
      <Text style={{position:'absolute',right:10,top:30,color:'red',alignSelf:'center'}}
           onPress={() => navigation.navigate('Listing',{type:'edit',data:item,index})}>Edit</Text>
          </View>
          
          )
        }}></FlatList>
    </View>
  );
};

export default ToolkitRedux;
