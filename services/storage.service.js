import { join } from 'path';
import { promises } from 'fs';

class WeatherDataHandler {
    constructor() {
        this.filePath = join('weather-data.json');
    }

    async isExist() {
        try {
            await promises.stat(this.filePath);
            return true;
        } catch (e) {
            return false;
        }
    }

    async saveKeyValue(key, value) {
        let data = {};

        if (await this.isExist()) {
            const file = await promises.readFile(this.filePath);
            data = JSON.parse(file);
        }

        data[key] = value;
        await promises.writeFile(this.filePath, JSON.stringify(data));
    }

    async saveCity(value){
        let data = {};

        if(await this.isExist()){
            const file = await promises.readFile(this.filePath);
            data = JSON.parse(file);
        }

        data['city'] = value;
        await promises.writeFile(this.filePath, JSON.stringify(data));
    }

    async getKeyValue(key) {
        if (await this.isExist()) {
            const file = await promises.readFile(this.filePath);
            const data = JSON.parse(file);
            return data[key];
        }

        return undefined;
    }
}

export default WeatherDataHandler;
