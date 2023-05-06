import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from './src/common/responsiveDimensions';

const App = () => {
  const [data, setData] = useState([
    {image: require('./src/images/Slide1.png'), title: 'Title 1'},
    {image: require('./src/images/Slide2.png'), title: 'Title 2'},
    {image: require('./src/images/Slide3.png'), title: 'Title 3'},
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef();
  return (
    <View style={{flex: 1, backgroundColor: '#0D0864'}}>
      <Text style={{alignSelf:'center',marginTop:50,fontWeight:'bold',color:'#fff',fontSize:22}}> Fantasy Football</Text>
      <View>
        <FlatList
          data={data}
          ref={listRef}
          onScroll={e => {
            console.log(e.nativeEvent.contentOffset.x);
            let index = e.nativeEvent.contentOffset.x / responsiveWidth(100);
            setSelectedIndex(index);
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: responsiveWidth(100),
                  height: responsiveHeight(50),
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: '80%',
                    height: '50%',
                    alignSelf: 'center',
                    marginTop: 30,
                  }}
                />
                <Text style={{alignSelf: 'center', marginTop: 30}}>
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: selectedIndex == index ? 'blue' : 'gray',
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: 10,
              }}></View>
          );
        })}
      </View>
      <View
        style={{
          bottom: 50,
          position: 'absolute',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            width: 120,
            height: 50,
            borderRadius: 10,
          }}
          onPress={() =>
            {
              {if(selectedIndex > 0 ){
                listRef.current.scrollToIndex({
                  index: selectedIndex - 1,
                  animation: true,
                })
              }
            }
            
          }}>
          <Text style={{color: '#fff'}}>
            {selectedIndex < 1 ? 'Skip' : 'Previous'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 120,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            listRef.current.scrollToIndex({
              index: selectedIndex + 1,
              animation: true,
            })
          }>
          <Text style={{color: '#fff'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
