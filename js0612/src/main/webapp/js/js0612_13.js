/**!SECTION
 * 게시판 for문
 */
function pop(){
    // alert("함수 pop()이 연결되었습니다.");
    // 이름을 안 넣으면 popup창이 계속 뜸 (넣으면 열려 있으면 계속 떠짐)
    // 반복 방지문
    window.open("popup.html","pop1");
}
function dataDelete(){
    // alert("삭제를 하시겠습니까")
    if(confirm("게시글 삭제할래?")){
        alert("게시글 삭제 됨.");
    }else{        
    }
}