/*Generators 
pauses and resume  during the execution.
returns the iterator object when the generator is called.
Generators are also a iterators
represented by function*
*/

//creating a normal function
function fun(){
    let i=0;
    while(i<4){
        console.log(i);
        i++;
    }
}
fun();

//Generator function 
function* Genfun(){
    let i=0;
    while(i<4){
        i++;
        yield i; // yield is used to pause the execution and returns the value
    }
}
Genfun(); // while calling nothing gets printed as it needs to print the iterators
 let obj=Genfun();
 console.log(obj.next());
 console.log(obj.next());
 console.log(obj.next());
 console.log(obj.next());
console.log(obj.next());


//Iterating an array with generator function
 function* Arr(nums){
    for(let i=0;i<nums.length;i++){
        yield arr[i];
    }
    const gen=nums[1,2,3];
    console.log(gen.next());
     console.log(gen.next());
      console.log(gen.next());
       console.log(gen.next());
 }

 /*use cases:
     used in complex customised iterators and also in asynchronous funciton*/