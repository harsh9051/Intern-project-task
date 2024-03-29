// Foursquare API Info
const clientId = 'X300CL4Y4M1F3QT1AAOSQPX4PTEIIRQIEV40Z04EHJVULQ3Y';
const clientSecret = 'PAYRGKI4BBCH5UCET0JJGDH2YENOV3CDNWNDNB20Y4CXS1BQ';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '8403fec3c61c4b428b0145310180501';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async() => {
    const city = $input.val();
    const urlToFetch=`${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
    try {
        const response = await fetch(urlToFetch);
        if(res.ok){
            const jsonResponse=await response.json();
            const venues=jsonResponse.response.groups[0].items.map(item=>item.venue);
            return venues;
        }
    } catch (error) {
        console.log(error)
    }
}

const getForecast = async() => {
    const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=11`;
    
    try {
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const days = jsonResponse.forecast.forecastday;
            return days;
        }
    } catch (error) {
        console.log(error)
    }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc=`${venueIcon.prefix}bg_64${venueIcon.suffix}`

    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  $weatherDivs.forEach(($day, index) => {
    const currentDays = days[index];
	let weatherContent = createWeatherHTML(currentDays);
    $day.append(weatherContent);
});
}
const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)
