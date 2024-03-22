import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/styles/StyleSheet";
import Tourist from "./src/pages/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <Tourist />
      <StatusBar style="auto" />
    </View>
  );
}
