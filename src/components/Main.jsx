import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { useFonts } from "expo-font";

const Main = () => {
  const baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = API_KEY_HERE;
  const [weather, setWeather] = useState(null);
  const [loaded, error] = useFonts({
    Noto: require("../../assets/fonts/NotoSansTC-Medium.otf"),
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
  });
  const getData = async () => {
    setWeather(null);
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Access to location is needed for using application");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      const weatherUrl = `${baseWeatherUrl}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      console.log(weatherUrl);
      const response = await fetch(weatherUrl);
      const result = await response.json();

      if (response.ok) {
        setWeather(result);
      } else {
        alert(`${result.message}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Noto" }}>Yeet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
    flex: 1,
    padding: 8,
    paddingTop: 20,
  },
});
export default Main;
