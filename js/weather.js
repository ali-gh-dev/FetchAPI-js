class Weather {
    constructor(city) {
        this.apiKey = "065d74fce8f9439c32d52dc2ff0b9954";
        this.city = city;
    }

    getWeather() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},ir&appid=${this.apiKey}&units=metric`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(`${res.status}`)
                }
            })
            .then(response_obj => {
                // console.log(response_obj);
                this.fixUI(response_obj);
            })
            .catch(err => console.log(err))
    }

    fixUI(data_obj) {
        // const name = data_obj['name'];
        // const country = data_obj['sys']['country'];
        const name = this.city;
        $('#w-location').html(name);
        const main = this.translate(data_obj['weather'][0]['main']);
        $('#w-main').html(main);
        const icon = data_obj['weather'][0]['icon'];
        $('#w-icon').attr("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
        const longitude = data_obj['coord']['lon'];
        const latitude = data_obj['coord']['lat'];
        $('#w-long').html(longitude);
        $('#w-lat').html(latitude);
        const temp = data_obj['main']['temp'];
        const temp_min = data_obj['main']['temp_min'];
        const temp_max = data_obj['main']['temp_max'];
        $('#w-temp').html(temp);
        $('#w-temp-min').html(temp_min);
        $('#w-temp-max').html(temp_max);
        const pressure = data_obj['main']['pressure'];
        const humidity = data_obj['main']['humidity'];
        $('#w-pressure').html(pressure);
        $('#w-humidity').html(humidity);
        const wind_speed = data_obj['wind']['speed'];
        $('#w-wind-speed').html(wind_speed);
    }

    changeLocation(new_city) {
        this.city = new_city;
    }

    translate(main_weather) {
        let result = "";
        switch (main_weather) {
            case "Rain":
                result = "بارانی";
                break;
            case "Thunderstorm":
                result = "رعد و برق";
                break;
            case "Drizzle":
                result = "نم باران";
                break;
            case "Snow":
                result = "برفی";
                break;
            case "Clear":
                result = "صاف";
                break;
            case "Clouds":
                result = "ابری";
                break;
            case 'Mist':
                result = "مه";
                break;
            case 'Smoke':
                result = "دود";
                break;
            case 'Haze':
                result = "مه کم";
                break;
            case 'Sand':
            case 'Ash':
            case 'Dust':
                result = "غبار";
                break;
            case 'Fog':
                result = "مه سفید";
                break;
            case 'Squall':
                result = "طوفان";
                break;
            case 'Tornado':
                result = "گردباد";
                break;
            default:
                result = main_weather;
                break;
        }
        return result;
    }

}
