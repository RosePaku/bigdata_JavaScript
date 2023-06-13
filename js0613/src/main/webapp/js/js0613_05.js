// setInterval 함수를 통해 일정한 시간 간격으로 
// 숫자를 출력하는 기능을 구현합니다.

// setInterval
var count=0;
var interval;

//setInterval 추가
function setIn(){
    var htmlData = "";
    htmlData += "<tr>";
    htmlData += "<td>";
    htmlData += "1";
    htmlData += "</td>";
    htmlData += "</tr>";

    // var data = document.getElementById("t01").innerHTML = htmlData;
    // var data = document.getElementById("t01").innerText = htmlData;
    $("#t01").append(htmlData);

    interval = setInterval(function(){
        count += 1;
        console.log("숫자 : ",count);
    },1000) // 1/1000초 1000=1초
}

// setInterval 삭제
// function setOut().png 참고

function setOut(){
    console.log("멈춤");
    clearInterval(interval);
}