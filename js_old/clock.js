const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    // 한번에 해결하는 방법 
    // clock.innerText = date.toLocaleTimeString();
    // 24시간 형식
    // clock.innerText = date.toLocaleTimeString("en-US", { hour12: false });
}

getClock();
// 매 5초마다 sayHello 호출
setInterval(getClock, 1000);
