let timerDisplay=document.getElementById('timerDisplay');
let StrBt=document.getElementById('StrBtn');
let StpBt=document.getElementById('StpBtn');
let ResBt=document.getElementById('ResBtn');

let timer;
let count=0;

StrBt.addEventListener('click',()=>{
    timer=setInterval(()=>{
        count++;
        timerDisplay.textContent=count;
    },1000);
});
StpBt.addEventListener('click',()=>{
    clearInterval(timer);
});
ResBt.addEventListener('click',()=>{
    clearInterval(timer);
    count=0;
    timerDisplay.textContent=count;
});