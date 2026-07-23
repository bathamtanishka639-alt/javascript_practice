for(let i=0;i<7;i++){
    console.log("i hate the world");
}
console.log("loop has ended");
//calculate sum of n number
let sum=0;
let n=prompt("enter a number");
for(let i=0;i<=n;i++){
    sum+=i;
}
console.log(sum);
//while loop
let j=1;
while(j<=5){
    console.log("apna");
    i++;
}
//do while
let i=2;
do{
    console.log("apnam");
    i++;
}while(i>7);
//for-ofloop work on every individual element of string and arrays
let str="apna";
for(let i of str){
    console.log(i);
}
//to find the size of string
let str="java";
let size=0;
for(let i of str){
    size++;
}
console.log(size);
//for-in loop work on object return key of object
/*for(let key in objvar){
    do some work
}*/
let student ={
    name:"rahul",
    roll_no:3,
    class:cse4,
};
for(let i in student){
    console.log(i);
}
//print all the even number from 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
} 
// create a game where you start with any random game number .ask the user to keep guessing the game number until the user enters correct value.
let a=9;
let user=prompt("enter a number");
while(a!=user){
    user=prompt("wrong number guess again");

}
console.log("win");