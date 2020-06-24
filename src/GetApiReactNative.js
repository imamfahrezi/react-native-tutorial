import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import Axios from 'axios';

export default class GetApiReactNative extends Component {
  state = {
    data: {},
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.getGithubUser();
  }

  getGithubUser = async () => {
    try {
      const res = await Axios.get(`https://api.github.com/users?since=135`);
      console.log(res);

      this.setState({
        isError: false,
        isLoading: false,
        data: res.data,
      });
    } catch (error) {
      this.setState({isLoading: false, isError: true});
    }
  };

  render() {
    //  If load data
    if (this.state.isLoading) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    } else if (this.state.isError) {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>Terjadi error saat memuat Data</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          <View style={styles.viewList}>
            <View>
              <Image
                source={{uri: `${item.avatar_url}`}}
                style={styles.Image}
              />
            </View>
            <View>
              <Text styles={styles.textItemLogin}>{item.login}</Text>
              <Text styles={styles.textItemUrl}>{item.html_url}</Text>
            </View>
          </View>
        )}
        keyExtractor={({id}, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  viewList: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40,
  },
  textItemLogin: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16,
  },
  textItemUrl: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'blue',
  },
});
