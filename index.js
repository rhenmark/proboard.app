import "expo/build/Expo.fx";
import { registerRootComponent } from "expo";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Platform } from "react-native";

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  root.render(<App />);
} else {
  registerRootComponent(App);
}
