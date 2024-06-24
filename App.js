import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./src/constant";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState("");

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return <Text>Sorry, something went wrong. Please try again.</Text>;
      default:
        return;
    }
  };
  const searchWeather = (location) => {
    setStatus("loading");
    axios
      .get(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}`)
      .then((res) => {
        const data = res.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus("success");
        console.log(data);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
});

export default App;
