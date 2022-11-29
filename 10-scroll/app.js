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

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default : 기본 방지(?)
    // html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 e.preventDefault 는 그 동작을 중단시킨다. : https://pa-pico.tistory.com/20

    e.preventDefault();

    // navigate to specific spot
    // 한 섹션의 시작점 값을 구함
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights : 높이계산하기
    // 데스크탑 네비게이션 높이
    const navHeight = navbar.getBoundingClientRect().height;

    const containerHeight = linksContainer.getBoundingClientRect().height;

    // css스타일 선택
    const fixedNav = navbar.classList.contains("fixed-nav");

    // 포지션이라는 아이를 변수로 지정, 섹션높이 - 네비게이션높이로 지정
    let position = element.offsetTop - navHeight;
    console.log(navHeight);
    // fixedNav가 아닐 때 (즉 데스크탑일때)
    if (!fixedNav) {
      position = position - navHeight;
    }
    // 네비바의 높이가 특정숫자보다 클 때
    // 이 조건문이 없을 때에는 링크 컨테이너 높이 만큼 덜 스크롤 되는 듯
    // 원인 찾아보기.. 하...
    if (navHeight > 73) {
      position = position + containerHeight;
    }

    // 스크롤 위치를 위에서 정한 시작점으로 지정 top : position
    window.scrollTo({
      left: 0,
      top: position,
    });

    // 메뉴 클릭 이벤트가 일어날 때 네비게이션 컨테이너의 높이 스타일을 0으로 만들어 접힐 수 있게 함
    linksContainer.style.height = 0;
  });
});
