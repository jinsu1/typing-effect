'use strict';

let target = document.querySelector("#dynamic");
let i = 0;

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JAVASCRIPT"];
    let selectStringArr ="";
    if(i < 3)  {
        let selectString = stringArr[i];
        selectStringArr = selectString.split(""); //배열로 분리하는 기준이 없기때문에 모두 쪼개짐        
        i++;
    } else {
        i = 0
        let selectString = stringArr[i];
        selectStringArr = selectString.split("");
        i++;
    }
// 배열 랜덤으로 출력 let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

return selectStringArr;
}

//문자 초기화
function resetTyping(){
target.textContent="";
dynamic(randomString());
}

//타이핑 효과
function dynamic(randomArr) {
    if(randomArr.length > 0){
        target.textContent += randomArr.shift(); //shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환하며 원래의 배열의 길이를 변경
        setTimeout(function() {
            dynamic(randomArr)}, 80)
    } else{
        setTimeout(resetTyping, 2500);
    }
}

//커서 깜박임 효과
function blick(){
    target.classList.toggle("active");  /*toggle은 클래스값이 true면 false를, false면 true를 반환 */
}

setInterval(blick, 500);
dynamic(randomString());
