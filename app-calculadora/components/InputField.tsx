import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  testID?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  value, 
  onChangeText,
  testID = 'input-field' 
}) => {
  const handleTextChange = (text: string) => {
    const cleanedText = text
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
    
    onChangeText(cleanedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID={testID}
          style={styles.input}
          value={value}
          onChangeText={handleTextChange}
          keyboardType="numeric"
          inputMode="decimal"
          maxLength={8}
          blurOnSubmit={true}
          returnKeyType="done"
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        {value.length > 0 && (
          <TouchableOpacity 
            style={styles.clearButton} 
            onPress={() => onChangeText('')}
          >
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    padding: 5,
  },
  clearButtonText: {
    fontSize: 18,
    color: '#999',
  },
});