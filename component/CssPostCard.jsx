import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Chip } from "react-native-paper";

const CssPostCard = ({ posts }) => {
  const [addComment, setAddComment] = useState(true);

  return (
    <TouchableWithoutFeedback
      onLongPress={() => {
        console.log("post pressed");
      }}
      activeOpacity={0.5}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: posts.picUrl }} style={styles.image} />
        </View>
        <View style={styles.spacer} />
        <View style={styles.textContainer}>
          <View style={styles.locationTextContainer}>
            <Image
              style={styles.locationIcon}
              source={require("../assets/location-pin.png")}
            />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.locationText}
            >
              {posts.location}
            </Text>
          </View>
          <Text style={styles.usernameText}>{posts.username}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.descriptionText}
          >
            {posts.description}
          </Text>
          <Text style={styles.tagsText} ellipsizeMode="tail" numberOfLines={4}>
            {posts.tags}
          </Text>
          <Text style={styles.timeText}>posted -x- days ago...</Text>
          <View style={styles.chipContainer}>
            <View style={styles.chipItem}>
              <Chip
                style={styles.chip}
                icon="thumb-up-outline"
                textStyle={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                9
              </Chip>
              <Chip
                style={styles.chip}
                icon="comment-outline"
                textStyle={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                9
              </Chip>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CssPostCard;

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: "#FCFFEF",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    backgroundColor: "#FCFFEF",
    borderRadius: 5,
  },
  imageContainer: {
    flex: 0.4,
  },
  textContainer: {
    flex: 0.6,
  },
  spacer: {
    width: 10,
  },
  locationTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#7C9A92",
    fontSize: 13,
    marginRight: 5,
  },
  locationIcon: {
    height: 24,
    width: 24,
  },
  usernameText: {
    marginLeft: 5,
    color: "#253334",
    fontSize: 25,
  },
  descriptionText: {
    marginLeft: 5,
    color: "#253334",
    fontSize: 15,
  },
  tagsText: {
    marginLeft: 5,
    color: "#7C9A92",
    fontSize: 13,
  },
  timeText: {
    marginLeft: 5,
    color: "#253334",
    fontSize: 11,
  },
  chipContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  chipItem: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  chip: {
    marginLeft: 10,
    backgroundColor: "#7C9A92",
  },
});
