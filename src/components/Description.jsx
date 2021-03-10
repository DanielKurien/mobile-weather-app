import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Description = ({ text }) => {
  const [loaded, error] = useFonts({
    Noto: require("../../assets/fonts/NotoSansTC-Medium.otf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={styles.descriptionText}>{text}</Text>;
};

const styles = StyleSheet.create({
  descriptionText: {
    display: "flex",
    fontSize: 20,
    fontFamily: "Noto",
    color: "#6a7b95",
  },
});

export default Description;
