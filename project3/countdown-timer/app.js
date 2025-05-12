window.onload = () => {
  //This function runs when the whole page is fully loaded.It is used to load the content of the page.
  document.querySelector("#calculate").onclick = calculate;
  document.querySelector("#reset").onclick = reset;
}
function calculate() { 
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;  
    const stop = document.querySelector("#stop");

    const endTIme = new Date(date + " " + time);

    const interval = setInterval(() => calculateTime(endTIme), 1000);
    stop.addEventListener("click", () => { 
        clearInterval(interval);
    })
}
function calculateTime(endTime) {
    const currentTime = new Date();
    
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    if (endTime > currentTime) { 
        const timeleft = (endTime - currentTime) / 1000;
        console.log(timeleft);
        days.innerHTML = Math.floor(timeleft / (24 * 60 * 60));
        hours.innerHTML = Math.floor((timeleft / (60 * 60)) % 24);
        minutes.innerHTML = Math.floor((timeleft / 60) % 60);
        seconds.innerHTML = Math.floor(timeleft % 60);
    } else {
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
    }
}

function reset() { 
    document.querySelector("#days").innerText = 0;
    document.querySelector("#hours").innerText = 0;
    document.querySelector("#minutes").innerText = 0;
    document.querySelector("#seconds").innerText = 0;

}
