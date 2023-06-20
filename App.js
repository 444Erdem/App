import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

const image = {
  uri: "https://media0.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47wdjpdvvz6k363ivcy3ir8vltd0iknmsk2a4ex9lf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
};
const icon = {
  uri: "https://static.thenounproject.com/png/2854151-200.png",
};

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#D3D3D3",
            }}
          >
            {new Array(10).fill(0).map((_, index) => (
              <View
                style={{
                  width: 400,
                  padding: 20,
                  backgroundColor: "white",
                  paddingLeft: 30,
                  marginBottom: 10,
                }}
              >
                <View style={{ flexDirection: "row", gap: 30 }}>
                  <Image source={image} style={styles.image}></Image>
                  <View style={{ marginRight: 110 }}>
                    <Text>John Smith</Text>
                    <Text style={{ color: "gray", marginTop: 10 }}>
                      6 mimutes ago
                    </Text>
                  </View>
                  <Image
                    style={{ width: 20, height: 20, marginTop: 10 }}
                    source={icon}
                  ></Image>
                </View>
                <Text style={styles.text}>Good morning!</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: "green",
            position: "absolute",
            bottom: 30,
            right: 30,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 40,
            }}
          >
            +
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
