// console.log('hello jee..chaliye shuru krte hai');

run();
function run(){
   console.log("running");
}

// named function assignment
let stand=  function walk(){
   console.log("walkingg");
}
stand(); //stand cannot be runned above fxn declarisation beacause it is a function assignment not function 

//anonymous fxn assignment 
let stand2=  function() {
   console.log("walking stand2");
}
stand2();

let jump=stand;
jump();

//dynamic function of sum 
function sum(a,b){
   // console.log(arguments);// this arguments are not arrary its just an mapping of objects
   // return a+b;

   let total=0;
   for(let value of arguments)
       total=total+value;
   return total;
}
//  console.log(sum(1,2));
//  console.log(sum(1));
//  console.log(sum(1));
//  console.log(sum(1,2,3,3,4,5,4));
let ans = sum(1,2,3,4,5,6,7);
console.log(ans);

//rest operator
function sum1(num,val,key,...args){
   //rest parameter is the last paramater always...starting 3 values will assign to num val key 
   console.log(args);
}
sum1(1,3,4,5,6,7,8);

function interest(p,r=5,y=10){
   return p*r*y/100;
}
console.log(interest(1000,10));

//getter setter 
let person = {
   fname :'Ram',
   lname : 'patel',

   get fullName(){ //get is getter
       return `${person.fname} ${person.lname}`;
   },
   set fullName(value){ //set is setter 
      if(typeof value !== String){
         throw new Error("you have not sent a string ");
      }
   let parts =value.split (' ');
   this.fname =parts[0];
   this.lname=parts[1];
   }
};
// person.fullName ='sam pal';// the change is only made by setter if i comment above 4 line of setter it will not update the name  
// console.log(person.fullName); 

try{
   person.fullName=true;
}
catch (e) {
   alert(e);
}
console.log(person.fullName); 
