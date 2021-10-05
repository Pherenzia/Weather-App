var userinput = document.getElementById('input')
var prevcities = document.getElementsByClassName('prev-cities')
var searchbtn = document.getElementById('search-button');
var usercity = document.getElementById('city-search')
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
                console.log(data.daily[0].temp.max)
                console.log(data.daily[0].wind_speed)
                console.log(data.daily[0].humidity)
                console.log(data.daily[0].weather[0].icon)
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