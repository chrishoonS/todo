const API_KEY = "714c1c37d62e741fa4af4af38e5241e0";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
              .then(data => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
                console.log(data.name, data.weather[0].main);
            });

    console.log("You live in", lat, lon, url);
}

function onGeoError() {
    alert("유저의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);