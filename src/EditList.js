import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditList = ({navigation, route}) => {
  const [title, setTitle] = React.useState(route.params.title);
  const [desc, setDesc] = React.useState(route.params.desc);

  EditItem = async () => {
    const task2 = {
      title: title,
      desc: desc,
    };
    let tempTodo = [];
    tempTodo = await AsyncStorage.getItem('todo');
    tempTodo = JSON.parse(tempTodo);
    tempTodo.splice(route.params.index, 1, task2);
    await AsyncStorage.setItem('todo', JSON.stringify(tempTodo));
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

      <TouchableOpacity style={styles.buttonStyle} onPress={() => EditItem()}>
        <Text style={styles.textStyle}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditList;

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
