import { View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Importando os componentes
import Name from "../components/NameComponent";
// Importando styles
import styles from "../styles/StyleSheet";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Contador() {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  incrementCount = () => {
    setCount(count + 1);
  };

  decrementCount = () => {
    setCount(count - 1);
  };

  return (
    // View principal
    <View style={styles.container}>
      <View style={styles.cardLogin}>
        <Name
          styleText={styles.nome}
          nome="Quantas pessoas visitaram o Cristo esse ano?"
        />
        <Text>Contador: {count} </Text>
        <TouchableOpacity style={styles.touch} onPress={incrementCount}>
          Mais
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={decrementCount}>
          Menos
        </TouchableOpacity>
      </View>
      <Button title="Index" onPress={() => navigation.navigate("Index")} />

      <Button
        title="Information"
        onPress={() => navigation.navigate("Information")}
      />
    </View>
  );
}
