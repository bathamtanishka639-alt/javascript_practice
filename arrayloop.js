let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});
//for printing the array value in uppercase with index
let array=["pune","kolkata];

array.forEach((val,index)=>{
    console.log(val.toUpperCase(),index);
});
//for a given array of numbers print the square of each value using the for each loop
let arraynum=[1,2,5,8];
arraynum.forEach((val)=>{
    console.log("square of numbers",val*val);
});
//using map method in array
let nums=[1,2,3,4];
let newarr=nums.map((val)=>{
    return val*3;
});
console.log(newarr);
//using filter method in array
let arr=[1,2,4,6,8];
let newarr=arr.filter((val)=>{
    return val%2===0;
});
console.log(newarr);
//reduce method in array
let number=[1,2,3,4,5,6];
const output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);
