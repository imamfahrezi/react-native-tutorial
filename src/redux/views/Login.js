import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {loginAction} from '../action';

import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginName: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        {/* <Text> {this.props.login} </Text> */}
        <TextInput
          value={this.props.login}
          placeholder="Ketika Login Name"
          onChangeText={(loginName) => this.props.loginAction(loginName)}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.buttonLogin}>
            <Text style={styles.textButton}>LOGIN</Text>
          </View>
        </TouchableOpacity>
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
  buttonLogin: {
    width: 300,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFF',
  },
});

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, {loginAction})(Login);
