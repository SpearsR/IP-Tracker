function httpGet(){
    var addy = window.location.href.split('?')[1].split('=')[1];
    var API_KEY = 'at_d9H2ZB2Uas1gZjH1CMg8QEFje0gda';
    var url = `https://geo.ipify.org/api/v1?apiKey=${String(API_KEY)}&ipAddress=${String(addy)}`;
    fetch(url).then(response => response.json())
    .then(data => {
        //Pulls IP Data
        console.log(data);
        let city = data.location.city;
        let ip_address = data.ip;
        let country = data.location.country;
        let zip = data.location.postalCode;
        let isp = data.isp;
        let timezone = data.location.timezone;
        let lat = data.location.lat;
        let lng = data.location.lng;

        document.getElementById('ip-addy').innerHTML = ip_address;
        document.getElementById('locations').innerHTML = `${city}, ${country}`;
        document.getElementById('zip').innerHTML = `${zip}`;
        document.getElementById('timezone').innerHTML = `${timezone}`;
        document.getElementById('isp').innerHTML = `${isp}`;

        //Rendering the map
        var mymap = L.map('mapid').setView([lat, lng], 11);
        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=g7F4ezEhtpJoeTgzgJUd', {
            attribution : '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        
        }).addTo(mymap);
        var marker = L.marker([lat,lng]).addTo(mymap);

    }
    ).catch(error => {
        console.error(error);
    })
    }