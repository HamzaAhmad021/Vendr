import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import styles from './style';

const HomeTab = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1a6fd8"
        translucent={true}
      />
      <View style={styles.container}>
        <View>
          <View style={styles.headerContainer}></View>
        </View>
      </View>
    </>
  );
};
export default HomeTab;
