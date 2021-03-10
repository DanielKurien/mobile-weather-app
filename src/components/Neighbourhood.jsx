import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Neighbourhood = ({ area, temperature }) => {
  const [loaded, error] = useFonts({
    Noto: require("../../assets/fonts/NotoSansTC-Medium.otf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Text style={styles.neighbourhoodText}>
      {area}, {temperature}°C
    </Text>
  );
};

const styles = StyleSheet.create({
  neighbourhoodText: {
    fontSize: 25,
    fontFamily: "Noto",
    color: "#8f9ecf",
  },
});

export default Neighbourhood;
