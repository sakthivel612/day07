// Class - Movie
// OOPS TASK 
// 1. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// answer:
// class movie {
//   constructor(title,studio,rating){
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }

//   get ratings() {
//     return "the rating is " + this.rating 
//   }

//   set ratings(values) {
//     this.rating = values;
//   }
// }

// let movie1 = new movie("Avatar","disny","7");
// console.log(movie1.rating);


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// answer:

// class movie {
//   constructor(title, studio, rating){
//       this.title = title;
//       this.studio = studio;
//       this.rating = "PG";
//   }
// }

// let movie1 = new movie("Avangers","marvel",this.rating);
// console.log(movie1.rating);


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// answer:
//class movie {
//   constructor(title,rating){
//     this.title = title;
//     this.rating = rating;
//   }
// }
// class movielist { 
//   constructor(movies){
//     this.movies = movies;
//   }

//   getPG(){
//     return this.movies.filter(Movie => Movie.rating === "PG");
//   }
// }

// const movies = [
//   new movie("Toy story","G"),
//   new movie("Harry potter","PG"),
// ];

// const Movielist = new movielist(movies);
// const pgMovies = Movielist.getPG();
// console.log(pgMovies);


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// answer:
// class movie {
//   constructor(title,studio,rating){
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }
// const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
// console.log(CasinoRoyale);



// 2.Write a "person" class to hold all the details.

// class person {
//   constructor(name,age,gender,dob,qualification,address,mobile_number){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.dod = dob;
//     this.qualification = qualification;
//     this.address = address;
//     this.mobile_number = mobile_number;
//   }
// }

// let details = new person("Sakthivel","22","male","06/12/2000","Msc,.computer science","--------","6382-----");
// console.log(details);


// 3. write a class to calculate the uber price.

// class price{
//   constructor(d,p){
//     this.d = d;
//     this.p = p;
//   }

//   uber_price(){
//     console.log(this.d + this.p);
//   }
// }

// let calculate = new price(10+20);
// calculate.uber_price();


// 4 . Circle - Class
// Convert the UML diagram to Typescript class. - use number for double.

// class Circle {
//   private radius:Number;
//   constructor(radius:Number){
//     this.radius = radius;
//   }

//   getRadius(): Number{
//     return this.radius;
//   }

//   setRadius(radius:Number):void{
//     this.radius = radius;
//   }

//   calculateArea():Number{
//     return Math.PI * Math.pow(this.radius, 2);
//   }

//   calculateCircumference(): Number{
//     return 2 * Math.PI * this.radius;
//   }
// }


// ARRAY METHODS

// 1 . Solving problems using array functions on the rest countries' data 
// (https://restcountries.com/v3.1/all).

// a. Get all the countries from the Asia continent /region using the Filter function
// const url = "https://restcountries.com/v3.1/all"
// const link = new XMLHttpRequest();
// link.open("GET", url)
// link.onload = ()=>{
//     if(link.status === 200){
//         const data = JSON.parse(link.response);
//         const Asiacountries = data.filter(country => country.region === "Asia").map(country=> country.name.common);
//         console.log(Asiacountries);
        
//     }
// };
// link.send();

// b. Get all the countries with a population of less than 2 lakhs using Filter function
// const url = "https://restcountries.com/v3.1/all"
// const request = new XMLHttpRequest()
// request.open("GET", url)
// request.onload = ()=>{
//     if(request.status === 200){
//         const result = JSON.parse(request.response);
//         const countrypopulation = result.filter(country => country.population >= 200000);
//         console.log(countrypopulation);
//     }
// }
// request.send();

// c. Print the following details name, capital, flag using forEach function
// const url = "https://restcountries.com/v3.1/all"
// const request = new XMLHttpRequest()
// request.open("GET", url)
// request.onload = ()=>{
//     if(request.status === 200){
//         var result = JSON.parse(request.response);
//         result.forEach(val => console.log(val.name));
//         // result.forEach(val => console.log(val.captial));
//         // result.forEach(val => console.log(val.flag));
        
//     }
// }
// request.send();

// d.Print the total population of countries using reduce function

// const url = "https://restcountries.com/v3.1/all"
// const request = new XMLHttpRequest()
// request.open("GET", url)
// request.onload = ()=>{
//     if(request.status === 200){
//         var result = JSON.parse(request.response);
//         // console.log(result)
//         let totalPop = result.reduce(((a,b)=> a + b.population),0);
//         console.log(Number(totalPop));
//     }
// }
// request.send();

// e. Print the country which uses US Dollars as currency

// const url = "https://restcountries.com/v3.1/all"
// const request = new XMLHttpRequest()
// request.open("GET", url)
// request.onload = ()=>{
//     if(request.status === 200){
//         var result = JSON.parse(request.response);
//         // console.log(result)
//         for(let i of result){
//             console.log(i.currencies);
//         }
//     }
// }
// request.send();
