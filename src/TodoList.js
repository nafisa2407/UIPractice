import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoList = ({navigation, route}) => {
  const [title, setTitle] = React.useState(route.params.title);
  const [desc, setDesc] = React.useState(route.params.desc);

  mergeUsers = async () => {
    const task2 = {
      title: title,
      desc: desc,
    };
    //save first user
    let tempTodo = [];
    let test = [];
    tempTodo = await AsyncStorage.getItem('todo');

    if (tempTodo && tempTodo.length != 0) {
      tempTodo = JSON.parse(tempTodo);

      tempTodo.map(item => {
        test.push(item);
      });
    }
    test.push(task2);

    await AsyncStorage.setItem('todo', JSON.stringify(test));

    route.params.test();
    navigation.goBack();
  };


  


  return (
    <View style={{justifyContent: 'center', marginTop: 50}}>
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

      <TouchableOpacity style={styles.buttonStyle} onPress={() => mergeUsers()}>
        <Text style={styles.textStyle}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;

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
