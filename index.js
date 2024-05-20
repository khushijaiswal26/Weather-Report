function getData(){
    const city = searchCity.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b34f70963amsh537578949a1f8a6p158fadjsnda61338e8169',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(res => {
                console.log(res);
                temp.innerHTML = res.temp+"<sup>o</sup>";
                ws.innerHTML = res.wind_speed;
                humidity.innerHTML = res.humidity;
                
                if(res.temp>=30){
                    imageIcon.src="./images/sun.png";
                }
                if(res.temp<15){
                    imageIcon.src="./images/weather.png";
                }
                if(res.temp>=15 && res.temp<30){
                    imageIcon.src="./images/sunCloud.png";
                }
            })
        .catch(err => console.log(err));
}



