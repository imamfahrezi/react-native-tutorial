import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactNavigation from './src/ReactNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
