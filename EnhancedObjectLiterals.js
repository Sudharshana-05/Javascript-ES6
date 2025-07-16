/*group variables from global scope and form them into javascript objects*/

//1.Shorthand Property name
let place="Coimbatore";
let temperature=25;
let a={place,temperature};
console.log(a);// It automatically gets printed the 'place' and 'temperature' with the 'coimbatore' and'25'

//2.shorthand function name:
// I can define my function inside the let keyword itself.
let b={place,temperature,greet(){
    console.log("hello");
}
}
b.greet();

//3.Computed property name
let propName='Name';
let c={[propName]:'aaa'};
console.log(c);

//4.super 
 // this is used in inheritance
 //it is mainly used to call the parent class
 const parent={
    greet()
    {
        console.log("I am parent class");
    }
 };
 const child={
    
    greet(){
        super.greet();
       console.log("I am child class");
    }
    // super.greet();
 };
 Object.setPrototypeOf(child,parent);
 child.greet();
