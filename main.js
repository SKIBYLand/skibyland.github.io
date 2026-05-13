
const cities = [
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "New York", timezone: "America/New_York" },
    { name: "Paris", timezone: "Europe/Paris" },
    { name: "Sydney", timezone: "Australia/Sydney" },
    { name: "Dubaï", timezone: "Asia/Dubai" },
    { name: "Rio de Janeiro", timezone: "America/Sao_Paulo" },
    { name: "Johannesburg", timezone: "Africa/Johannesburg" },
    { name: "Los Angeles", timezone: "America/Los_Angeles" },
    { name: "Singapour", timezone: "Asia/Singapore" },
    { name: "London", timezone: "Europe/London" },
    { name: "Yaoundé", timezone: "Africa/Douala" },
    { name: "Mbouda", timezone: "Africa/Douala" },
    { name: "Bangangté", timezone: "Africa/Douala" },
    { name: "Foumban", timezone: "Africa/Douala" },
    { name: "Padova", timezone: "Europe/Rome" },
    { name: "Milan", timezone: "Europe/Rome" },
    { name: "Rome", timezone: "Europe/Rome" },
    { name: "Lima", timezone: "America/Lima" },
    { name: "Bogotá", timezone: "America/Bogota" }
];

function initDynamicRandomClock() {

    const randomer = Math.floor(Math.random() * cities.length);
    const randomCity = cities[randomer];
    const displayElement = document.getElementById('time-displayer');


    function updateTime() {
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: randomCity.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const timeString = timeFormatter.format(new Date());

        if (displayElement) {
            displayElement.innerHTML = `It's currently <strong>${timeString}</strong> in <strong>${randomCity.name}</strong>.`;
        }
    }

    updateTime();

    setInterval(updateTime, 1000);
}

window.addEventListener('DOMContentLoaded', initDynamicRandomClock);