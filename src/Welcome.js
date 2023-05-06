import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from '../src/common/responsiveDimensions';

const App = () => {
  const [data, setData] = useState([
    {
      image: require('./images/1.png'),
      title: 'Pick Your Squad',
      msg: 'Spend £150m on 15 players and score points based on real-life performance',
    },
    {
      image: require('./images/2.jpg'),
      title: 'Predict every Result',
      msg: 'Guess your first team to score and double your points',
    },
    {
      image: require('./images/3.jpg'),
      title: 'Take on your friends',
      msg: 'Get points for your score line,goal difference and goal scored by each side',
    },
    {
      image: require('./images/4.jpg'),
      title: 'Pick Your SquadTeam',
      msg: 'Set up Leagues to see whose best at predicting results!',
    },
    {
      image: require('./images/5.jpg'),
      title: 'Take on your friends',
      msg: 'Get points for your score line,goal difference and goal scored by each side',
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef();
  return (
    <View style={{flex: 1, backgroundColor: '#08036D'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontWeight: 'bold',
          color: '#fff',
          fontSize: 22,
        }}>
        {' '}
        Fantasy Football
      </Text>

      <View>
        <FlatList
          data={data}
          ref={listRef}
          onScroll={e => {
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
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Image
                  source={item.image}
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
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    marginHorizontal: 30,
                    marginTop: 10,
                  }}>
                  {item.msg}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: selectedIndex == index ? '#fff' : 'gray',
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
          width: '80%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          //   flexDirection: 'row',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'cyan',
            width: '80%',
            height: 50,
            borderRadius: 2,
          }}
          onPress={() => {
            {
              if (selectedIndex > 0) {
                listRef.current.scrollToIndex({
                  index: selectedIndex - 1,
                  animation: true,
                });
              }
            }
          }}>
          <Text style={{color: '#08036D', fontSize: 16}}>Login to play </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
            width: '80%',
            height: 50,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
            borderColor: 'cyan',
            borderWidth: 1,
          }}
          onPress={() =>
            listRef.current.scrollToIndex({
              index: selectedIndex + 1,
              animation: true,
            })
          }>
          <Text style={{color: '#fff', fontSize: 16}}>Try as a guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
