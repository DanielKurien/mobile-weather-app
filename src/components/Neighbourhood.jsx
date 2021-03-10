import React from "react";
import { Text } from "react-native";

const Neighbourhood = ({ area, temperature }) => {
  return (
    <Text>
      {area}, {temperature}°C
    </Text>
  );
};

export default Neighbourhood;
