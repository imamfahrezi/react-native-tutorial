import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Stack berguna untuk routing aplikasi
const Stack = createStackNavigator();

export default function ReactNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Screen Home
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Kirim Data"
        color="green"
        onPress={() =>
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 11,
            otherParam: 'konsep koding tempat belajar',
          })
        }
      />
    </View>
  );
}

// Screen Detail
function DetailsScreen({route, navigation}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>name: {JSON.stringify(name)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
