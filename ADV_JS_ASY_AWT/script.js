//Bulk email sending simulation with parallel promises and error handling
// const users = [
//   "achyuta@gmail.com",
//   "rudra@gmail.com",
//   "smruti@gmail.com",
//   "trilochan @gamil.com",
// ];

// function sendEmail(email) {
//   return new Promise((resolve, reject) => {
//     let time = Math.floor(Math.random() * 5);
//     setTimeout(() => {
//       let probability = Math.floor(Math.random() * 10);
//       if (probability <= 5) resolve("Email Sucessfully Sent");
//       else reject("Email not sent");
//     }, time * 1000);
//   });
// }
// sendEmail("achyuta@gmail.com")
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// async function sendEmails(userlist) {
//     let allresponses = userlist.map(function(email){
//        return sendEmail(email)
//        .then(function(data){
//         return data;
        
//        })
//        .catch(function(err){
//         return err;
        
//        }); 
//     })
//     let ans = await Promise.all(allresponses);

//     ans.forEach(function(status){
//         console.log(status);
        
//     })
// }
// sendEmails(users);

//debouncing and throttling
// function debounce(fn,delay){
//   let timer;
//   return function(){
//     clearTimeout(timer);
//     setTimeout(fn, delay);
//   }
// }

// document.querySelector("#search").addEventListener("input",
//   debounce(function(){
//    console.log("chala");
   
// },400)
// );

function throttling(fn,delay){
   let last = 0;
   return function(){
    const now = Date.now();
    if(now-last>=delay){
      last = now;
      fn();
    }
   }
}
window.addEventListener("mousemove",
  throttling(function(){
    console.log("Achyuta");
    
  },2000)
)