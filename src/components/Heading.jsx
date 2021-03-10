import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Heading = () => {
  const [loaded, error] = useFonts({
    Noto: require("../../assets/fonts/NotoSansTC-Medium.otf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={styles.heading}>Daily Weather</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontFamily: "Lato",
    color: "white",
  },
});
