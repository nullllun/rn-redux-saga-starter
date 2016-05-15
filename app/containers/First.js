import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { navigatePush } from '../actions';

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

const First = (props) =>
  <View style={styles.container}>
    <Text style={styles.title}>First Screen</Text>
    <NavButton destLabel="Second" buttonHandler={props.onButtonPress} />
  </View>;

First.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onButtonPress: () => {
    dispatch(navigatePush('Second'));
  },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(First);
