import { View, SafeAreaView } from "react-native";

import Posts from "./Components/Back.js";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#D8BFD8" }}>
      <View style={{ position: "relative", height: "100%" }}>
        <Posts></Posts>
      </View>
    </SafeAreaView>
  );
}
