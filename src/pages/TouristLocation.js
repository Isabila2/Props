import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Importando os componentes
import Name from "../components/NameComponent";
import Adress from "../components/AddressComponent";
import Description from "../components/DescriptionComponent";
import Imagem from "../components/ImageComponent";
// Importando styles
import styles from "../styles/StyleSheet";

export default function Tourist() {
  const navigation = useNavigation();
  return (
    // View principal
    <View style={styles.container}>
      <Name styleText={styles.nome} nome="Cristo Redentor - Poços de Caldas" />
      <Imagem
        styleImage={styles.img}
        imagem={require("../assets/images/cristo.jpeg")}
      />
      <Description
        stylesDescrip={styles.desc}
        descricao="O Cristo Redentor é um dos principais pontos turísticos de Poços de Caldas."
      />
      <Description
        stylesDescrip={styles.desc}
        descricao="A altura dele é de 30 metros, e peso total do monumento é de 500 toneladas, aproximadamente o mesmo que um pequeno navio de carga ou um avião de grande porte."
      />
      <Adress
        styleEnd={styles.end}
        endereco="Estr. do Cristo - Centro, Poços de Caldas - MG"
      />
      <Button
        title="Information"
        onPress={() => navigation.navigate("Information")}
      />
    </View>
  );
}
