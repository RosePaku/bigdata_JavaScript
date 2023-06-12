/**!SECTION
 * 게시판 for문
 */
var arr1 = ["홍길동","유관순","이순신"];
var arr2 = ["강감찬","김구"];

var result = arr1.push("김유신");



// 기본 for문
for (var i = 0; i < arr1.length; i++) {
    document.write(arr1[i],"<br>")
    
}

// 단순 for문
for (var i of arr1){ // of 냐 in냐에 따라 결과가 다르게 나옴
document.write("배열 : "+i);
document.write("</br>");

}

document.write(result);
console.log(arr1);


// var arr = [30,"홍길동",true,31.25];



