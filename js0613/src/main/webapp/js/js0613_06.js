// 시간 가져오기

var a = 0; //변수
let aaa = 0; //변수
const bbb = 0; // 상수

var interval;

function start() {

    interval = setInterval(function () { //시간이 실시간으로 바뀌는

        var today = new Date(); // 변수
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        var seconds2 = seconds;
        var millisecondes = today.getMilliseconds();
        if (seconds < 10) seconds2 = "0" + seconds;
        else seconds2 = seconds;
        document.getElementById("h01").innerText = hours + ":" + minutes + ":" + seconds2;
    }, 1000);

}

function stop(){
    clearInterval(interval);
}
