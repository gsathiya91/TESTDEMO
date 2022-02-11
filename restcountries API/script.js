//XML-HTTP
//rest countries 
//The output of this api is an Array of JSON object
//we have 4 steps in performing the operations
//var student={name:"john doe"}

//step01:create a XHR object
//var variable 
//req/request/any userdefined name
// var request=new XMLHttpRequest();
//step02:create a connection/extracting the info 
//HTTP METHOD:GET 
//API url:
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03:sending a connection 
// request.send();
//step 04:once the data successfully loaded(onload) from the server 
//data coming from server is of type string
//we have to convert string to Object(JSON)
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     console.log(data);
//     for(var i=0; i<data.length;i++){
//         console.log(`country:${data[i].name}
//             capital:${data[i].capital} 
//             latitude:${data[i].latlng[0]}
//             longitude:${data[i].latlng[1]}
//             National flag:${data[i].flag}`);
//      }
// }

// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     console.log(data);
//     for(var i=0; i<data.length;i++){
//         var name=data[i].name;
//         var long=data[i].latlng;
//         wd(name,...long);
//     }
// }
// function wd(name,lat,lon){
//     var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=705bd5f9bfa1dca63b2525ad992f955f`;
//     var request= new XMLHttpRequest();
//     request.open("GET",url);
//     request.send();
//     request.onload=function(){
//     var result=JSON.parse(request.response);
//     console.log(`${name}:${result.main.temp}`)
//     }
    
//     }

// PRINT ALL THE COUNTRY NAME WHOSE REGION IS "ASIA";

// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     console.log(data);
//             var name=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name)
//         console.log(name)
//     }

// PRINT THE COUNTRIES DETAILS WHOSE POPULATION LESS THAN 1 LAKH;

// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     console.log(data);
//             var name=data.filter((ele)=>ele.population<100000);
//         console.log(name)
//     }

// PRINT THE SUM OF TOTAL POPULATION OF ALL COUNTRIES;

// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     console.log(data);
//             var res=data.reduce((acc,cv)=>acc+cv.population,0); 
          
//             console.log(res);
//     }

// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
// var data=JSON.parse(request.response);
// console.log(data);
// for(var i=0; i<data.length;i++){
// console.log(`country:${data[i].name}  
//               Region:${data[i].region}
//               Sub-Region:${data[i].subregion} 
//               Population:${data[i].population}`);
// }
// }
// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
// var data=JSON.parse(request.response);
// console.log(data);
// data.forEach(element=>{
//     console.log(`${element.name}:
//                  ${element.capital}:
//                  ${element.flag}`)
// });
// }

// Print the country which uses US Dollars as currency.

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
            var name=data.filter((ele)=>ele.currencies[0].symbol==="$").map((ele)=>ele.name)
        console.log(name)
}


