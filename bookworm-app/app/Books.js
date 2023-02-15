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
import {  bookList } from "./config.js";

export class BooksPage extends React.Component {
  myItemSeparator = () => {
    return (
      <View
        style={{ height: 1, backgroundColor: "gray", marginHorizontal: 10 }}
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

  shouldComponentUpdate() {
    render();
  }

  displayList(bookList) {
    return (
      <View>
        {bookList["_z"].map((book) => {
          return (
            <View key={book.title}>
              <Text style={styles.item}>{book?.title}</Text>
              <Text style={styles.item}>{book?.arthor}</Text>
              <Text style={styles.item}>{book?.genre}</Text>
              <Text style={styles.item}>{book?.pages}</Text>
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
      data={bookList["_z"]}
      renderItem={({ item }) => <View key={item.title}>
      <Text style={styles.item}>Title: {item?.title}</Text>
      <Text style={styles.item}>Aurthor: {item?.arthor}</Text>
      <Text style={styles.item}>Genre: {item?.genre}</Text>
      <Text style={styles.item}>No.pages: {item?.pages}</Text>
    </View>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={this.myItemSeparator}
      ListEmptyComponent={this.myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          List of Books
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 15, textAlign: "center",marginBottom:10,fontWeight:'bold' }}>The End. Thank You</Text>
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
