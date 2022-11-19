//요소 내부의 선택자 사용

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    //
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

//dom 순회
// const btns = document.querySelectorAll(".question-btn");

// // querySelectorAll과 querySelector를 착각해서 삽질함
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // 클래스확인해보기;
//     console.log(e.currentTarget.parentElement.parentElement);

//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// forEach 대체 뭘까?
// https://honey-programming.tistory.com/entry/forEach-%EB%A9%94%EC%86%8C%EB%93%9C
// css 예제로 설명해주신 분 : https://meanbymin.tistory.com/57
// 설명이 아주 유잼이다.
// forEach 는 아무튼... 배열(Array)에 활용이 가능하고,  반복작업을 수행하는 녀석이라고 하는데... 메서드라고함 머리가 아프다.
