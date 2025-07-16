//1.
function sayHello(Name='Alice'){
   console.log(`Hello,${Name}`);
}
sayHello();//Hello,Alice. It takes the default parameter if no parameter is given
sayHello('Sudharshana')//Hello,Sudharshana . It takes sudharshana as a parameter

//2.
function cal(x=1,y=2,z=3){
    console.log(x);
    console.log(y);
    console.log(z);
}
cal();//1 2 3 
cal(5,10,16);// 5 10 16
cal(undefined,7,undefined)// 1 7 3

//3.using json objects =>method 1
function calc({a=1,b=2,c=3}){
    console.log(`a=${a}`);
    console.log(`b=${b}`);
    console.log(`c=${c}`);
}
calc({});
calc({a:4,b:6,c:0});

//method 2
function calc1({a=1,b=2,c=3}={}){
    console.log(`a=${a}`);
    console.log(`b=${b}`);
    console.log(`c=${c}`);
}
calc1();