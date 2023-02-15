import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, SafeAreaView } from 'react-native';
// Using DB Reference
import SelectDropdown from 'react-native-select-dropdown'
import { db, collection, addDoc, getDocs } from './config.js'

export const AddBooksPage = () => {
  const [userTitle, onChangeText] = useState('');
  const [userAurthor, onChangeAurthor] = useState('');
  const [noPages, onChangePages] = useState('');
  const [genre, setGenre] = useState('');

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

  // Storing User Data
  // Update Text

  // MARK: CRUD Functions
  const Create = async () => {

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "books"), {
      title: userTitle,
      arthor: userAurthor,
      genre: genre,
      pages: noPages
    });
    console.log("Document written with ID: ", docRef.id);
  }

  const Read = async () => {
    // MARK: Reading Doc
    const querySnapshots = await getDocs(collection(db, "books"))
    querySnapshots.forEach((doc) => {
      console.log("Docs", doc.data().title)
    })
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 1, fontWeight: 'bold', textDecorationLine: 'underline' }}>
        Add a book
      </Text>
      <View >
        <Text style={styles.textDescription}>Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={userTitle}
          placeholder="Enter book title"

        />
        <Text style={styles.textDescription}>Aurthor:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAurthor}
          value={userAurthor}
          placeholder="Enter aurthor"
        />
        <Text  style={styles.textDescription}>Genre:</Text>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            setGenre(selectedItem);
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }} />
        
        <Text style={styles.textDescription}>Pages:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePages}
          value={noPages}
          placeholder="Number of page"
          keyboardType="numeric"
        />
      </View>
      <Button title='Add New Book' onPress={Create}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly', //Centered horizontally
    alignItems: 'stretch', //Centered vertically
    padding: 30,
    flex: 1
  },
  textDescription:{
    color: 'blue'
  }
});