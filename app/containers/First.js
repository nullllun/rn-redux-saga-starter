import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NavButton from '../components/NavButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F9CB2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30,
  },
});

class First extends Component {
  componentDidMount() {
    this.props.fetchUser('paolorovella');
  }

  render() {
    const {
      onButtonPress,
      userData,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {userData.user && !userData.isFetching ?
            `Welcome ${userData.user.name}`
            :
            'Loading...'
          }
        </Text>
        <Text style={styles.title}>First Screen</Text>
        <NavButton destLabel="Second" buttonHandler={onButtonPress} />
      </View>
    );
  }
}

First.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

First.defaultProps = {
  userData: {},
};

const mapStateToProps = (state) => ({
  userData: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => {
    dispatch(actions.fetchUser(user));
  },
  onButtonPress: () => {
    dispatch(actions.navigatePush('Second'));
  },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(First);
