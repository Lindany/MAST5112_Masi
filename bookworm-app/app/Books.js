import { where } from '@firebase/firestore';
import React, { useState }  from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, ScrollView  } from 'react-native';
import  { db, collection ,query, getDocs }from './config.js'

export const BooksPage = () => {

  const myItemSeparator = () => {
    return (
      <View
       style={{ height: 1, backgroundColor: "gray", marginHorizontal:10 }}
      />
    );
  };
  
  async function Read(db){
    // MARK: Reading Doc
    // You can read what ever document by changing the collection and document path here
    const bookCol = collection(db, 'books');
    const bookSnapshot = await getDocs(bookCol);
    const bookList = bookSnapshot.docs.map(doc => doc.data());
    return bookList;
  }

  let books = Read(db);


return (<SafeAreaView style={styles.container}>
  <View style={styles.container}>
      <ScrollView>
        <View>
          {books.map((book) => {
            return (
              <View>
                <Text style={styles.item}>{book.title}</Text>
                <Text style={styles.item}>{book.arthor}</Text>
                <Text style={styles.item}>{book.genre}</Text>
                <Text style={styles.item}>{book.pages}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
</SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    padding: 20,
    flex:1
  },
  item: {
    padding: 5,
    fontSize: 15,
    marginTop: 1
  }
})