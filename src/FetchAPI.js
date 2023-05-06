import { View, Text } from 'react-native'
import React from 'react'

const FetchAPI = () => {
    const getData =() =>{
        fetch('api url',{
            header:{
                //token etc
                //authorization :'token'
            },
            method : {'POST' }, // get is default,
            body :{

            }
        })
    }
  return (
    <View>
      <Text>FetchAPI</Text>
    </View>
  )
}

export default FetchAPI