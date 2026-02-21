import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeartDisplay() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heart Display</Text>
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
