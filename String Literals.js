//string 
let a="hello";
console.log(a);
//String literals
let b=`hii`;
/*1. Multi line strings:
      Multi line strings are allowed only in the string literals but not in the string.*/

  // 2. Interpolation Strings:

  let personName="Sudharshana ";
  let age=25;
  let output=`Hi ${personName}, age is ${age}`;
  console.log(output);

  //3.Tagged Templates
   let myname='Sudharshana';
  let city='Coimbatore';
  let ages=23;
  function myString(strings,...values){
    console.log(strings);
    console.log(values);
  }
 
  //let outputString=`hi I am ${myname}, I am from ${city},My age is ${ages}`
//   console.log(outputString);
  myString`hi I am ${myname}, I am from ${city},My age is ${ages}`; // [hi i am,I am from,My age is ] are the static part of the strings
  //[Sudharshana,Coimbatore,23] are the dynamic part of the strings

 



 