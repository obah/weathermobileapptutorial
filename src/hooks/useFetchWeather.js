import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useFetchWeather() {
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  // eslint-disable-next-line no-undef
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const fetchWeatherData = async () => {
    try {
      // eslint-disable-next-line no-undef
      const apiUrl = `https://${process.env.EXPO_PUBLIC_API_URL}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setErrorMsg(err.message);
      console.log(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);

      await fetchWeatherData();
    })();
  }, [latitude, longitude]);

  return [isLoading, errorMsg, weatherData, fetchWeatherData];
}
