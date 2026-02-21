import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Timer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});
