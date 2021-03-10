import React from "react";
import { Image, View } from "react-native";
import clearSky from "../../assets/images/clear_sky.png";
import scatteredClouds from "../../assets/images/scattered_clouds.png";
import brokenClouds from "../../assets/images/broken_clouds.png";
import fewClouds from "../../assets/images/few_clouds.png";
import rain from "../../assets/images/rain.png";
import storm from "../../assets/images/storm.png";
import snow from "../../assets/images/snow.png";
import mist from "../../assets/images/mist.png";
const WeatherImage = ({ description }) => {
  return (
    <>
      {description === "clear sky" ? (
        <Image style={{ width: 240, height: 240 }} source={clearSky} />
      ) : null}
      {description === "scattered clouds" ? (
        <Image style={{ width: 240, height: 240 }} source={scatteredClouds} />
      ) : null}
      {description === "broken clouds" ? (
        <Image style={{ width: 240, height: 240 }} source={brokenClouds} />
      ) : null}
      {description === "few clouds" ? (
        <Image style={{ width: 240, height: 240 }} source={fewClouds} />
      ) : null}
      {description === "shower rain" || description === "rain" ? (
        <Image style={{ width: 240, height: 240 }} source={rain} />
      ) : null}
      {description === "storm" ? (
        <Image style={{ width: 240, height: 240 }} source={storm} />
      ) : null}
      {description === "snow" ? (
        <Image style={{ width: 240, height: 240 }} source={snow} />
      ) : null}
      {description === "mist" ? (
        <Image style={{ width: 240, height: 240 }} source={mist} />
      ) : null}
    </>
  );
};

export default WeatherImage;
