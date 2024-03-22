import { Image } from "react-native";

export default function Imagem({ styleImage, imagem }) {
  return <Image style={styleImage} source={imagem} />;
}
