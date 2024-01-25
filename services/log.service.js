import chalk from 'chalk';

class ConsolePrinter {
    static printError(err) {
        console.log(`${chalk.bgRed('ERROR ')}${err}`);
    }

    static printSuccess(message) {
        console.log(`${chalk.bgGreen('SUCCESS ')}${message}`);
    }

    static printHelp() {
        console.log(`${chalk.bgCyan('HELP')}\nБез параметров - вывод погоды\n\n-s [City] для установки города\n-h для вывода помощи\n-t [API_KEY] для сохранения токена.`);
    }

    static printWheather(city){
        console.log(`Погода в городе ${chalk.bgBlueBright(city.name)}: \n${city.weather[0].description} \nТемпература: ${city.main.temp}\nОщущается как:${city.main.feels_like}`);
    }
}

export default ConsolePrinter;
