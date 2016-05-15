import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { navigateReset } from '../actions';

import NavButton from '../components/NavButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79BD8F',
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

const Third = (props) =>
  <View style={styles.container}>
    <Text style={styles.title}>Third Screen</Text>
    <NavButton destLabel="Home" buttonHandler={props.onButtonPress} />
  </View>;

Third.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onButtonPress: () => {
    dispatch(navigateReset([{
      key: 'First',
      title: 'First',
    }], 0));
  },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Third);
