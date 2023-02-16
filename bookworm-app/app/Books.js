import { where } from "@firebase/firestore";
import React, { useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import {  bookList, ReadBooks } from "./config.js";

export class BooksPage extends React.Component {
  myItemSeparator = () => {
    return (
      <View
        style={{ height: 1, backgroundColor: "white", padding: 20, marginHorizontal: 10 }}
      />
    );
  };

  myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  }

  getUniqueGenres = (myArray) => {
    const count = {};

    myArray.forEach(element => {
      if (count[element.genre]) {
        count[element.genre] += 1;
      } else {
        count[element.genre] = 1;
      }
    })
    return count;
  }

  shouldComponentUpdate() {
    render();
    ReadBooks(db);
  }

  render() {
    var arrayBook = bookList["_z"];
    const uniqueList = this.getUniqueGenres(arrayBook);
    console.log("\n\n\n\nUniqueness: ",this.getUniqueGenres(arrayBook) )
    var finalArray = [...new Set(arrayBook)]
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
      data={finalArray}
      renderItem={({ item }) => <View key={item.id}>
      <Text style={styles.item}>Genre: {item.genre}</Text>
      <Text style={styles.item}>Count: {uniqueList[item.genre]}</Text>
    </View>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={this.myItemSeparator}
      ListEmptyComponent={this.myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 20, textAlign: "center",marginTop:20, padding: 10, fontWeight:'bold',textDecorationLine: 'underline' }}>
          List of Genre
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 15, textAlign: "center",marginBottom:10, fontWeight:'bold' }}></Text>
      )}
    />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly", //Centered horizontally
    alignItems: "stretch", //Centered vertically
    padding: 20,
    flex: 1,
  },
  item: {
    padding: 5,
    fontSize: 15,
    marginTop: 1,
  },
});
