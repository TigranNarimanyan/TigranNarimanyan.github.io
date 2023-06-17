let square = document.getElementById('square');
let i = 0;
square.onclick=function(){
   i++
   if(i%2!==0){
    square.style.backgroundColor="blue"
   }else if(i==2){
    square.style.backgroundColor="red"
   }else{
    square.style.opacity='0'
   }
}