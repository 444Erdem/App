import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const image = {
  uri: "https://media1.giphy.com/media/OPU6wzx8JrHna/200.webp?cid=ecf05e47zn74bsbh5sl8217rffyhs2cfgrqnd9uxoc3eb2ve&ep=v1_gifs_search&rid=200.webp&ct=g",
};
const icon = {
  uri: "https://static.thenounproject.com/png/2854151-200.png",
};

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.4.79:3000/api/get-posts")
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
  // props.post.text
  // post.text
  console.log("post", post);
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#D3D3D3",
      }}
    >
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
          <Image source={image} style={styles.image} transition={1000}></Image>
          <View style={{ marginRight: 110 }}>
            <Text>John Smith</Text>
            <Text style={{ color: "gray", marginTop: 10 }}>6 minutes ago</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{ width: 20, height: 20, marginTop: 10 }}
              source={icon}
            ></Image>
          </TouchableOpacity>
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
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
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
    backgroundColor: "green",
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
    textAlign: "center",
    fontSize: 18,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    margin: 20,
    fontSize: 17,
  },
});
