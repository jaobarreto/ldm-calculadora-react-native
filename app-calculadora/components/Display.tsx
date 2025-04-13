import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});