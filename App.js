import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        title={showCounter ? "Switch to Color Changer" : "Switch to Counter App"}
        onPress={() => setShowCounter(!showCounter)}
      />
      <View style={styles.appContainer}>
        {showCounter ? <CounterApp /> : <ColorChangerApp />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  appContainer: { flex: 1 },
});