// var query = document.querySelector('#box');
// document.addEventListener('click', function () {
//     query.style.bgroundColor = "red"
// })




// var b=document.querySelector("button")
// var butt=document.querySelector('#butt')
// var on=1;
// b.addEventListener('click',function(){
//      if(on==1){

//           butt.style.backgroundColor="yellow"
//           on=2;
//      }
//      else{
//           butt.style.backgroundColor="transparent"
//           on=1;
//           }
// })


var b=document.querySelector('#butt')
var c=document.querySelector('button')
var off=0;
window.addEventListener("click",function(){
     if (off==0) {
          
          b.style.backgroundColor="red"
          off=1;
     }
     else{
          b.style.backgroundColor="transparent";
          off=0;
     }
})



