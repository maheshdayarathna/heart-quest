import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeartDisplay({ hearts = 3, maxHearts = 3 }) {
  return (
    <View style={styles.container}>
      {Array.from({ length: maxHearts }).map((_, index) => (
        <Text key={index} style={styles.heart}>
          {index < hearts ? '❤️' : '🖤'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
  },
  heart: {
    fontSize: 22,
  },
});
