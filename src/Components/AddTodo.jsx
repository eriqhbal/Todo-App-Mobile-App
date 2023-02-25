import React, {useState} from 'react';
import {View,StyleSheet, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}) {
   const [todos, setTodos] = useState('');

   const changeName = (val) => {
      setTodos(val)
   }
   return (
      <View>
         <TextInput
         placeholder='Input Your Name'
         onChangeText={changeName}
         style={styles.input}/>
         <Button title='Add' onPress={() => submitHandler(todos)} color="#609966"/>
      </View>
   )
}

const styles = StyleSheet.create({
   input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,

   }
})