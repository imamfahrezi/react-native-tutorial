import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.login} </Text>
        <Button
          title="thunk"
          onPress={() => this.props.navigation.navigate('ThunkExample')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(Home);
