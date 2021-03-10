import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./Heading";
import Neighbourhood from "./Neighbourhood";
import WeatherImage from "./WeatherImage";
import Description from "./Description";
import * as Location from "expo-location";

const Main = () => {
  const baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = YOUR_API_KEY;
  const [weather, setWeather] = useState(null);
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
      const weatherUrl = `${baseWeatherUrl}lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
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

  if (weather === null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Heading />
      <WeatherImage description={weather.weather[0].description} />
      <View style={styles.textContainer}>
        <Neighbourhood area={weather.name} temperature={weather.main.temp} />
        <Description text={weather.weather[0].description} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192033",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
    paddingTop: 20,
  },
  textContainer: {
    alignItems: "center",
  },
});
export default Main;
