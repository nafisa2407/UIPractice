import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    useEffect(()=>{
        getData();
    },[])
    const getData=async()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        console.log('res',res)
    }
  return (
    <View>
      <Text>AxiosAPI</Text>
    </View>
  )
}

export default AxiosAPI

const styles = StyleSheet.create({})