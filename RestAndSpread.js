// Both  Rest and spread operators are represented by ...(variable name)
// Rest- collect multiple elements or arguments in the single array
// Spread- expands the iterables such as arrays,strings,object literals  to its individual elements
// 1.Spread:
// Type-1 =>using Array Literals
const a1=[1,2];
const a2=[...a1,3,4];
console.log(a2); //[ 1, 2, 3, 4 ]

//Type-2 =>using object literals
const obj1={a:1,b:2};
const obj2={...obj1,c:3,d:6};
console.log(obj2); // { a: 1, b: 2, c: 3, d: 6 }

//Type-3 => using function calls
function sum(a,b,c){
    return a+b+c;
}
const number =[1,2,3];
console.log(sum(...number));
 
// type-4
let person={name:'alice',job:'software Engineer'};
let newn ={age:34,degree:'B.E'};
let newObj={...person,...newn};
console.log(newObj);//{ name: 'alice', job: 'software Engineer', age: 34, degree: 'B.E' }

//REST
//Type-1
function add(first,...number){
    console.log(first);//2
    console.log(number);//[ 342, 32, 0 ]
}
add(2,342,32,0);

//Type-2
const persons={name:'aaa',age:50,job:'developer'};
const {name,...details}=persons;
console.log(name);//aaa
console.log(details);//{ age: 50, job: 'developer'}

// using both rest and spread
 function add(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

 }
 let values=[23,4,21,14,12];
 add(...values); // spread
 function calc(...values){ // rest

 }
 calc(23,4,1,2,34);


