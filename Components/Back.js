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
  uri: "https://media3.giphy.com/media/1v7xCHMGeMIb6/200w.webp?cid=ecf05e47dljgvwluxk8l5v0xr9un65aaq5iv6ztt3qvb94yv&ep=v1_gifs_search&rid=200w.webp&ct=g",
};
const icon = {
  uri: "https://static.thenounproject.com/png/2854151-200.png",
};
const baseUrl = {
  uri: "http://192.168.4.79:3000/api/",
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
  const [menuOpen, setMenuOpen] = useState(false);
  // props.post.text
  // post.text
  console.log("post", post);
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
              <TouchableOpacity>
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
              <TouchableOpacity>
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
});
