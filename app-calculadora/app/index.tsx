import { CalculatorScreen } from '../components/CalculatorScreen';
import { ThemedView } from '../components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <CalculatorScreen />
    </ThemedView>
  );
}