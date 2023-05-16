/* JavaScript let */
var x = 10; //  x is 10
{
  let x = 2;  //  x is 2
}
console.log(x);  //  x is 10 


/* JavaScript const */
var x = 10; //  x is 10
{
  const x = 2;  //  x is 2
}
console.log(x);  //  x is 10 


/* Arrow Functions */
const abc = (x, y) => x * y;
console.log(abc(5,5));


// Spread and rest operator
const arr = [1,2,3,4,5]
const add = (a,b,...rest)=>{
    return a+b+rest
};
console.log(add(...arr));  // 33, 4, 5


// *********************************8
const arr2 = {
    fn: "aastha",
    ln: "panwar"
};
const arr1 = {
    fn: "naman",
    // ...arr2, 
    ln: "panwar1",
    city:"indore",
    ...arr2   //spread operator
};
console.log(arr1);


