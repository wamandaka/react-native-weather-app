import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomTextInput from "./customTextInput";

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState("");
  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.buttonStyle}
          title="Search"
          onPress={() => searchWeather(location)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
  buttonStyle: {
    color: "#090909",
    padding: "0.7em 1.7em",
    fontSize: 18,
    borderRadius: "0.5em",
    backgroundColor: "#e8e8e8",
    cursor: "pointer",
    border: "1px solid #e8e8e8",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
});

export default WeatherSearch;
