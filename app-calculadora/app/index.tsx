import { View } from 'react-native';
import CalculatorScreen from '../../components/CalculatorScreen';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CalculatorScreen />
    </View>
  );
}