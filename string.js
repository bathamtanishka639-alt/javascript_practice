let str="apna";
console.log(str.length);
console.log(str[3]);
console.log(str.toUpperCase());
let str1="APNA";
console.log(str1.toLowerCase());
let str3 =" apna ";
console.log(str3.trim());
//template literals
let sentence=`This is a template literal`;
console.log(sentence);
console.log(typeof sentence);
//why we use template literals not string
let object={
    item:9,
    price:10,

}
//print the output using string
console.log("the cost of",object.item,"and the price is",object.price);
//print the output using template literals
let output=`the cost of ${object.item} is ${object.price}`;
console.log(output);