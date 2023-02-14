import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet} from 'react-native';
import { HomePage } from "./app/Home.js";
import { BooksPage } from "./app/Books.js";
import { HistoryPage } from "./app/History.js";
import { AddBooksPage } from "./app/AddBooks";

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'addBooks', title: 'AddBook', focusedIcon: 'note-plus' },
    { key: 'books', title: 'Books', focusedIcon: 'animation-outline' },
    { key: 'history', title: 'History', focusedIcon: 'history' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    books: BooksPage,
    history: HistoryPage,
    addBooks: AddBooksPage,
  });

  return (
    <SafeAreaProvider>      
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />    
    </SafeAreaProvider>
  );
};



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex:1
  }
});

export default MyComponent;