import React from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'


export const HomePage = () => {
  const [text, onChangeText] = React.useState('Enter Book Title');
  const [number, onChangeNumber] = React.useState('');
  const countries = [
    "Adventure",
    "Classics",
    "Crime",
    "Fairy tales, fables, and folk tales",
    "Fantasy",
    "Historical",
    "Horror",
    "Humour and satire",
    "Literary fiction",
    "Mystery",
    "Poetry",
    "Plays",
    "Romance",
    "Religion",
    "Science fiction",
    "Short stories",
    "Thrillers",
    "War",
    "Women’s fiction",
    "Young adult",
    "Autobiography and memoir",
    "Biography",
    "Essays"
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={{ fontSize: 20 }}>
          Add new book
        </Text>

      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter book title"

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter aurthor"
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        // value={number}
        placeholder="Number of page"
        keyboardType="numeric"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1
  }
})