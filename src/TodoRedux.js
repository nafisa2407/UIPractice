import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const TodoRedux = () => {
    const todos = useSelector(state=>state.todo.data)
  return (
    <View>
      <Text>TodoRedux</Text>
    </View>
  )
}

export default TodoRedux