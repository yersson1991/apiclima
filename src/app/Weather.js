export class Weather{
    constructor(city, countryCode){
        this.apKey = '7b5254fd0034a9637ae9794d77cbb725';
        this.city=city;
        this.countryCode=countryCode;

    }

   async getWeather(){
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apKey}&units=metric`;
        const response= await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;

    }


}
