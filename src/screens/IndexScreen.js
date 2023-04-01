import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { addBlogPost, data } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      {/* <Text>{data}</Text> */}
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
