//ARRAY DESTRUCTING
// Unpack values from the arrays and assigns them to variables based on their position

let fruits=['Apple','Banana','Guava'];
let[first,second,third]=fruits; // Array Destructing
console.log(first);//Apple
console.log(second);// Banana
console.log(third); // Guava

//skipping the first and second and printing only the third fruit name
 let[,,last]=fruits;
 console.log(last); // Guava

// using rest operator
 let[primary,...rest]=fruits;
 console.log(primary);//Apple
 console.log(rest);// Banana Guava

 // OBJECT DESTRUCTING
 // allows to unpack the properties from the objects and assign them to variables based on property name
 let employee={name:'Alice',age:30,job:'Software Engineer'};
 let {name,age,job}=employee;
 console.log(name);//Alice
 console.log(age);//30
 console.log(job);//Software Engineer



