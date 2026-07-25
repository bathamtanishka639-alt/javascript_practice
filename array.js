let marks=[96,95,97,98];
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}


console.log(marks);
console.log(marks.length);
console.log(typeof marks);//it came object so the type of array is object
let heroes=["bulk","shaktiman"];
console.log(heroes[0]);
console.log(heroes[3]);//to acess those who are not present in array the result came undefined
heroes[0]="ram";//to update the value of array
//looping over an array
//for agiven array with prices of 5 items [250,645,300,900,50] all items have an offer of 10% off on them .change the array to store final price after applying offer.

let items=[250,645,300,900,50];
let idx=0;
for(let val of items);{
    console.log(val);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(items[i]);
    idx++;
}
//array method
/*Push(): add to end
pop(): delete from end & return
toString():convert array to string
*/
let fooditems=["burger","pizza"];
fooditems.push("chips","paneer");
console.log(fooditems);
fooditems.pop();
console.log(fooditems);
console.log(fooditems.toString());
//concat():joins multiple array & return result
//shift():delete from start & return
let arr1=marks.concat(heroes);
console.log(arr1);



