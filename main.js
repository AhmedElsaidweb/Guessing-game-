let num2=parseInt((Math.random())*10) 
console.log(num2);


function choose(value){
    if(value==num2){
        document.getElementById('result').innerHTML="لقد فزت"
        document.getElementById('result').style.color="green"
        document.getElementById('div').innerHTML=value;
     
        

    }

   else {
        document.getElementById('result').innerHTML="حاول مرة اخري "
         document.getElementById('result').style.color="red"
    }
}

function remove(value){
    document.getElementById('iframe').style.display='block'; 
    document.getElementById('iframe').src=value;
    document.getElementById('header').style.display='none'
}
