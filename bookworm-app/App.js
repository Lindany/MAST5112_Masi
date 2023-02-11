import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { HomePage } from "./app/Home.js";
import { BooksPage } from "./app/Books.js";
import { HistoryPage } from "./app/History.js";
import { NotificationPage } from "./app/Notification.js";

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'heart-outline'},
    { key: 'addbox', title: 'AddBook', focusedIcon: 'library-add' },
    { key: 'albums', title: 'Books', focusedIcon: 'book' },
    { key: 'recents', title: 'History', focusedIcon: 'history' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomePage,
    albums: BooksPage,
    recents: HistoryPage,
    notifications: NotificationPage,
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