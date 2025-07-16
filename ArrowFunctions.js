//concise syntax for writing a function expression
// function:
function calc(a,b){
    let total=a+b;
    let avg=total/2;
    console.log(avg);
}
let a=10,b=23;
calc(a,b);

//call back functions
//Function passed as an argument to another function,gets executed after the completion of the outer function
function add(x,y){
    return x+y;
}

function calc1(calcTotal,a1,b1){
    let total1=calcTotal(a1,b1);
    let avg1=total1/2;
    console.log(avg1);

}
let a1=10,b1=20;
calc1(add,a1,b1);

// Single line arrow Function

const add2=(x,y)=>x+y;
function calc1(calcTotal,a1,b1){
    let total1=calcTotal(a1,b1);
    let avg1=total1/2;
    console.log(avg1);

}
let a2=10,b2=20;
calc1(add2,a2,b2);

// Multiline arrow Function

const add1=(x,y)=>{
    let total=x+y;
    return total;
};
function calc1(calcTotal,a1,b1){
    let total1=calcTotal(a1,b1);
    let avg1=total1/2;
    console.log(avg1);

}
let a3=10,b3=20;
calc1(add1,a3,b3);

// Another method-1
 function calc2(calcTotal,a4,b4){
    let total=calcTotal(a4,b4);
    let average=total/2;
    console.log(average);
 }
 let a4=32,b4=23;
 calc2((x,y)=>x+y,a4,b4);


 //Another method -2
 function calc3(calcTotal,a5,b5){
    let total=calcTotal(a5,b5);
    let average =total/2;
    console.log(average);
 }
 let a5=90,b5=30;
 calc3((a,b)=>{
    let total=a+b;
    return total;
 },a5,b5);