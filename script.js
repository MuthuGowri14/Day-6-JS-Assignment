//1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

/*a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.*/
class movie{

    constructor (title,studio,rating){
        this.title=title;
        this.rating=rating;
        this.studio=studio;

    }
}
const m1=new movie("Casino Royale","Eon Productions","PG13")
console.log(m1);
//output:
// movie {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
// rating: "PG13" 
// studio: "Eon Productions"
// title: "Casino Royale"
// [[Prototype]]: Object


//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie1{

    constructor (title,studio,rating="PG"){
        this.title=title;
        this.rating=rating;
        this.studio=studio;

    }
}
const m2=new movie1("Casino Royale","Eon Productions")
console.log(m2);
/*movie1 {title: 'Casino Royale', studio: 'Eon Productions', rating:'PG'}
studio: "Eon Productions"
rating: "PG"
title: "Casino Royale"
[[Prototype]]: Object*/

/*c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. The returned array need not be full.*/

class movie2{

    constructor (title,studio,rating="PG"){
        this.title=title;
        this.rating=rating;
        this.studio=studio;

    }
    static getPG(baseArray)
          {
        let newArray = baseArray.filter(movie => movie.rating === "PG")
        {
             return newArray;
        };
    }
}
const m3=new movie2("Casino Royale","svss Productions","PG")
const m4=new movie2("Inception","MS Productions","PG14")
const m5=new movie2("Vintage","Mass Productions","PG")
const m6=new movie2("Christmas Friend","DD Productions","PG13")
//console.log(m3);
let movieArray=[m3,m4,m5,m6];
console.log(movieArray);
let outputArray=movie2.getPG(movieArray);
console.log(outputArray);

/*Output:
2) [movie2, movie2]
0: movie2 {title: 'Casino Royale', rating: 'PG', studio: 'svss Productions'}
1: movie2 {title: 'Vintage', rating: 'PG', studio: 'Mass Productions'}
length: 2
[[Prototype]]: Array(0)*/

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13

class Movie3 {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Movie3("Casino Royale", "Eon Productions", "PG13");

    console.log(casinoRoyale);
    /*Output
    Movie3 {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
rating: "PG13"
studio: "Eon Productions"
title: "Casino Royale"
[[Prototype]]: Object*/


//2.Circle

  class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  
  const circle1 = new Circle(5, "Violet");
  const circle2 = new Circle(10, "Cyan");
  
  console.log(circle1.toString());
  console.log("Area= ", circle1.getArea());
  console.log("Circumference= ", circle1.getCircumference());
  
  console.log(circle2.toString());
  console.log("Area= ", circle2.getArea());
  console.log("Circumference= ", circle2.getCircumference());

  /*Output:
Circle [radius = 5 , color = Violet]
Area=  78.53981633974483
Circumference=  31.41592653589793
Circle [radius = 10 , color = Cyan]
Area=  314.1592653589793
Circumference=  62.83185307179586*/

//3.Write a “person” class to hold all the details.


class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
}
let person1 = new Person("Muthu", "Gowri",31, "ECE", "kmg@gmail.com", 8090898967, "Trichy");
let person2 = new Person("Subash","Anand", 33, "ECE", "san@gmail.com",3243546578, "Trichy");

console.log(person1);
console.log(person2);
/*Output

Person {firstName: 'Muthu', lastName: 'Gowri', age: 31, department: 'ECE', email: 'kmg@gmail.com', …}
age: 31
city: "Trichy"
department: "ECE"
email: "kmg@gmail.com"
firstName: "Muthu"
lastName: "Gowri"
mobile: 8090898967
[[Prototype]]: Object

Person {firstName: 'Subash', lastName: 'Anand', age: 33, department: 'ECE', email: 'san@gmail.com', …}
age: 33
city:"Trichy"
department: "ECE"
email: "san@gmail.com"
firstName: "Subash"
lastName: "Anand"
mobile: 3243546578
[[Prototype]]: Object*/

//4.write a class to calculate the uber price.
class UberPrice {
    constructor(distance, duration, fare, farePerMile, farePerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.fare = fare;
      this.farePerMile = farePerMile;
      this.farePerMinute = farePerMinute;
    }
  
    CabFare() {
      return this.fare + (this.distance * this.farePerMile) + (this.duration * this.farePerMinute);
    }
  }
  
  const myUber = new UberPrice(15, 20, 100, 34, 5);
  console.log(myUber.CabFare());

  //output: 710