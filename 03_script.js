console.log("chaliye shuru krte hai");
let a = Math.random();
console.log(a);

//dateAndTime

let date = new Date();
console.log(date);

let date2 = new Date('jan 30-2005');
console.log(date2);

let date3 = new Date(2005 , 1, 30);
date3.setFullYear(2000);
console.log(date3);

// array creation 
let num=[1,3,4,5,6,7];
console.log(num[0]);
//insert at end
num.push(9);
console.log(num);
//insert at begin
num.unshift(12);
console.log(num);
//insert at middle

num.splice(2,0,'a','b','c','d');
console.log(num);

//seaching 
console.log(num.indexOf('a'));
console.log(num.includes('b'));

//array of objects
let courses=[
    {no:1 , naam:'ram'},
{no:2 , surname:'patel'}
];

console.log(courses.indexOf({
    no:1 , naam:'ram'
}));
console.log(courses.includes({
    no:1 , naam:'ram'
}));

//it returns -1 and false because both have different addresses (pass by reference)

//fxn calling 

// let crse = courses.find(function(courseeee){
//     return courseeee.naam==='ram';
// })
// console.log(crse);

//arrow function 
let crse = courses.find(courseeee=> courseeee.naam==='raj'
);
console.log(crse);//undefined raj is not present 

let numbers=[1,2,3,4,5,6,7,8];

numbers.pop()//end
console.log(numbers);
numbers.shift()//begin
console.log(numbers);
numbers.splice(4,1);//middle
console.log(numbers);

let numbers3=[10,20,30,40,50,60,70,8,0,90];
let num2=numbers3;
// numbers3=[]; //1 
// numbers3.length=0; //2
numbers3.splice(0,numbers3.length); //3

console.log(numbers3);
console.log(num2);


//combine
let x=[10,20,30];
let y=[40,50,30];
let z=x.concat(y);
console.log(z);

let siliice=z.slice(4,6);
console.log(siliice); 

//iterating
let arr=[10,20,30,40,50,60,70];
for(let value of arr){
    console.log(value);
}
// arr.forEach(function(numm){
//     console.log(numm);
// })
arr.forEach(numm=>console.log(numm));

//sorting 
let arrr=[70,20,10,80,40,30];
arrr.sort();
console.log(arrr);
arrr.reverse();
console.log(arrr);

//filter
let brr=[1,2,-2,-3];
// let filtered = brr.filter(function(value){
//     return value>=0;
// })
// console.log(filtered);
let filtered = brr.filter(value=>value<=0
);
console.log(filtered); 

//mapping 

let mapping = [7,8,9,10];
let items = mapping.map(function(value){
    return 'student_no' + value;
})
console.log(items);

//mapping with objects
// let nummm=[1,2,-2,-3];
// let filteredd = nummm.filter(value=>value>=0); //it will return 1 and 2
// let itm=filteredd.map(function(no){
//     return{value: no};
// })
// console.log(itm);

//chainning 
let nummm=[1,2,-2,-3];
let itm=nummm
            .filter(value=>value>=0)
             .map(function(no){
    return{value: no};
})
console.log(itm);