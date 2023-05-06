import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
let test = [];
const LocalDataBase = ({navigation}) => {
  const [data, setData] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  setFirstTask = async value => {
    const task1 = [
      {
        title: 'A',
        desc: 'Ansari',
      },
      {
        title: 'B',
        desc: 'Ansari',
      },
    ];
    try {
      await AsyncStorage.setItem('todo', JSON.stringify(task1));
    } catch (e) {
      // save error
    }

  };

  const test = () => {
    getLocalData();
  };
  const saveLocalData = async () => {
    navigation.navigate('TodoList', {test});
  };

  // useEffect(() => {
  //   AsyncStorage.clear();
  // }, []);

  const getLocalData = async () => {
    let data = await AsyncStorage.getItem('todo');

    data = JSON.parse(data);
    setData(data);
  };

  const AddData = () => {
    setModalVisible(!isModalVisible);
  };

  const onTitleChange = title => {
    setTitle(title);
  };

  const renderItem = () => {
    return (
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(50),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./images/1.png')}
          style={{
            width: '80%',
            height: '60%',
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 20,
            marginTop: 20,
          }}>
          {'item.title'}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            marginHorizontal: 30,
            marginTop: 10,
          }}>
          {'item.msg'}
        </Text>
      </View>
    );
  };

  const editItem = async (title, desc,index) => {
    navigation.navigate('EditList', { title, desc,index,test});
  };

  const deleteItem = async index => {
    const tempData = data;
    const filteredData = tempData.filter((item, i) => {
      return i != index;
    });
    setData(filteredData);
    await AsyncStorage.setItem('todo', JSON.stringify(filteredData));
  };

  const RowItem = ({item: {title, desc}, index}) => {
    return (
      <View style={styles.flatList_container_item}>
        <View
          style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={styles.text_box}>{title}</Text>
          <Text>{desc}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => deleteItem(index)}
            style={{
              justifyContent: 'center',
              alignItems: 'space-between',
              flex: 1,
              flexDirection: 'row',
            }}>
            {/* <Text>Delete</Text> */}
            <Image
              source={require('./images/delete.png')}
              style={{
                width: 24,
                height: 24,
                alignSelf: 'center',
                // marginTop: 30,
                // borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => editItem(title, desc,index)}>
            {/* <Text>Edit</Text> */}
            <Image
              source={require('./images/edit.png')}
              style={{
                width: 24,
                height: 24,
                alignSelf: 'center',
                // marginTop: 30,
                // borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {!data.length ? (
        <View style={{flex: 1}}>
          <Image
            source={require('./images/test.jpeg')}
            style={{
              alignSelf: 'center',
              marginTop: 30,
              borderRadius: 10,
            }}
          />
          <TouchableOpacity style={styles.buttonStyle}>
            <Text
              onPress={() => {
                saveLocalData();
              }}
              style={{color: '#fff', alignSelf: 'center'}}>
              Create Task
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.flatList_container}>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return <RowItem item={item} index={index} />;
              }}
              // renderItem={({item}) => {
            
            />
          </View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text
              onPress={() => {
                //mergeUsers();
                saveLocalData();
              }}
              style={{color: '#fff', alignSelf: 'center'}}>
              Create Task
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LocalDataBase;

const styles = StyleSheet.create({
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
  textStyle: {color: 'red', fontSize: 18},
  flatList_container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  flatList_container_item: {
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#08036D',
    borderWidth: 1,
    flexDirection: 'row',
  },
  text_box: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'red',
  },
});
