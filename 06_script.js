// document.addEventListener('click', function(){
//     console.log('i clicked')})
    
// function color() {
// document.body.style.background = 'green'; // Changes the background of the whole page
//     }

// document.addEventListener('click', color); // adder

// document.removeEventListener('click',color); //remove 

// //event object 
// const content = document.querySelector('#hy');
// content.addEventListener('click', function(ram){
//     console.log(ram);
// })

// //default action 
// let links=document.querySelectorAll('a');
// let thirdLink=links[2];

// thirdLink.addEventListener('click',function(patel){
//     patel.preventDefault();
//     console.log('maja aaya aacha laga');//es line k o/p k liye console open kro 
    

// });

// avoid too many elements 

// let myDiv = document.createElement('div');
// function paraStatus(event){
//     console.log('para' + event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus); //optimize

// for(let i =1; i<=100; i++){
//     let newElement =document.createElement('p');
//     newElement.textContent='this is a para through js ' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kia hai ' + event.target.textContent);

    }
    
})

