let default_city = localStorage.getItem("شهر") || "تهران";
const default_location = new Weather(default_city);

function get_weather() {
    default_location.getWeather();
}

function change_location() {
    const new_city = $('#w-form #city').val().trim();
    if (new_city.length > 0) {
        default_location.changeLocation(new_city);
        localStorage.setItem("شهر", new_city)
        get_weather();
    }
}


// Events
$(document).ready(get_weather);
$('#w-change-btn').click(change_location);

