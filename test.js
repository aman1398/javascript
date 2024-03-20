"use strict" //run code as new version
const id=23232323
let namea="Aman"

//console.log(id);
//console.log(namea);
//console.table([id,namea]);

//console.log(typeof id);
//console.log(typeof 0);

// let code="1602a"
// console.log(typeof code)
// let codea=Number(code)
// console.log(typeof codea)
// console.log(codea);

/* to convert data types use data type name with first letter in uppercase*/
// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(3%2);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// const num= new Number(50087235613894719)
// console.log(num.toFixed(3))
// console.log(num.toExponential(3))
// console.log(num.toLocaleString("en-IN"))
// console.log(num.toPrecision(3))


// const min=10
// const max=20
// console.log(Math.floor(Math.random()*(max-min))+min);
// // console.log(Math.random()*(max-min));

let tarikh=new Date()
// console.log(tarikh.toDateString());
// console.log(tarikh.toISOString());
// console.log(tarikh.toJSON());
// console.log(tarikh.toLocaleDateString("en-IN"));
// console.log(tarikh.toLocaleTimeString());
// console.log(tarikh.toTimeString());
// console.log(tarikh);

// let newTarikh = new Date(2025, 3, 13)
// console.log(newTarikh.toDateString());



// ///// Arrays


const arry1 = [0,1,3,4,5, 6,7,8,9]
const arry2 = [0,1,3,4,5, 6,7,8,9]


// arry1.pop()
// console.log(arry1);
// shift and pop remove value from start and end respictively
// unshift and push add velue to start and end respictively

// console.log(arry1);
// const arry3 = arry1.slice(1,4)
// console.log(arry3);
// console.log(arry1);

// console.log(arry2);
// const arry4 = arry2.splice(1,4)
// console.log(arry4);
// console.log(arry2);

// console.log(arry1.concat(arry2));
// const arry3= [...arry1, ...arry2]
// console.log(arry3);

// const arry4=[1,2,4,[2,4,5,[4,5,6],4,5,[55,78]]]
// const arry5=arry4.flat(Infinity)
// console.log(arry5);

console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"))