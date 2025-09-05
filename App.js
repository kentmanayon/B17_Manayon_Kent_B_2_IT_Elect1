import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterApp />
      <ColorChangerApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});