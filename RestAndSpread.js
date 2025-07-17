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
const n =[1,2,3];
console.log(sum(...n));//6
 
// type-4
let person={name:'alice',job:'software Engineer'};
let newn ={age:34,degree:'B.E'};
let newObj={...person,...newn};
console.log(newObj);//{ name: 'alice', job: 'software Engineer', age: 34, degree: 'B.E' }

//REST- simplifies the array manipulation by enabling the extraction of elements into the new array
//Type-1
function add(first,...number){
    console.log(first);//2
    console.log(number);//[ 342, 32, 0 ]
}
add(2,342,32,0);

//Type-2
const persons={name:'Alice',age:50,job:'developer'};
const {name,...details}=persons;
console.log(name);//Alice
console.log(details);//{ age: 50, job: 'developer'}



//Shallow Copy
// creates the new copy and copies the reference of the original object's element,rather than creating the new copies of the elements by themselves
// copying
let original=[{name:'aaa'}];
let copy=[...original];
copy[0].name='bbb';
console.log(original); //[ { name: 'bbb' } ]

//overwrites the name in the obj3
 let obj3={name:'aaa'};
 let obj4={name:'bbb',age:50};
 let merged={...obj3,...obj4};
 console.log(merged);//{ name: 'bbb', age: 50 }

// using both the spread and rest operators
 let number=[1,2,3,4,5];
 let[first,...values]=number; // rest
 let newArray=[...values,8,9]; // spread
 console.log(newArray);//[ 2, 3, 4, 5, 8, 9 ]
