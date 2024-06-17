const default_location = new Weather("زاهدان");
// default_location.changeLocation("شیراز");

function get_weather(){
    default_location.getWeather();
}


// Events
$(document).ready(get_weather);
