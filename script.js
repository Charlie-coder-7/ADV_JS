// class Book{
//     constructor(name,price,author,color)
//     {
//         this.name = name;
//         this.price = price;
//         this.author = author;
//         this.color = color;
//     }
//     PageOpen(){

//     }
//     BookMark()
//     {

//     }
//     Read()
//     {

//     }
// }
// class User{
//   constructor(){
//     this.userName = "Achyuta";
//     this.age = 21;
//     this.email = "sahoo@gmail.com";
//   }
//   eatFood(){

//   }
//   breath(){}
// }

// let k1 = new Book("moral",250,"Achyuta Sahoo","white");
// let k2 = new Book("Computer Science", 500, "Achyuta Sahoo", "blue");
// let k3 = new Book("Consitution", 362 ,"V R Ambedkar", "Golden");

// class Human {
//   constructor() {
//     this.name = "Achyuta";
//     this.age = 21;
//   }
// }
// Human.prototype.breath = function () {
//     console.log("hey");

// };
// Human.prototype.eat = function(){
//     console.log("hey");

// }
// let h1 = new Human();
// let h2 = new Human();

// class Bottle {
//     constructor(){
//         this.color = "blue",
//         this.material = "plastic",
//         this.price = 150;

//     }
//     fill(){}
//     drink(){}
// }

// let bottle1 = new bottle()
// class Sketch{
//     constructor(){
//         this.character = "Doraemon";
//         this.color = "blue"
//         this.somFnc = function(){};
//     }
// }

// let sketch1 = new Sketch();

//value of this

//global - window
//console.log(this);

//function - window
// let a = function(){
//     console.log(this);

// }

//es5 function inside object- object

// let obj = {
//     fnc:function(){
//         console.log(this);
//     }
// }

//es6 function inside object - window
//   let obj = {
//     fnc:()=>{
//        console.log(this);

//     }
//   }

// es5 function inside es5 fucnction inside object - window
//   let obj = {
//     fnc:function(){
//         function a ()
//         {
//            console.log(this);

//         }
//         a();
//     },
//   };

//es6 function inside es5 function inside object - object

// let obj = {
//     fnc:function()
//     {
//         ()=>{
//             console.log(this);

//         }

//     }
// };

//call
// let obj = {
//     name:"achyuta";
// };

// function a(){
//     console.log(this);

// }
// a.call(obj);

//getter and setter

// class Animal{
//     constructor(){
//         this._age = 20;
//     }
//     set age(val)
//     {
//       if(val<0)
//       {
//         console.error("not possible");
//         return;

//       }
//       this._age = val;
//       return this._age;
//     }
//     get age(){
//         return this._age;
//     }
// }
// let a1 = new Animal();
// console.log(a1.age);

//Asyncronous javascript

// function RunAfterSomeTime(fnc){
//    setTimeout(fnc,Math.floor(Math.random()*10)*1000);
// }

// RunAfterSomeTime(function(){
//   console.log("hello");

// })

//callback hell
// function getProfile(username, cb) {
//   console.log("fetching profile data....");
//   setTimeout(() => {
//     cb({ _id: 26747, username, age: 21, email: "achyuta@gmail.com" });
//   }, 2000);
// }
// function getAllPosts(id, cb) {
//   console.log("fetching all posts....");

//   setTimeout(() => {
//     cb({ _id: id, posts: ["hello", "Good Morning"] });
//   }, 3000);
// }
// function getAllSavedPosts(id, cb) {
//   console.log("fetching saved posts....");

//   setTimeout(() => {
//     cb({ _id: id, saved: [1, 2, 3, 4, 5, 6] });
//   }, 3000);
// }
// getProfile("achyuta", function (data) {
//   console.log(data);
//   getAllPosts(data._id, function (posts) {
//     console.log(posts);
//     getAllSavedPosts(data._id, function (saved) {
//       console.log(saved);
//     });
//   });
// });

//promises

// let pr = new Promise(function(res,rej)
// {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random()*10);
//     if(rn>5) res(" resolved with " + rn );
//     else rej("rejcted with " + rn);
//   }, 3000);
// });

// pr.
//   then(function(val){
//     console.log(val);
    
//   })
//   .catch(function(val){
//     console.log(val);
    
//   })

//async await
// async function abcd() {
//   try {
//     let val = await pr;
//     console.log(val);
    
//   }
//   catch(err)
//   {
//     console.log(err);
    
//   }
// }

// abcd();

//callback

// function abcd(fnc){
//     fnc(function(fnc3){
//        fnc3(function(fnc5){
//          fnc5();
//        });
//     });
// }

// abcd(function(fnc2){
//    fnc2(function(fnc4){
//      fnc4(function(){
//         console.log("hello");
        
//      });
//    });
// });

// function afterDelay(time,cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }

// afterDelay(3000,function(){
//   console.log("call back executed");
  
// })

// getDataFromIntsagram(username,cb)
// {
//    setTimeout(() => {
//     cb({uniquenum:24576,username:"Achyuta"})
//    }, 2000);
// }
// getAllposts(uniquenum,cb)
// {
//   setTimeout(() => {
//     cb(["img1","img2","img3"]);
//   }, 3000);
// }


// getDataFromIntsagram("Achyuta",function(data){
//   getAllposts(data.uniquenum,function(img){
//      console.log(img);
     
//   })
// })

// function loginUser(username,cb){
//   console.log("Fetching user details....");
  
//   setTimeout(() => {
//      cb({id:267888,username:"Achyuta"});
//   }, 1000);
// }
// function fetchPermissions(id,cb){
//   console.log("Fetching permissions....");

//   setTimeout(() => {
//     cb(["Write","Read","delete"]);
//   }, 2000);
// }
// function loadDashBoard(Permissions,cb){
//   console.log("Loading dashboard....");

//   setTimeout(() => {
//     cb();
//   }, 2000);
// }

// loginUser("Achyuta",function(data){
//   fetchPermissions(data.id,function(Permissions){
//     loadDashBoard(Permissions,function(){
//        console.log("Dashboard loaded");
//     })
//   })
// })

//By using fetch you can go to any url you want
// fetch("https://randomuser.me/api/")
// .then((raw)=>raw.json())
// .then((data)=>{
//   console.log(data);
  
// });

//ASYNC AWAIT
async function abcd() {
  let raw = await fetch("https://randomuser.me/api/");
  let data = await raw.json();
  console.log(data);
}
abcd();