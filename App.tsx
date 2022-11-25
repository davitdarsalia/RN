import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider, QueryClient} from 'react-query'

import {RootRouter} from "./src/navigation/RootStack";
import { InitializeGlobalComponents } from './src/utils/InitializeGlobalComponents'
import { RegisterPushNotificationHandler } from './src/utils/RegisterPushNotifications'

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

const client = new QueryClient()

const App = () => {

  return (
    <View  style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={client}>
              <RootRouter />
              <InitializeGlobalComponents />
          </QueryClientProvider>
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
