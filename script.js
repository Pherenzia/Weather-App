var userinput = document.getElementById('input')
var prevcities = document.getElementsByClassName('prev-cities')
var searchbtn = document.getElementById('search-button');
var usercity = document.getElementById('city-search')
var header0 = document.getElementById('card-header0')
var li00 = document.getElementById('li00')
var li01 = document.getElementById('li01')
var li02 = document.getElementById('li02')
var li03 = document.getElementById('li03')
var li04 = document.getElementById('li04')

var header1 = document.getElementById('card-header1')
var li10 = document.getElementById('li10')
var li11 = document.getElementById('li11')
var li12 = document.getElementById('li12')
var li13 = document.getElementById('li13')
var li14 = document.getElementById('li14')

var header2 = document.getElementById('card-header2')
var li20 = document.getElementById('li20')
var li21 = document.getElementById('li21')
var li22 = document.getElementById('li22')
var li23 = document.getElementById('li23')
var li24 = document.getElementById('li24')

var header3 = document.getElementById('card-header3')
var li30 = document.getElementById('li30')
var li31 = document.getElementById('li31')
var li32 = document.getElementById('li32')
var li33 = document.getElementById('li33')
var li34 = document.getElementById('li34')

var header4 = document.getElementById('card-header4')
var li40 = document.getElementById('li40')
var li41 = document.getElementById('li41')
var li42 = document.getElementById('li42')
var li43 = document.getElementById('li43')
var li44 = document.getElementById('li44')

var header5 = document.getElementById('card-header5')
var li50 = document.getElementById('li50')
var li51 = document.getElementById('li51')
var li52 = document.getElementById('li52')
var li53 = document.getElementById('li53')
var li54 = document.getElementById('li54')
var citylist = [];

//https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

function initialforecast() {
    //var citysearch1 = citysearch.replace(/\s+/g, "");
    
    // if(!citysearch) {
        // alert('Please put in a city name!');
        // return;
        // }
        console.log(searchlink)
    }
    
    function storecities() {
        localStorage.setItem('cities', JSON.stringify(citylist));
    }
    
    
function fetchweather() {
        var citysearch = document.getElementById("city-search").value;
        var citysearch2 = citysearch.replace(" ", '+')
        var searchlink = 'https://api.openweathermap.org/geo/1.0/direct?q=' + citysearch2 + '&limit=1&appid=bb789583263105d6bc95c93685382fbc';
        console.log(searchlink)
        fetch(searchlink)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
            console.log(data[0].lat);
            console.log(data[0].lon);
            
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' +data[0].lat + '&lon=' + data[0].lon + '&appid=bb789583263105d6bc95c93685382fbc')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                li04.setAttribute('src', "http://openweathermap.org/img/w/" + (data.daily[0].weather[0].icon) + ".png")
                header0.textContent = citysearch + ' ' + moment().format('L') + ' '
                li00.textContent =  'Wind speed is ' + (data.daily[0].wind_speed)
                li01.textContent = 'Humidity is ' + (data.daily[0].humidity) + '%'
                li02.textContent = 'Temperature is ' + (data.daily[0].temp.max)
                li03.textContent = 'UV Index: ' + (data.daily[0].uvi)
                
                li14.setAttribute('src', "http://openweathermap.org/img/w/" + (data.daily[1].weather[0].icon) + ".png")
                header1.textContent = citysearch + ' ' + moment().format('L') + ' '
                li10.textContent =  'Wind speed is ' + (data.daily[1].wind_speed)
                li11.textContent = 'Humidity is ' + (data.daily[1].humidity) + '%'
                li12.textContent = 'Temperature is ' + (data.daily[1].temp.max)
                li13.textContent = 'UV Index: ' + (data.daily[1].uvi)

                li24.setAttribute('src', "http://openweathermap.org/img/w/" + (data.daily[2].weather[0].icon) + ".png")
                header2.textContent = citysearch + ' ' + moment().format('L') + ' '
                li20.textContent =  'Wind speed is ' + (data.daily[2].wind_speed)
                li21.textContent = 'Humidity is ' + (data.daily[2].humidity) + '%'
                li22.textContent = 'Temperature is ' + (data.daily[2].temp.max)
                li23.textContent = 'UV Index: ' + (data.daily[2].uvi)

                li34.setAttribute('src', "http://openweathermap.org/img/w/" + (data.daily[3].weather[0].icon) + ".png")
                header0.textContent = citysearch + ' ' + moment().format('L') + ' '
                li30.textContent =  'Wind speed is ' + (data.daily[3].wind_speed)
                li31.textContent = 'Humidity is ' + (data.daily[3].humidity) + '%'
                li32.textContent = 'Temperature is ' + (data.daily[3].temp.max)
                li33.textContent = 'UV Index: ' + (data.daily[3].uvi)

                li44.setAttribute('src', "http://openweathermap.org/img/w/" + (data.daily[4].weather[0].icon) + ".png")
                header4.textContent = citysearch + ' ' + moment().format('L') + ' '
                li40.textContent =  'Wind speed is ' + (data.daily[4].wind_speed)
                li41.textContent = 'Humidity is ' + (data.daily[4].humidity) + '%'
                li42.textContent = 'Temperature is ' + (data.daily[4].temp.max)
                li43.textContent = 'UV Index: ' + (data.daily[4].uvi)

                li54.setAttribute('src', "http://openweathermap.org/img/w/" + (data.daily[5].weather[0].icon) + ".png")
                header5.textContent = citysearch + ' ' + moment().format('L') + ' '
                li50.textContent =  'Wind speed is ' + (data.daily[5].wind_speed)
                li51.textContent = 'Humidity is ' + (data.daily[5].humidity) + '%'
                li52.textContent = 'Temperature is ' + (data.daily[5].temp.max)
                li53.textContent = 'UV Index: ' + (data.daily[5].uvi)

            })
        })
}
    
    
function addcity() {
    prevcities.innerHTML = "";
        
    for (var i = 0; i < citylist.length; i++) {
        var city = citylist[i];
        var li = document.createElement('li');
        button.textContent = city;
        button.setAttribute('data-index', i);
                   
    }
}
    
    userinput.addEventListener('submit' , function(event) {
        event.preventDefault();
        fetchweather();
        var cityname = usercity.value.trim();
        console.log(cityname)
        if (cityname === '') {
            return;
        }
        citylist.push(cityname);
        usercity.value = ''
        storecities();
    });
    
    
    // prevcities.addEventListener('click', function(event) {
        //     var element = event.target;
        
        //     if (element.matches('button') === true) {
            //         var 
            //     }
            // })
            
            
            
            //searchbtn.addEventListener('click', initialforecast);
            
            // var getRepoIssues = function (repo) {
                
                //   fetch(searchlink)
                //     .then(function (response) {
                    //       if (response.ok) {
                        //         // What is this checking for? Under what condition will this be `true`?
//         // TODO: Write your answer here
//         if (response.headers.get('Link')) {
//           displayWarning(repo);
//         }
//         return response.json();
//       }
//       document.getElementById('li1').textContent = searchlink
//     })
//     .then(displayIssues);
// };