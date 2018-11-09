const findCity = () => {
    let cityName = document.getElementById("city-name").value;
    let coordonates = document.getElementById("coordonates");
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=91f14a0652b82e7fac8c4203ddd69dc9');
    myRequest.onload = function() {
        let myData = JSON.parse(myRequest.responseText);
        coordonates.innerHTML = "<p>Temperature: " + Math.floor(myData.main.temp) + "°C </p>";
    };
    myRequest.send();
}