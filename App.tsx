import React from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import { AppNavigation } from "./navigation";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "common/theme/color";

const SafeArea = Platform.OS === "web" ? SafeAreaProvider : SafeAreaView;

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.white} />
      <SafeArea style={styles.container}>
        <AppNavigation />
      </SafeArea>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: "100%",
  },
});
