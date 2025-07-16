/*1. no need of braces and no need of return statement if the arrow function is of single line
2. allows single and multiline arrow functions
3.There is no this keyword in arrow function */
const ob={
    mname:'aaa',
    greet:function(){
        setTimeout(()=>{
        let mname='bbb'// this won't get printed intead of  this.mname.
        console.log("hello",this.mname)
        }
,1000);
        
    }
}
ob.greet();// hello aaa 

// diffrent behaviour of this keyword in arrow function
//4. Functions can be accessed by the arguments
function add(){
    console.log(arguments);//[Arguments] { '0': 1, '1': 2, '2': 3 }.
    // It automatically gets assigned to the arguments
}
add(1,2,3);

//5.There is no specific functions for arguments in arrow function but we can use
let addFunc=(...arguments)=>{
    console.log(arguments); //[ 122, 343, 433 ]
}
addFunc(122,343,433);

//6. We cannot use constructors in the arrow functions
