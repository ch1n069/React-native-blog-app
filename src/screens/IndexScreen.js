import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";
import { FontAwesome5 } from "@expo/vector-icons";
const IndexScreen = () => {
  const { addBlogPost, data, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      {/* <Text>{data}</Text> */}
      <Button title="Delete Post" onPress={() => deleteBlogPost()} />

      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <FontAwesome5 name="trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    border: "1px solid black",
  },
});

export default IndexScreen;
