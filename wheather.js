#!/usr/bin/env node
// означает что мы будем запускать этот файл как cli клиент.
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import ConsolePrinter from "./services/log.service.js";
import WeatherDataHandler from "./services/storage.service.js";

const weatherDataHandler = new WeatherDataHandler();

const saveToken = async (token) => {
    if(!token.length){
        return ConsolePrinter.printError('Токен не передан')
    }

    try {
        await weatherDataHandler.saveKeyValue('token', token);
        ConsolePrinter.printSuccess('Saved');
    } catch (error) {
        ConsolePrinter.printError(error);       
    }
}

const saveCity = async (cityName) => {
    if(!cityName.length){
        return ConsolePrinter.printError('Город не передан')
    }

    try {
        const city = await getWeather(cityName);
        await weatherDataHandler.saveCity(city);
        ConsolePrinter.printWheather(city)
        ConsolePrinter.printSuccess('Saved');
    } catch (error) {
        ConsolePrinter.printError(error);       
    }
}

const initCli = () => {
    const args = getArgs(process.argv);
    
    if(args.h){
        ConsolePrinter.printHelp();
    }

    if(args.s){
        saveCity(args.s);
    }

    if(args.t){
        saveToken(args.t);
    }
}

initCli();