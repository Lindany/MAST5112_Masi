import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc, collection } from 'firebase/firestore/lite';
// Using DB Reference
import { db } from './config.js'
import { Firestore } from '@firebase/firestore';

export const AddBooksPage = () => {

// Storing User Data
const [userDoc, setUserDoc] = useState(null)
// Update Text
const [text, setText] = useState("")

// MARK: CRUD Functions
const Create = async() => {
  // MARK: Creating New Doc in Firebase
  // Before that enable Firebase in Firebase Console
  // Your Document Goes Here
  const newCityRef = doc(collection(db, "cities"));

  const docData = {
    "title": "Family on a Mission",
    "arthor": "Mike Breen",
    "genre": "Religious",
    "pages": "200"
  }
  console.log("Aftert myDoc", docData)


  // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);

 // setDoc(myDoc, docData)
//  await setDoc(reference = newCityRef, docData)
//     // Handling Promises
//     .then(() => {
//       console.log("This")
//       // MARK: Success
//       alert("Books Created Successfully!")
//     })
//     .catch((error) => {
//       // MARK: Failure
//       alert(error.message)
//     })
}

const Read = () => {
  // MARK: Reading Doc
  // You can read what ever document by changing the collection and document path here
  const myDoc = doc(db, "MyCollection", "MyDocument")

  getDoc(myDoc)
    // Handling Promises
    .then((snapshot) => {
      // MARK: Success
      if (snapshot.exists) {
        setUserDoc(snapshot.data())
      }
      else {
        alert("No Doc Found")
      }
    })
    .catch((error) => {
      // MARK: Failure
      alert(error.message)
    })

}

const Update = (value, merge) => {
  // MARK: Updating Doc
  const myDoc = doc(db, "MyCollection", "MyDocument")

  // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
  setDoc(myDoc, value, { merge: merge })
    // Handling Promises
    .then(() => {
      // MARK: Success
      alert("Updated Successfully!")
      setText("")
    })
    .catch((error) => {
      // MARK: Failure
      alert(error.message)
    })
}

const Delete = () => {
  // MARK: Deleting Doc
  const myDoc = doc(db, "MyCollection", "MyDocument")

  deleteDoc(myDoc)
    // Handling Promises
    .then(() => {
      // MARK: Success
      alert("Deleted Successfully!")
    })
    .catch((error) => {
      // MARK: Failure
      alert(error.message)
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
      {
        userDoc != null &&
        <Text>Bio: {userDoc.bio}</Text>
      }
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
      flex:1
    }
  });