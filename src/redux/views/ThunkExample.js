import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class ThunkExample extends Component {
  render() {
    const githubSaya = this.props.githubSaya;
    return (
      <View style={styles.viewContainer}>
        <Image
          style={styles.imagaeProfile}
          source={{uri: githubSaya.avatar_url}}
        />
        <Text style={styles.textGithub}>Nama : {githubSaya.login}</Text>
        <Text style={styles.textGithub}>Blog : {githubSaya.blog}</Text>
        <Text style={styles.textGithub}>Bio : {githubSaya.bio}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagaeProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textGithub: {
    marginTop: 10,
  },
});
const mapStateToProps = (state) => ({
  githubSaya: state.githubSaya,
});
export default connect(mapStateToProps, null)(ThunkExample);
