// modal-btn, syslog-syslog, close-btn 선택
// modal-btn 및 close-btn에서 클릭 이벤트 수신.
// 사용자가 modal-btn을 클릭할 때 modal-modal에 .open-model 추가
// 사용자가 close-btn remove. 클릭할 때 .open-modal에서 modal-overlay를 제거

const modalBtn = document.querySelector(".modal-btn");

const modal = document.querySelector(".modal-overlay");

const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
