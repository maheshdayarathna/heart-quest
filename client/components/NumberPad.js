import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BUTTONS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['C', '0', '⌫'],
];

export default function NumberPad({ onPress = () => {} }) {
  return (
    <View style={styles.container}>
      {BUTTONS.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((label) => {
            const isAction = label === 'C' || label === '⌫';
            return (
              <TouchableOpacity
                key={label}
                style={[styles.button, isAction && styles.actionButton]}
                activeOpacity={0.7}
                onPress={() => onPress(label)}
              >
                <Text style={[styles.buttonText, isAction && styles.actionButtonText]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    width: 72,
    height: 56,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  actionButton: {
    backgroundColor: 'rgba(233,30,99,0.15)',
    borderColor: 'rgba(233,30,99,0.2)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },
  actionButtonText: {
    color: '#E91E63',
    fontSize: 18,
    fontWeight: '700',
  },
});
