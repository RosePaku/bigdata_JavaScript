/**!SECTION
 * 게시판 for문
 */
var  htmlData ="";
// dataArr : 10
var dataArr = ["게시판이 오픈되었습니다.","홈페이지 공지","새로운 이벤트 시작합니다.",
"이벤트 다시 시작합니다.","업데이트 공지","신입사원 모집","신제품 런칭이벤트",
"주식 상장 안내","이벤트 재공지","당첨자 발표"]

htmlData += "<h2>자유게시판</h2>";
htmlData += "<table><colgroup><col width='10%'><col width='50%'><col width='0%'><col width='10%'><col width='10%'></colgroup>";
htmlData += "<tr><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th><th>조회수</th></tr>";



for(var i=0; i<10; i++){
    htmlData += "<tr>"
    htmlData += "<td>"+(i+1)+"</td>"
    htmlData += "<td>"+dataArr[i]+"</td>"
    htmlData += "<td>"+(i+1)+"번 작성자</td>"
    htmlData += "<td>2023-06-12</td>"
    htmlData += "<td>1</td>"
    htmlData += "</tr>";
    
}

htmlData += "</table>";

document.write(htmlData);