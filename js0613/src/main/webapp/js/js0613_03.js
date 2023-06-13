// 부모창 자식창 값 전달
var openWin; //전역변수

function popupSend(){
    alert("부모창으로 값을 전달합니다.");
    opener.document.getElementById("receive").value = document.getElementById("send").value;
}

function sendValue(){
    alert("자식창으로 값을 전달합니다.");
    // $("#reValue").val(); 
    // j쿼리 코드 (reValue값을 가져옴)
    // <input type="text" id="reValue" value="안녕하세요">
    // <button id="btn">클릭</button>
    // 안녕하세요 값을 갖고옴 (이 코드는 주로 사용자 입력을 가져오거나 특정 요소의 값을 변경할 때 사용됩니다.)
    
    // openWin 창에서 reValue 요소의 값으로 현재 창의 textInput 요소의 값이 설정되도록 하는 역할을 합니다.
    openWin.document.getElementById("reValue").value = document.getElementById("textInput").value;
}

function popupOpen(){
    openWin = window.open("popup.html","popupForm","width=400px, height=550px, resizable=no, scrollbars=no");
}