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
            .then(data_obj => {
                // console.log(data_obj);
                const name = data_obj['name'];
                const country = data_obj['sys']['country'];
                $('#w-location').html(name);
                $('#w-main').html(country);
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
            })
            .catch(err => console.log(err))
    }

    changeLocation(new_city) {
        this.city = new_city;
    }
}