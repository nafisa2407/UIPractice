import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const Product = () => {
  const jsonPrintData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    
  ];

  return (
    <View style={styles.flatList_contailer}>
      <FlatList
        data={jsonPrintData}
        horizontal
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <View style={styles.flatList_contailer_item}>
              <Text style={styles.text_box}>{item.title}</Text>

              <Text style={styles.text_box}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList_contailer: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList_contailer_item: {
    justifyContent:'flex-start',
    height:50,
    backgroundColor:'gray',
    alignSelf:'center'
  },
});
export default Product;
