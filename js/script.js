const default_location = new Weather("تهران");

function get_weather() {
    default_location.getWeather();
}

function change_location() {
    const new_location = $('#w-form #city').val().trim();
    if (new_location.length > 0) {
        default_location.changeLocation(new_location);
        get_weather();
    }
}


// Events
$(document).ready(get_weather);
$('#w-change-btn').click(change_location);

