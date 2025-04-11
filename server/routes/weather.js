import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  const API_KEY = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const { main, weather, wind, name } = response.data;

    const result = {
      city: name,
      temperature: main.temp,
      condition: weather[0].main,
      icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      humidity: main.humidity,
      windSpeed: wind.speed,
    };

    res.json(result);
  } catch (error) {
    res.status(404).json({ error: "City not found or API error" });
  }
});

export default router;


