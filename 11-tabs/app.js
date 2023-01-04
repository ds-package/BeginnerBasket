// 제발 querySelectorAll 이랑 querySelector 이랑 헷갈리지 말자, forEach 에러로 30분넘게 날림

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active form ather buttons
    // 버튼에 지정된 액티브를 제거함
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
