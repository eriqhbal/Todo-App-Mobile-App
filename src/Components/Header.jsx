import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>My Todos</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#3A98B9',
      paddingTop: 30,
      height: 80 
   },
   title: {
      color: '#EEEEEE',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
   }
})