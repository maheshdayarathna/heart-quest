import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Timer({ timeLeft = 30, totalTime = 30 }) {
  const progress = totalTime > 0 ? timeLeft / totalTime : 0;
  const isLow = timeLeft <= 5;

  return (
    <View style={styles.container}>
      <View style={styles.barBackground}>
        <View
          style={[
            styles.barFill,
            { width: `${progress * 100}%` },
            isLow && styles.barFillLow,
          ]}
        />
      </View>
      <Text style={[styles.timeText, isLow && styles.timeTextLow]}>
        {timeLeft}s
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  barBackground: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  barFillLow: {
    backgroundColor: '#F44336',
  },
  timeText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '700',
    minWidth: 30,
    textAlign: 'right',
  },
  timeTextLow: {
    color: '#F44336',
  },
});
