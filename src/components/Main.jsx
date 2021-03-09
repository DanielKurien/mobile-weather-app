import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";

const Main = () => {
  const baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = API_KEY_HERE;
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
      const weatherUrl = `${baseWeatherUrl}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
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

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Main;
