// // 1.Get all the countries from Asia continent /region using Filter function


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

// xhr.onload = function() {
//   if (xhr.status === 200) {
//     var data = JSON.parse(xhr.responseText);

//     const asiaCountries = data.filter(country => country.region === 'Asia');

//     // Log the country names to the console
//     asiaCountries.forEach(country => {
//       console.log(country.name.common);
//     });
//   } else {
//     console.log('Request failed. Status: ' + xhr.status);
//   }
// };

// xhr.onerror = function() {
//   console.log('An error occurred while making the request.');
// };

// xhr.send();

// 2.Get all the countries with a population of less than 2 lakhs using Filter function


// function printData() {
//     const countries = JSON.parse(this.responseText);
//    const data=countries.filter(country=>country.population>"200000");
  
//    data.forEach(country=>{
//     console.log(country.population)
//    })
//    }
   
//    var request = new XMLHttpRequest();
//    request.addEventListener("load", printData);
//    request.open("GET", "https://restcountries.com/v3.1/all");
//    request.send();  


// 3.Print the following details name, capital, flag using forEach function


function givedata(){
    const countries=JSON.parse(this.responseText);
   const data1= countries.forEach((country)=>console.log(country.name,country.capital,country.flag));
}

var data=new XMLHttpRequest();
data.addEventListener('load',givedata)
data.open("GET","https://restcountries.com/v3.1/all");
data.send();



