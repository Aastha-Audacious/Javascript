// // 23 feb ------ Variable


// // let a ="aastha";
// // let i= 4;
// // if(i>3){
// //     let a= "panwar";
// // }
// // console.log(a);




// // 24 feb ------ String ---------------------------


// // const abc = "aastha"
// // const sur ="panwar"
// // abc.replace
// // const newstr = abc.concat(" ",sur)
// // console.log(newstr)

// // SPLICE IN ARRAY

// // const arr =[1, 2, 3, 4, 5]
// // arr.splice(2, 1, 9)
// // console.log(arr)

// // const d = new Date()
// // console.log(d)


// // let b = "hello"
// // if(b=="Hello")
// // console.log("t")
// // else
// // console.log("f")      //output: f


// let a;
// console.log(a&&a)     //output: undefined


// string operations
// let str = "Aastha";

// console.log(str.charAt(4)); /*o*/
// console.log(str.concat("", "world")); /*hello world*/
// console.log(str.startsWith("H")); /*true*/
// console.log(str.endsWith("o")); /*true */
// console.log(str.includes("x")); /* false*/
// console.log(str.indexOf("l")); /*2*/
// console.log(str.lastIndexOf("l")); /*3*/
// console.log(str.match(/[A-Z]/g)); /*[ 'H' ]*/
// console.log(str.padStart(6, "?")); /*?Hello*/
// console.log(str.padEnd(6, "?")); /*Hello?*/
// console.log(str.repeat(3)); /*hellohellohello*/
// console.log(str.replace("llo", "y")); /*Hey*/
// console.log(str.search("e")); /*1*/
// console.log(str.slice(1, 3)); /*el*/
// console.log(str.split("")); /*["H","e","l","l","o"] */
// console.log(str.substring(2, 4)); /*ll*/
// console.log(str.toLowerCase()); /*hello*/
// console.log(str.toUpperCase()); /*HELLO*/
// console.log("   Hello   ".trim()); /*hello*/
// console.log("      Hello ".trimStart()); /*      Hello */
// console.log(" Hello       ".trimEnd()); /* Hello     */


// 1 March - Asynchronous JavaScript 
// const fun2 =()=>{
//     setTimeout(()=>{
//         console.log("fun1")
//     },3000);
// }

// const fun1 =()=>{
//     console.log("fun2")
//     fun2();
//         console.log("fun end")
// }
// fun1();



// Async-Await
const newf =()=>{
    // let b= "Hello India"
    console.log("normal function")
}
const getData = async()=>{
    let a= await "Hello World"
    console.log(a)
}

const setData = async()=>{
    let b= await "Hello India"
    console.log(b)
}
getData();
setData();
console.log(2)
console.log(1)
newf();


// Task: Learn Micro task queue and Macro task queue

const str = "aastha pan";
console.log(...str) 