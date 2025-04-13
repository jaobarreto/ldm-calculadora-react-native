import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  isOperator?: boolean;
}

export default function Button({ label, onPress, isOperator = false }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, isOperator && styles.operator]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 70,
  },
  operator: {
    backgroundColor: '#f9a825',
  },
  text: {
    fontSize: 24,
  },
});
