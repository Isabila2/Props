// IMPORT STACK NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tourist from "./src/pages/TouristLocation";
import Information from "./src/pages/MaisInformacoes";
import Contador from "./src/pages/Contador";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ animation: "slide_from_right" }}
          name="Index"
          component={Tourist}
        />
        <Stack.Screen
          options={{ animation: "slide_from_right" }}
          name="Information"
          component={Information}
        />
        <Stack.Screen
          options={{ animation: "slide_from_right" }}
          name="Contador"
          component={Contador}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
