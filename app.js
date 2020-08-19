
const todayCases = document.querySelector('.todayCases');
const todayDeaths = document.querySelector('.todayDeaths');
const totalTests = document.querySelector('.totalTests');

const active = document.querySelector('.active');
const cases = document.querySelector('.cases');
const deaths = document.querySelector('.deaths');


const searchBox = document.querySelector('.search-box input');
const btn = document.querySelector('.search-btn');
btn.addEventListener('click',getResult);

function getResult(){
  
    const searchBoxValue = searchBox.value;
fetch(`https://coronavirus-19-api.herokuapp.com/countries/${searchBoxValue}`)
.then((Response) => Response.json())
.then((data) => getNews(data))
}

function getNews(data){
    document.querySelector('.corona-news').style.display = 'block'
    console.log(data)
    const todayCase = data.todayCases;
        if(todayCase == 0){
            todayCases.innerHTML = 'Today news not publish'
        }else{
            todayCases.innerHTML = `${todayCase}`
        };


    const todayDeath = data.todayDeaths;
        if(todayDeath == 0){
            todayDeaths.innerHTML = 'Today news not publish'
        }
        else{
            todayDeaths.innerHTML = todayDeath;
        }
    totalTests.innerHTML = ` ${data.totalTests} `

    active.innerHTML = ` ${data.active} `
    cases.innerHTML = ` ${data.cases} `
    deaths.innerHTML = ` ${data.deaths} `
}
