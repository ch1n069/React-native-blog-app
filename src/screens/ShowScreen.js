import { View, Text } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const ShowScreen = ({ route, navigation }) => {
  // extracting the id from the route.params object
  const { id } = route.params;
  //   console.log(id);
  console.log(id);

  const { state } = useContext(BlogContext);
  //   const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ShowScreen;
