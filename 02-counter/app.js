//set initial counter
// 초기 카운터
let conut = 0;

// select value and buttons
// 선택 값과 버튼 노드

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 유저가 어떤 버튼을 선택했는지 알고싶다.
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.currentTarget.classList);
//   });
// });

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      conut--;
    } else if (styles.contains("increase")) {
      conut++;
    } else {
      conut = 0;
    }

    if (conut > 0) {
      value.style.color = "#1b64da";
    }
    if (conut < 0) {
      value.style.color = "#ff5600";
    }
    if (conut === 0) {
      value.style.color = "#000";
    }
    value.textContent = conut;
  });
});
