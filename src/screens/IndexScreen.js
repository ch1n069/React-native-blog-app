import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import BlogContext from "../context/BlogContext";
import { FontAwesome5 } from "@expo/vector-icons";
import ShowScreen from "./ShowScreen";
const IndexScreen = ({ navigation }) => {
  const { addBlogPost, data, deleteBlogPost } = useContext(BlogContext);
  return (
    <TouchableOpacity>
      <View>
        <Button title="Add Post" onPress={() => addBlogPost()} />
        {/* <Text>{data}</Text> */}
        <Button title="Delete Post" onPress={() => deleteBlogPost()} />

        <FlatList
          data={data}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("show screen", { id: item.id });
                }}
              >
                <View style={styles.container}>
                  <Text style={{ fontSize: 18 }}>{item.title}</Text>
                  <Text>{item.id}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <FontAwesome5 name="trash" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </TouchableOpacity>
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
