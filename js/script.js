const default_location = new Weather("تهران");
default_location.changeLocation("تبریز");

function get_weather(){
    default_location.getWeather();
}


// Events
$(document).ready(get_weather);
