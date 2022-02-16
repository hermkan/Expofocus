import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/focus/focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(true);
  return (
    <View style={styles.container}>
      {focusSubject ? <Focus /> : <Text>No subject</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
