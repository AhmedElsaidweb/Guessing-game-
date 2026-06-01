let num2=parseInt((Math.random())*25) 
console.log(num2);

let score1=15;

function changecolor(button,value){
 if(value==num2){
button.style.backgroundColor='green'
 }
else{
    button.style.backgroundColor='red'
}


}

let again=5;
function choose(value){
    if(value==num2){
        
        score1+=5;
       
        document.getElementById('result').innerHTML="لقد فزت"
        document.getElementById('result').style.color="green"
        document.getElementById('div').innerHTML=value;
         document.getElementById('span').innerHTML=score1;
     document.getElementById('a').style.display='block'
        

    }

   else {  if(again==0){
        window.alert('للأسف لقد خسرت')
     document.getElementById('return').style.display='block';
        document.getElementById('main').style.display='none';
    }
          --again;
 document.getElementById('again').innerHTML=again;
         document.getElementById('result').style.color="red"
        document.getElementById('result').innerHTML="حاول مرة اخري "
        
    }
}
