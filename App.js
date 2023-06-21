import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";

const image = {
  uri: "https://media0.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47wdjpdvvz6k363ivcy3ir8vltd0iknmsk2a4ex9lf&ep=v1_gifs_search&rid=giphy.gif&ct=g",
};
const icon = {
  uri: "https://static.thenounproject.com/png/2854151-200.png",
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
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
                  <Image
                    source={image}
                    style={styles.image}
                    transition={1000}
                  ></Image>
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
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView1}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Post your thoughts! Welcome to Textnote!
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="enter the text"
                ></TextInput>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Post</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>+</Text>
          </Pressable>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
