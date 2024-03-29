//ECMA= European Computer Manufacturers Association
// JavaScript was invented by Brendan Eich in 1995



window.onload=function(){
    let minutes=0;
    let seconds=0;
    let tens = 0;
    const appendMinutes=document.querySelector('#minutes');
    const appendTens=document.querySelector('#tens');
    const appendSeconds=document.querySelector('#seconds');
    const startbtn=document.querySelector('#start');
    const stopbtn=document.querySelector('#stop');
    const resetbtn=document.querySelector('#reset');
    let Interval;

    const startTimer=()=>{
        tens++ //tens+1
        if(tens<=9){
            appendTens.innerHTML='0' + tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
            seconds++
            appendSeconds.innerHTML='0'+ seconds;
            tens=0;
            appendTens.innerHTML='0'+0;
        }
        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML='0'+ minutes;
            seconds=0;
            appendSeconds.innerHTML='0'+0;

        }
    }
    startbtn.onclick=()=>{
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);

    }
    stopbtn.onclick=()=>{
        clearInterval(Interval)
    }



    resetbtn.onclick=()=>{
        clearInterval(Interval)
        tens='00'
        seconds='00'
        minutes='00'
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;
        appendMinutes.innerHTML=minutes;

    }




    }
