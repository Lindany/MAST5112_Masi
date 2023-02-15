import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, SafeAreaView } from 'react-native';
// Using DB Reference
import { db, collection, addDoc, query, getDocs } from './config.js'

export const AddBooksPage = () => {

  // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")

  // MARK: CRUD Functions
  const Create = async () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    // Your Document Goes Here
    //const newCityRef = doc(collection(db, "cities"));

    const docData = {
      title: "Family on a Mission",
      arthor: "Mike Breen",
      genre: "Religious",
      pages: "200"
    }
    console.log("Aftert myDoc", docData)


    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "books"), {
      title: "Family on a Mission",
      arthor: "Mike Breen",
      genre: "Religious",
      pages: "200"
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
      <View >
        <Text style={{ fontSize: 20 }}>
          Add Books
        </Text>
        <Button title='Add New Book' onPress={Create}></Button>
        <Button title='Read Books' onPress={Read}></Button>
        {/* {
        userDoc != null &&
        <Text>Bio: {userDoc.title}</Text>
      } */}
        <TextInput style={{
          width: '95%',
          fontSize: 18,
          padding: 12,
          borderColor: 'gray',
          borderWidth: 0.2,
          borderRadius: 10,
          marginVertical: 20
        }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

        <Button title='Update Book' onPress={() => {
          Update({
            "bio": text
          }, true)
        }} disabled={text == ""}></Button>
        <Button title='Delete Book' onPress={Delete}></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1
  }
});