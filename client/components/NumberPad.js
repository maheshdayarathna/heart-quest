import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NumberPad() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number Pad</Text>
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
