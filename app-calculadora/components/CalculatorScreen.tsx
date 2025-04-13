import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Button } from './Button';
import { Display } from './Display';
import { InputField } from './InputField';
import { ThemedView } from './ThemedView';

export const CalculatorScreen: React.FC = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [operation, setOperation] = useState('+');

    const calculate = () => {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        let calculatedResult;

        if (!value1.trim() || !value2.trim()) {
            setResult('Preencha ambos os valores');
            return;
        }

        if (isNaN(Number(value1)) || isNaN(Number(value2))) {
            setResult('Valores inválidos');
            return;
        }

        if (operation === '/' && parseFloat(value2) === 0) {
            setResult('Não divida por zero');
            return;
        }

        switch (operation) {
            case '+':
                calculatedResult = num1 + num2;
                break;
            case '-':
                calculatedResult = num1 - num2;
                break;
            case '*':
                calculatedResult = num1 * num2;
                break;
            case '/':
                calculatedResult = num1 / num2;
                break;
            default:
                calculatedResult = 0;
        }

        setResult(calculatedResult.toString());
    };

    const handleOperationPress = (op: string) => {
        setOperation(op);
        calculate();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ThemedView style={styles.container}>
                <InputField label="Valor 1" value={value1} onChangeText={setValue1} />
                <InputField label="Valor 2" value={value2} onChangeText={setValue2} />

                <View style={styles.operationsContainer}>
                    <Button title="+" onPress={() => handleOperationPress('+')} isActive={operation === '+'} />
                    <Button title="-" onPress={() => handleOperationPress('-')} isActive={operation === '-'} />
                    <Button title="*" onPress={() => handleOperationPress('*')} isActive={operation === '*'} />
                    <Button title="/" onPress={() => handleOperationPress('/')} isActive={operation === '/'} />
                </View>

                <Display value={result !== null ? result : 'Clique em "Calcular"'} />

                <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
                    <Text style={styles.calculateButtonText}>Calcular</Text>
                </TouchableOpacity>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    operationsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    calculateButton: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    calculateButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});