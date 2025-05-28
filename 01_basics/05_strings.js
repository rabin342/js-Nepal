const name = "Rabin"
 const repoCount = 50
 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
 const gameName = new String ('rabin-rb')
//  console.log(gameName[3]);
//  console.log(gameName.__proto__);
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(3));
 console.log(gameName.indexOf('n'));
 
 const newString = gameName.substring(1,3) //ab 1-3 ko bich ko hunxa

//  console.log(newString);

 const anotherString = gameName.slice(-10, 2)
 console.log(anotherString);


 const newStringOne = "    RAbin    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim le space hatauxa agadi ko rabin ko jasto

 const url = "https://rabin.com/rabin%30regmi"
 console.log(url.replace('%30', '-'));
 console.log(url.includes('rabina')); //to check whether it is in url or not?true/false
 console.log(gameName.split('-')); //xutaune kaam garxa split le
 
 