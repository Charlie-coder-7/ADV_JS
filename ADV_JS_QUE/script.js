//create a user object that stores the name and email and has a login method which prints "user logged in"
// let user = {
//     name:"Achyuta",
//     email:"achyuta@gmail.com",
//     fnc:function(){
//        console.log("logged in");
       
//     }
// }
// user.fnc();

//imagine you have 5 users and everyone have logged in function and create it first and again crate it using a class and see how the code looks cleaner
// class User {
//     constructor(name,email){
//        this.name = name;
//        this.email = email;
//     }
//     loggedIn(){
//         console.log("logged in");
        
//     }
// }
// let user1 = new User("Achyuta","abc@gmail.com");
// let user2 = new User("Japano", "jpn@gmail.com");
// let user3 = new User("swissly", "swiss@gmail.com");

//create a product that stores names and price and has a method that returns the final price after discounts

// let product = {
//     name:"cap",
//     price:3000,
//     discountedPrice:function(){
//         return this.price-200;
//     }
// }
// console.log(product.discountedPrice());
// ;



//SECTION 2 - CLASSES AND OBJECTS

//1.Create a class car with this following:
    //brand
    //speed
    //a drive method that prints the car brand and speed

// class Car {
//     constructor(brand,speed)
//     {
//         this.brand = brand,
//         this.speed = speed;
//     }
//     drive()
//     {
//         return this.brand + "-" + this.speed;
//     }

// }

// let car1 = new Car("Hyundai",180);
// let car2 = new Car("Maruti", 170);


//SECTION-3 -CONSTRUCTOR AND THIS KEYWORD

//create a student class whose constructor accepts name and roll no 
//add a method introduce that prints the both values

// class Students{
//     constructor(name,rollNo)
//     {
//         this.name = name;
//         this.rollno = rollNo;

//     }
//     introduce(){
//         console.log(this.name + " " + this.rollno);
        
//     }
// }

// let s1 = new Students("Achyuta",35);

//SECTION 4 - Constructor functions and prototypes
// function Animal (){
//     this.name = "Dog";
// }
// let a1 = new Animal();

//Use constructor function without class 

// function User()
// {
//     this.name = "harsh";
// }

// User.prototype.loggedIn = function(){
//     console.log("logged In");
    
// }

// let u1 = new User(); 

//Create two user objects and compare their login methods using equality
//Explain why their result is true or false 
function User(val)
{
    this.name = val;
}

User.prototype.loggedIn = function(){
    console.log("logged In");
    
}

let u1 = new User("Achyuta");
let u2 = new User("Charlie"); 

