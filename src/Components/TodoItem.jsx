import React from 'react';
import { TouchableOpacity,  Text, StyleSheet} from 'react-native';

export default function TodoItem({item, pressHandler}) {
   return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
         <Text style={styles.titleStyle}>{item.title}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   titleStyle: {
      padding: 16,
      margin: 16,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderRadius: 10
   }
})