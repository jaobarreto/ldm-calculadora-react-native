import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Display from '../components/Display';

export default function CalculatorScreen() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (input: string) => {
    if (input === '=') {
      try {
        setResult(eval(value).toString());
      } catch {
        setResult('Erro');
      }
    } else if (input === 'C') {
      setValue('');
      setResult('');
    } else {
      setValue(prev => prev + input);
    }
  };

  const renderButton = (label: string, isOperator = false) => (
    <Button key={label} label={label} onPress={() => handlePress(label)} isOperator={isOperator} />
  );

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', 'C', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <Display value={result || value || '0'} />
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(label => renderButton(label, ['/', '*', '-', '+', '='].includes(label)))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  buttonContainer: { flex: 1, justifyContent: 'space-around' },
  row: { flexDirection: 'row', justifyContent: 'space-around' },
});
