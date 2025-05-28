//Dates
 
let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


 let myCreatedDate = new Date("2002-01-8")
//  console.log(myCreatedDate.toDateString());
  let myTimeStamp = Date.now()

//   console.log(myTimeStamp);
//   console.log(Math.floor(Date.now()/1000));
  
  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth());
  console.log(newDate.getDay());
  
  
  newDate.toLocaleDateString('default', {
    weekday: "Long",
  })
  