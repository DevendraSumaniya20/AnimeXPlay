import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.AppMainContainer}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  AppMainContainer: {
    flex: 1,
  },
});
