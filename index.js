const API_KEY = '7b9e37b6da1189f662b58ee421f636c9'

const inputText = document.getElementById("input");

const icon = document.getElementById("icon")

const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = inputText.value;
    getWeather(inputValue)

})

async function getWeather(inputValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`)

        if(!response.ok){
            throw new Error("Something went wrong")
        }

        const data = await response.json()

        icon.innerHTML = `<img class="inline-block h-20" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">`

        document.querySelector('.temperature').innerHTML = `${data.main.temp}°C`
        document.querySelector('.decription').innerHTML = data.weather[0].description

        const details = [
            `<div class="bg-gray-200 md:w-35 md:h-20 flex flex-col justify-center items-center font-mono rounded-md w-25 h-20 md:text-lg text-sm">Feels like: 
                <div class="feelslike">
                    ${data.main.feels_like}
                </div>
            </div>`,
            `<div class="bg-gray-200 md:w-35 md:h-20 flex flex-col justify-center items-center font-mono rounded-md w-25 h-20 md:text-lg text-sm">Humidity : 
                <div class="humidity">
                ${data.main.humidity}
                </div>
            </div>`,
            `<div class="bg-gray-200 md:w-35 md:h-20 flex items-center font-mono rounded-md w-25 h-20 md:text-lg text-sm">Wind speed: ${data.wind.speed} m/s</div>`
            
        ]

        document.querySelector(".details").innerHTML = ' '

        details.map((details) => {
            document.querySelector(".details").innerHTML += details
        })
        
    } catch (error) {
        
    }
}