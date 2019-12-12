// let sec
// function getTime() {
//     let time = new Date()
//     sec = time.getSeconds()
// }

function jump(sec) {
    let ball = document.getElementsByClassName('ball')
    ball[sec].classList.add("animate")
    ball[sec].style.backgoundColor='#fff'
    setTimeout(() => {
        ball[sec].classList.remove("animate")
    }, 2000);
}

function hourLight(hour) {
    let loacation = (hour==0)?11:(hour-1)
    let hourB = document.getElementsByClassName('hourblock');
    hourB[loacation].classList.add("hour-light");

}

function minLight(min) {
    let loacation = (min==0)?59:(min-1)
    let minB = document.getElementsByClassName('minblock');
    minB[loacation].classList.add("min-light");
}

setInterval(() => {
    getTime();
    jump(sec);
    // console.log(hour)
    minLight(min)
    hourLight(hour);
}, 1000);
