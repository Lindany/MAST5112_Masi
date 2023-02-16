import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { bookList, lastHistoryList } from "./config.js";


export const HomePage = () => {
  const myItemSeparator = () => {
    return (
      <View
        style={{ height: 2, backgroundColor: "gray", marginHorizontal: 10 }}
      />
    );
  };

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  }

  const getTotalPages =(arrayBook)=>{
      var totalPages = 0;
      arrayBook?.forEach(book => {
        totalPages = parseInt(totalPages) +  parseInt(book.pages)
      });
      return totalPages
  }

 var arrayBook = bookList["_z"];
 var noBooks =arrayBook.length 
 var totalPages = getTotalPages(arrayBook);
 console.log("\n\n\n\nNoBooks ====>: ", noBooks, "Total Pages: ", totalPages)
  const averagePages = totalPages / noBooks;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lastHistoryList["_z"]}
        renderItem={({ item, index }) => 
        <View key={item.title}>
          <Text style={styles.item}>Title: {item?.title}</Text>
          <Text style={styles.item}>Aurthor: {item?.arthor}</Text>
          <Text style={styles.item}>Genre: {item?.genre}</Text>
          <Text style={styles.item}>No.pages: {item?.pages}</Text>
          <Text style={styles.item}>Total Pages read: {totalPages}</Text>
        <Text style={styles.item}>Average pages: {averagePages}</Text> 
        </View>}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 30, textAlign: "center", marginTop: 25,padding: 30, fontWeight: 'bold', textDecorationLine: 'underline' }}>
            Welcome Home
          </Text>
        )}
        ListFooterComponent={() => (
          <Text style={{ fontSize: 15, textAlign: "center", marginBottom: 1, fontWeight: 'bold' }}>Bookwarm by Masi</Text>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    padding: 20,
    padding: 25,
    flex: 1,
  },
  item: {
    padding: 5,
    fontSize: 15,
    marginTop: 1,
  },
})