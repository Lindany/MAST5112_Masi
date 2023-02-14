import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


export const HistoryPage = () => 
<SafeAreaView style={styles.container}>
  <View >
    <Text style={{ fontSize: 20 }}>
      History
    </Text>
  </View>
</SafeAreaView>;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
      flex:1
    }
  });