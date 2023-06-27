import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const image = {
  uri: "https://media3.giphy.com/media/1v7xCHMGeMIb6/200w.webp?cid=ecf05e47dljgvwluxk8l5v0xr9un65aaq5iv6ztt3qvb94yv&ep=v1_gifs_search&rid=200w.webp&ct=g",
};
const icon = {
  uri: "https://static.thenounproject.com/png/2854151-200.png",
};
const baseUrl = {
  uri: "http://192.168.4.37:3000/api/",
};

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.4.37:3000/api/get-posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.documents));
  }, []);
  return (
    <ScrollView>
      {posts.map((post) => (
        <OneFeed key={post._id} post={post} />
      ))}
    </ScrollView>
  );
}

function OneFeed({ post }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const deletePost = (id) => {
    console.log("id", id);
    axios.delete(baseUrl.uri + "delete-post?id=" + id);
    console.log("deleted");
  };

  const updatePost = (id) => {
    axios.put(baseUrl.uri + "update-post?id=" + id, { text: text });
    setModalVisible(!modalVisible);
    console.log("updated");
  };

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#D8BFD8",
      }}
    >
      <View
        style={{
          width: 400,
          padding: 20,
          backgroundColor: "#F8C8DC",
          paddingLeft: 30,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Image source={image} style={styles.image} transition={1000}></Image>
          <View style={{ marginRight: 110 }}>
            <Text>John Smith</Text>
            <Text style={{ color: "gray", marginTop: 10 }}>6 minutes ago</Text>
          </View>
          <View style={{ position: "relative" }}>
            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
              <Image
                style={{ width: 20, height: 20, marginTop: 10 }}
                source={icon}
              ></Image>
            </TouchableOpacity>

            <View
              style={{
                display: menuOpen ? "flex" : "none",
                position: "absolute",
                width: 100,
                right: 0,
                top: 30,
                borderWidth: 1,
                borderColor: "#E37383",
                backgroundColor: "pink",
              }}
            >
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView1}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Fix your text and change your future!
                      </Text>
                      <TextInput
                        style={styles.input}
                        placeholder="enter the new text"
                        onChangeText={(text) => {
                          setText(text);
                        }}
                        value={text}
                      ></TextInput>
                      <Pressable
                        onPress={() => updatePost(post._id)}
                        style={styles.button}
                      >
                        <Text style={styles.modalText}>Update</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text
                    style={{
                      padding: 10,
                      fontStyle: "italic",
                      fontSize: 17,
                      borderWidth: 1,
                      borderColor: "#E37383",
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => deletePost(post._id)}>
                <Text
                  style={{
                    padding: 10,
                    fontStyle: "italic",
                    fontSize: 17,
                    borderColor: "#E37383",
                    borderWidth: 1,
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.text}>{post.text}</Text>
      </View>
    </View>
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
    padding: 10,
    paddingLeft: 0,
  },
  modal: {
    position: "absolute",
    bottom: 400,
    right: 150,
    width: 200,
    height: 200,
    backgroundColor: "white",
  },
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
