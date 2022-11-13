const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//길게 써보자
// toggleBtn.addEventListener("click", function () {
//   if (sidebar.classList.contains("show-sidebar")) {
//     sidebar.classList.remove("show-sidebar");
//   } else {
//     sidebar.classList.add("show-sidebar");
//   }
// });

//toggle메소드를 써서 간단하게 작성해보자
toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
