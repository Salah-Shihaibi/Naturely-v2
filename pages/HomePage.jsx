import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import { getPosts } from "../Server/PostsData";
import { useState, useEffect } from "react";
import CssPostCard from "../component/CssPostCard";

export const HomePage = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((postArr) => {
        setPosts(postArr);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  //refresh button which calls get posts again
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/backgroundlogin.png")}
        resizeMode="cover"
        style={styles.Background}
        blurRadius={5}
      >
        <Button
          title="single screen"
          onPress={() => {
            navigation.push("SinglePost");
          }}
        />
        {isLoading ? (
          <Text>News Feed Loading...</Text>
        ) : (
          <FlatList
            data={posts}
            renderItem={({ item }) => <CssPostCard posts={item} />}
            keyExtractor={(item) => item.id}
            style={{ paddingTop: 30 }}
          />
        )}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  Background: {
    height: "100%",
    width: "100%",
  },
});
