/*Symbols
  primitive unique immutable datatype
  Symbols are used as a key for the property of an object
*/
 const h1=Symbol('hi');
 const h2=Symbol('hi');
 //both are different because symbols are unique 
 console.log(h1==h2);//false. 

 const a1='hi';
 const a2='hi';
 console.log(a1==a2);//true

 const hide=Symbol('hide');
 let obj={
    name:'Alice',
    hide1:'bob',
    [hide]:'somevalue'
 }

 obj.hide='ccc';
 console.log(Object.keys(obj));//[ 'name', 'hide1' ]
 console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(hide) ]

 // Inorder to avoid the overwriting , we can use Symbols
 let user={name:'Alice'};
 function addStatus(user){
     let status=Symbol('status');
     user[status]='Active';
 }
 addStatus(user);

 function proStatus(user){
    let status=Symbol('status');
    user[status]='InActive';
 }
 proStatus(user);
 console.log(user); //{
                   //   name: 'Alice',
                  //   [Symbol(status)]: 'Active',
                 //   [Symbol(status)]: 'InActive'
                // }





