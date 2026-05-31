let num2=parseInt((Math.random())*10) 
console.log(num2);

let score1=0;




function choose(value){
    if(value==num2){
        
        score1+=5;
        document.getElementById('p').style.display='block';
        document.getElementById('result').innerHTML="لقد فزت"
        document.getElementById('result').style.color="green"
        document.getElementById('div').innerHTML=value;
         document.getElementById('span').innerHTML=score1;
    
        

    }

   else {
          
         document.getElementById('result').style.color="red"
        document.getElementById('result').innerHTML="حاول مرة اخري "
        
    }
}

function remove(value){
    document.getElementById('iframe').style.display='block'; 
    document.getElementById('iframe').src=value;
    document.getElementById('header').style.display='none'
}
