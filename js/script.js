document.getElementById('digital').style.transform ='translate(-50%,-50%) rotateY(-180deg)';
let analog = true
let deg = 1;
function toggleClock(){

    document.getElementById('analog').style.transform = `rotateY(${180*deg}deg)`
    document.getElementById('digital').style.transform =`translate(-50%,-50%) rotateY(${180*(deg-1)}deg)`;
    deg+=1
}

setInterval(function(){
    let d = new Date()
    let x;
    if(d.getHours()>12){
        x=' PM'
    }else{
        x=' AM'
    }
    document.getElementById('datediv').innerText = d.toLocaleString('en-us', { month: 'short' }) +" "+ d.getDate();
    document.getElementById('hour').style.transform = ` translate(-50%,-100%) rotate(${(d.getHours()%12)*30 + d.getMinutes()*.5}deg)`
    document.getElementById('min').style.transform = ` translate(-50%,-100%) rotate(${(d.getMinutes())*6}deg)`
    document.getElementById('sec').style.transform = ` translate(-50%,-100%) rotate(${(d.getSeconds())*6}deg)`
    document.getElementById('time').innerHTML = `<div>${d.toLocaleTimeString()}</div><div>${d.toLocaleDateString('en-us',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>`
},500)