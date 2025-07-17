// ITERABLE
/* Iterable is an object that can be iterated over ie) the elements can be accessed one by one
Iterable includes array,string,objects*/
let nums=[1,2,3,4,5]
for(let items of nums){ // for of loops
    console.log(items);
}
 //ITERATORS
 /* object that facilitates the actual iteration process.
    returned by Symbol.iterator() method.
    includes next() method
    next() method  includes two properties:
       1. value=>current value in the iteration
       2.  done=>returns boolean whether the iteration is completed or not.

 */
let number=[1,2,3,4,5];
const iterator=number[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//Implementation of internal working of Iterator
const myIterator={
    current:1,
    last:5,
    next(){
       if(this.current<=this.last){
        return {
            value:this.current++,
            done:false
        }
       }
       else{
        return {value:undefined,
        done:true
       }
    }
    }
}
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
