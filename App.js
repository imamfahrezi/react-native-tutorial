import React from 'react';
import {StyleSheet, View} from 'react-native';
import GetApiReactNative from './src/GetApiReactNative';

import ReactNavigation from './src/ReactNavigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/redux/reducers';
import AppContainer from './src/redux/routes';
const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <ReactNavigation /> */}
        {/* <GetApiReactNative /> */}
        <AppContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
