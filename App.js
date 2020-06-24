import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactNavigation from './src/ReactNavigation';
import GetApiReactNative from './src/GetApiReactNative';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ReactNavigation /> */}
      <GetApiReactNative />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
