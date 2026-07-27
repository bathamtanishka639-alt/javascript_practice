function myfunction(){
    console.log("welocome to India");
    console.log("We are learning javascript");
}
myfunction();
//parameter and arguement
function my(msg){
    //here msg is parameter because it define in function definition
    console.log(msg);

}
my("i love");
//i love is an arguement
//sum of a number
function add( a, b){
    console.log("sum of two number",a+b);

}
add(4,5);
add(10,9);
// arrow function
function mul(a,b){
    return a*b;
}
const arrowmul=(a,b)=>{
    console.log(a*b);
}
arrowmul(9,5);
//create a function that take a string as a arguement and returnthe number of vowel in string
function countvowel(str){
    let count=0;
    for(let char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}
countvowel("hello");


