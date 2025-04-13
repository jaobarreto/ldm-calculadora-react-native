import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
