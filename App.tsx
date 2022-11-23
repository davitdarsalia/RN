import React from 'react'
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {RootRouter} from "./src/navigation/RootStack";

const App = () => {
  return (
    <View  style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootRouter />
      </GestureHandlerRootView>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
