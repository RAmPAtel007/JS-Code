
//object
let rectangle = {
    length:1,
    breadth:2,

    draw: function(){ //behaviour 
        console.log('drawing rectangle');
    }
}; 

// console.log(rectangle);
// rectangle.draw()


//factory function
function createRectangle(len,bre){

    let rectangle = {
        length:len,  //or len,

        breadth:bre,// or bre,
    
        // draw: function(){
        //     console.log('drawing rectangle');
        // }

        //or
        draw(){
            console.log('drawing rectangle');
        }
    }; 
    return rectangle;
}
let obj1= createRectangle(5,4);
let obj2=createRectangle(60,70);
let obj3=createRectangle(45,56);
console.log(obj1);
console.log(obj2);
console.log(obj3);
obj3.draw();


//constructor function
function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing rectangleeee');
    } 
}
//object creation using constructor function 
let rectangleObject = new Rectangle(50,60);
console.log(rectangleObject);
 
//dynamic nature of object 
rectangleObject.color="blue";
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);


console.log(rectangleObject.constructor); //o/p function rectangle
console.log(Rectangle.constructor); //  for Rectangle the constructor is function keyword .


//for in loop
let rectangle1={
    length:10,
    breadth:20,
}
// for(let key in rectangle1 ){
//     console.log(key, rectangle1[key]);
// }

//for of
for(let key of Object.entries(rectangle1)){
    console.log(key);
}

if('color' in rectangle1){
    console.log('present');
}
else{
    console.log('absent');
}

  //object cloning 
// 1
  let src={
    a:10,
    b:20,
    c:30
  };
  let dest = {};
  for(let key in src ){
    dest[key]=src[key];
  }
  console.log(dest);
//2
let src1={
    a:100,
    b:200,
    c:300
  };
  let dest1 =Object.assign({}, src1);
  console.log(dest1);
//3 
let src3={
    a:1000,
    b:2000,
    c:3000
  };
  let dest2={...src3};
  console.log(dest2);
