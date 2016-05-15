import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavButton from './NavButton';

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

const SecondScreen = (props) =>
  <View style={styles.container}>
    <Text style={styles.title}>Second Screen</Text>
    <NavButton destLabel="Third" buttonHandler={props.onButtonPress} />
  </View>;

SecondScreen.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

export default SecondScreen;
