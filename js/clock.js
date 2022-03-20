const clock = document.querySelector("#clock");


function getClock(){
    const data = new Date();
    const hour = String(data.getHours()).padStart(2, "0");
    const min = String(data.getMinutes()).padStart(2, "0");
    const sec = String(data.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
    
}

getClock(); // 시작하자마자 시간표시
setInterval(getClock, 1000); // 그 이후로는 1초마다 시간 받아와서 표시

//setInterval(sayHello, 5000); // 인자 두개: 실행할 함수, ms 반복 O
// setTimeout(sayHello, 5000); // 인자 두개: 실행할 함수, ms 반복 X