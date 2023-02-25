import React, { useState } from 'react';
import { Text, FlatList, View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

// Componenet
import { Header, TodoItem, AddTodo } from './src/Components';

const App = () => {
   const [todos, setTodos] = useState([
      { title: 'Buy Coffee', key: '1' },
      { title: 'Create An App', key: '2' },
      { title: 'Play On Switch', key: '3' }
   ])

   const pressHandler = (key) => {
      setTodos(prevTodos => {
         return prevTodos.filter(newItem => newItem.key !== key)
      })
   }

   const submitHandler = (text) => {
      if (text.length > 3) {
         setTodos((prevTodos) => {
            return [
               { title: text, key: Math.random().toString() },
               ...prevTodos
            ]
         })
      } else {
         Alert.alert('! Warning', 'Your Text less than 3', [
            {
               text: 'exit',
               onPress: () => console.log('get out here')
            }
         ])
      }
   }
   return (
      <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss();
      }}>
         <View style={styles.container}>
            <Header />
            <View style={styles.content}>
               <AddTodo submitHandler={submitHandler} />
               <View style={styles.list}>
                  <FlatList data={todos} renderItem={({ item }) => (
                     <TodoItem item={item} pressHandler={pressHandler} />
                  )} />
               </View>
            </View>
         </View>
      </TouchableWithoutFeedback>  
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   content: {
      padding: 40
   },
   list: {
      marginTop: 20,
      color: '#191825'
   }
})

export default App;