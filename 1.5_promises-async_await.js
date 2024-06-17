
// syntaitacal sugar    -_-



// difference in all 3 [1.5.png]



//=============================================================//

// function ravo(){

//     let p= new Promise(function(resolve){      // dummy async funtrion that almost immidiatly rexsolves
//         resolve("hope");
//     });
//     return p

// }

// ravo().then(function(data){             // actually logging the data what function above resolves     console.log(data);
//   console.log(data) ;
//}) 

//=============================================================//

// let p = new Promise(function(rrrr){

//     rrrr("has")

// })
// p.then(()=>{                            //arrow function // ()=>   ---   function()
//     console.log(p);
// }) 

// // .then is called when ever the async funct5ion is resolves// rrrr = resolve

//=============================================================//

// function ravo(){

//     let p= new Promise(function(resolve){      
//        setTimeout(resolve,2000)
//     });
//     return p

// }

// ravo().then(function(){             
//   console.log("arrived") ;
// }) 

//=============================================================//
///////////////////////async await///////////////////////////////
//=============================================================//

// function ravo(){

//     let p= new Promise(function(resolve){     
//            // resolve("hope");

//             setTimeout(()=>{resolve("hholla")},2000)
//     });
//     return p

// }

// async function main(){
//     let data = await ravo();     // thread will wait here
//     console.log("after await");  // it will run with data
//     console.log(data);
// }
// //no callbacks , no .then yeeee!! easy

// main();

// console.log("after main"); // this will call imideatly

//=============================================================//
