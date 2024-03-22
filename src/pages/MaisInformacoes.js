import { View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
// Importando os componentes
import Name from "../components/NameComponent";
import More from "../components/MoreComponent";
// Importando styles
import styles from "../styles/StyleSheet";

export default function Information() {
  const navigation = useNavigation();
  return (
    // View principal
    <View style={styles.container}>
      <View style={styles.header}>
        <Name nome="Como chegar no Cristo?" styleText={styles.nome} />
        <More
          stylesMore={styles.maisinfo}
          text="Existem algumas formas de chegar até o Cristo. Irei apresentar algumas formas:"
        />
      </View>
      <View style={styles.cardLogin}>
        <More stylesMore={styles.titulo} text="Teleférico" />
        <More
          stylesMore={styles.maisinfo}
          text="Passar pelo teleférico pode ser uma das subidas mais emocionantes."
        />
        <More
          stylesMore={styles.maisinfo}
          text="Lá de cima é possível ter uma vista panorâmica de Poços de Caldas."
        />
      </View>
      <View style={styles.cardLogin}>
        <More stylesMore={styles.titulo} text="Trilha" />
        <More
          stylesMore={styles.maisinfo}
          text="Quem gosta de se aventurar, pode optar pela trilha pela montanha."
        />
        <More
          stylesMore={styles.maisinfo}
          text="O trajeto tem duração média de uma hora e passa por trechos de vegetação aberta e fechada."
        />
      </View>
      <Button title="Tourist" onPress={() => navigation.navigate("Index")} />
      <Button
        title="Contador"
        onPress={() => navigation.navigate("Contador")}
      />
    </View>
  );
}
