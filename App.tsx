import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { AppNavigation } from './navigation';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  const SafeArea = Platform.OS === "web" ? SafeAreaProvider : SafeAreaView

  return (
    <SafeArea style={styles.container}>
      <AppNavigation />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%"
  }
});
