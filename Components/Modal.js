import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import axios from "axios";

const baseUrl = {
  uri: "http://192.168.4.37:3000/api/",
};

export default function Modals() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const createPost = () => {
    axios.post(baseUrl.uri + "create-post", { text: text });
  };
  console.log("text", text);
  return (
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
              onChangeText={(text) => {
                setText(text);
              }}
              value={text}
            ></TextInput>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.button}
            >
              <Text style={styles.modalText} onPress={createPost}>
                Post
              </Text>
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
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    position: "absolute",
    bottom: 0,
    right: 30,
  },
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "pink",
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
    backgroundColor: "#DE3163",
  },
  buttonOpen: {
    backgroundColor: "#DE3163",
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
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    margin: 20,
    fontSize: 17,
    fontWeight: "bold",
  },
});
