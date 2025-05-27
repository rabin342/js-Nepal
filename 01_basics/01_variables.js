const accountId = 12362
let accountEmail = "rabinregmi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed
accountEmail = "rabin@gmail.com"
accountPassword = "12313"
accountCity = "jhapa"
let accountState;

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);

