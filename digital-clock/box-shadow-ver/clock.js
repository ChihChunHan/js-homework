const shadow = `1px 1px 6px rgb(0,0,0,0.1),
3px 3px 6px rgb(0,0,0,0.1),
5px 5px 8px 1px rgb(50,50,50,0.1),
7px 7px 8px 1px rgb(50,50,50,0.1),
9px 9px 10px 2px rgb(120,120,120,0.1),
11px 11px 10px 2px rgb(120,120,120,0.1),
13px 13px 12px 3px rgb(180,180,180,0.1),
15px 15px 12px 3px rgb(180,180,180,0.1)`

let timeArray = []
let prevTimeArray = []
let number=[
    [1,1,1,0,1,1,1], //0
    [0,0,0,0,0,1,1], //1
    [0,1,1,1,1,1,0], //2
    [0,0,1,1,1,1,1], //3
    [1,0,0,1,0,1,1], //4
    [1,0,1,1,1,0,1], //5
    [1,1,1,1,1,0,1], //6
    [0,0,1,0,0,1,1], //7
    [1,1,1,1,1,1,1], //8
    [1,0,1,1,1,1,1]  //9
];


function getTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let lastTime = time-1000

    timeArray = [
        Math.floor(hour / 10),
        hour % 10,
        Math.floor(min / 10),
        min % 10,
        Math.floor(sec / 10),sec % 10
    ]

    prevTimeArray = [
        Math.floor((lastTime/1000/60/60/10%10)),
        Math.floor((lastTime/1000/60/60%10)),
        Math.floor((lastTime/1000/60/10%6)),
        Math.floor((lastTime/1000/60%10)),
        Math.floor((lastTime/10000%6)),
        Math.floor((lastTime/1000)%10),
    ]

}

let num = document.getElementsByClassName("number")

function start () {
    for (let i = 0; i < 6; i++) {
    let bar = num[i].getElementsByClassName("bar");
        for(let j=0; j<7; j++){
            if(number[timeArray[i]][j]==1){
            bar[j].style.boxShadow = shadow;
            bar[j].style.zIndex=1;
            }
        }
    }
}


//進位動畫

function show(set) {
    let bar = num[set].getElementsByClassName("bar");
    // let prevTime
    // if(set==3||set==5) prevTime = (timeArray[set]===0)?9:(timeArray[set]-1)
    // if(set==2||set==4) prevTime = (timeArray[set]===0)?5:(timeArray[set]-1)

    for(let j=0; j<7; j++){
        bar[j].classList.remove("fade");
        bar[j].classList.remove("animate");
        if(number[timeArray[set]][j]>number[prevTimeArray[set]][j]){
            bar[j].classList.add("animate");
            bar[j].style.boxShadow = shadow
            bar[j].style.zIndex=1;
        }
        if(number[timeArray[set]][j]<number[prevTimeArray[set]][j]){
            bar[j].classList.add("fade");
            bar[j].style.boxShadow=`none`;
            setTimeout(()=>{
                bar[j].style.zIndex=0;
            },500)
        }
    }
}

getTime()
start()

setInterval(() => {
    getTime()
    show(5);
    show(4);
    show(3);
    show(2);
    show(1);
    show(0);
}, 1000);

// setTimeout(()=>{
//     show(4)
//     setInterval(() => {
//         show(4)
//     }, 1000*10);
// },(10-timeArray[5])*1000)

//min
// setTimeout(()=>{
//     show(3)
//     setInterval(() => {
//         show(3)
//     }, 1000*60);
// },(60-((timeArray[4]*10)+timeArray[5]))*1000)

// setTimeout(()=>{
//     show(2)
//     setInterval(() => {
//         show(2)
//     }, 1000*60*10);
// },(10-timeArray[3])*1000*60)

// //hour
// setTimeout(()=>{
//     show(1)
//     setInterval(() => {
//         show(1)
//     }, 1000*60*60);
// },(60-((timeArray[2]*10)+timeArray[3]))*1000*60)

// setTimeout(()=>{
//     show(0)
//     setInterval(() => {
//         show(0)
//     }, 1000*60*60*10);
// },(10-timeArray[1])*1000*60*60)