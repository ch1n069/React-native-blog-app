import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const data = useContext(BlogContext);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
