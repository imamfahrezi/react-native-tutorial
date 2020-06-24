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
        <Stack.Screen name="Profiles" component={ProfilesScreen} />
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
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        color="red"
        title="Go to Profile"
        onPress={() => navigation.navigate('Profiles')}
      />
    </View>
  );
}

// Screen Detail
function DetailsScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

// Screen Profile
function ProfilesScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        color="green"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
