import axios from 'axios';
import ConsolePrinter from './log.service.js';
import WeatherDataHandler from './storage.service.js';

const weatherDataHandler = new WeatherDataHandler();

export const getWeather = async (city) => {
    const token = await weatherDataHandler.getKeyValue('token');
    
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду.');
    }

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const params = {
        q: city,
        appid: token,
        lang: 'ru',
        units: 'metric',
    };

    try {
        const response = await axios.get(apiUrl, { params });
        const responseData = response.data;
        return responseData;
        ConsolePrinter.printSuccess('Success');
    } catch (error) {
        ConsolePrinter.printError('Error fetching weather data:', error.message);
    }
};
