import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { navigatePush } from '../actions';

import NavButton from '../components/NavButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D690CB',
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

const Second = (props) =>
  <View style={styles.container}>
    <Text style={styles.title}>Second Screen</Text>
    <NavButton destLabel="Third" buttonHandler={props.onButtonPress} />
  </View>;

Second.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onButtonPress: () => {
    dispatch(navigatePush('Third'));
  },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Second);
