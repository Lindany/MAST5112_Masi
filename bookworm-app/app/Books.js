import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


export const BooksPage = () => 
<SafeAreaView style={styles.container}>
  <View >
    <Text style={{ fontSize: 20 }}>
      Books
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