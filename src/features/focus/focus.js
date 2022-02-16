import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export const Focus = () => {
  return (
    <View style={styles.container}>
      <Text>What would you like to focus on?</Text>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#0a192f',
  },
});
