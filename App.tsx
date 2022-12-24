import React from 'react';
import { StyleSheet } from 'react-native';
import { AppNavigation } from './navigation';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
