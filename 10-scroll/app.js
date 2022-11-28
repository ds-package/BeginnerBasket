// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// Element.getBoundingClientRect() 메서드는 뷰포트를 기준으로 요소의 크기와 위치를 반환합니다.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// 페이지 Y오프셋은 문서가 수직으로 스크롤된 픽셀 수를 반환하는 읽기 전용 창 속성입니다.

// slice extracts a section of a string without modifying original string
// 슬라이스는 원래 문자열을 수정하지 않고 문자열의 섹션을 추출합니다.

//offsetTop - A Number, representing the top position of the element, in pixels
//오프셋 위쪽 - 요소의 위쪽 위치를 나타내는 숫자(픽셀 단위)

// ********** set date ************
// 와 최신 연도를 구하는 방식인가 봄 | 관련 글 : https://carrotweb.tistory.com/156
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
// 내부 li클래스의 높이값만큼 컨테이너의 높이가 같이 계산되는 식
// css에 `height: auto !important;` 를 주의해서 함께 사용하자

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// ********** fixed navbar ************
// 스크롤에 따라 fixed네비게이션이 나오는 것 `pageYOffset`을 기억하자~
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
