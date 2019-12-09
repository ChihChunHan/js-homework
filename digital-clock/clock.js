let hourT, hourX, minT, minX, secT, secX

function getTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hourT = Math.floor(hour / 10);
    hourX = hour % 10;
    minT = Math.floor(min / 10);
    minX = min % 10;
    secT = Math.floor(sec / 10);
    secX = sec % 10;

    console.log(hourT, hourX, minT, minX, secT, secX);
}

let number=[];
number[0]=[1,0,1,1,1,1,1],number[1]=[0,0,0,0,0,1,1],number[2]=[1,1,1,0,1,1,0],number[3]=[1,1,1,0,0,1,1];number[4]=[0,1,0,1,0,1,1],number[5]=[1,1,1,1,0,0,1],number[6]=[1,1,1,1,1,0,1],number[7]=[1,0,0,0,0,1,1],number[8]=[1,1,1,1,1,1,1],number[9]=[1,1,1,1,0,1,1];


let num = document.getElementsByClassName("number")

function showon() {
    
    for (let i = 0; i < 6; i++) {
        let bar = num[i].getElementsByClassName("bar");
        for (let j = 0; j < 7; j++) {
            bar[j].classList.add("animate")
        }
    }
    for (let i = 0; i < 7; i++) {
        if(number[secX][i]==1){
        num[5].getElementsByClassName("bar")[i].classList.add("animateoff")
        }
    }

}

function numAnimate(id, timeNum) {
    
    let bar = num[id].getElementsByClassName("bar");
    let nextTime = (timeNum+1)%10

    for (let i = 0; i < 7; i++) {
        if(number[timeNum][i]+number[nextTime][i]===1){
            bar[i].classList.remove("animateoff")
        }
        else{
            bar[i].classList.add("animateoff")
        }
    }

    

// for (let i = 0; i < num.length; i++) {
//     bar[i].classList.remove("animate");
// }
// switch (number) {
//     case 0:
//     for (let j = 0; j < 7; j++) {
//         if (j == 1) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 1:
//     for (let j = 0; j < 7; j++) {
//         if (j < 5) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 2:
//     for (let j = 0; j < 7; j++) {
//         if (j == 3 || j == 6) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 3:
//     for (let j = 0; j < 7; j++) {
//         if (j == 3 || j == 4) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 4:
//     for (let j = 0; j < 7; j++) {
//         if (j == 0 || j == 2 || j == 4) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 5:
//     for (let j = 0; j < 7; j++) {
//         if (j == 4 || j == 5) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 6:
//     for (let j = 0; j < 7; j++) {
//         if (j == 5) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 7:
//     for (let j = 0; j < 7; j++) {
//         if (j != 0 && j < 5) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 8:
//     for (let j = 0; j < 7; j++) {
//         bar[j].classList.add("animate");
//     }
//     break;
//     case 9:
//     for (let j = 0; j < 7; j++) {
//         if (j == 4) continue;
//         bar[j].classList.add("animate");
//     }
//     break;
// }
}


setInterval(()=>{
    getTime()
},1000)

showon()

// setTimeout(()=>{
//     setInterval(()=>{
//         numAnimate(5, secX);
//     },1000)
// },1000)

