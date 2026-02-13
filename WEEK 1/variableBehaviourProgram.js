//Declaration
var a=10;
let b=20;
const c=30;
console.log("var a =",a);
console.log("let b =",b);
console.log("const c =",c);
//Reassignment
a=100; 
b=200; 
// c=300;   // TypeError Occurs 
console.log("\nAfter Reassignment:");
console.log("var a =",a);
console.log("let b =",b);
console.log("const c =",c);
//Observation: var and let allows reassignment.
//const does not allow reassignment.
//Redeclaration
var a=5000; 
// let b=6000;   //SyantaxError
// const c=7000; //SyantaxError
console.log("\nAfter Redeclaration:");
console.log("var a =",a);
console.log("let b =",b);
console.log("const c =",c);
//Observation: var allows redeclaration but let and const does not