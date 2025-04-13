import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isActive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, isActive = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isActive && styles.activeButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    minWidth: 70,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  activeButtonText: {
    color: 'white',
  },
});