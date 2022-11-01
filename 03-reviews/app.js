// 로컬 리뷰 데이터
// 각각의 데이터는 모두 배열로 들어가있음
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// 아이팀 선택하기
const img = document.getElementById("profile-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// 아이템 스타일 셋팅
let currentItem = 0;

// 로드시 초기 아이템
// DOMContentLoaded 란 ? 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생 : 즉, 돔트리가 다 만들어진 후에 돔에 접근이 가능하기때문에, 돔이 생성되기전 돔을 조작하는 자바스크립트 코드가 실행되어 원하지 않는 결과를 내는것을 막을 수 있다.

window.addEventListener("DOMContentLoaded", function () {
  showPreson();
});

// show person based on item
// 항목별로 사람을 표시하기
// 함수로 저장하고 재사용하기
// 전역...변수...? 곳곳에 들어간 currentItem을 다 빼는데 왜지..?
function showPreson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// 다음 사람 보여주기

nextBtn.addEventListener("click", function () {
  currentItem++;
  // 만약 커런트 아이템이 리뷰의 배열 -1 보다 클 경우 커런트 아이템 0으로 돌아가주세요. -1을 하는 이유는 > "이상"이라 항목이 큰 경우까지 포함하기 때문에 그 경우를 빼주는 것
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPreson(currentItem);
});

// 이전 사람 보여주기
prevBtn.addEventListener("click", function () {
  currentItem--;
  // 만약 커런트 아이템이 리뷰의 배열 0보다 작을 경우 커런트 아이템 배열 4 - 1 해주세요.
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPreson();
});

// 랜덤사람보여주기
// 아 왤케 힘들어
// 이 말을 이해를 못하겠네....
// Math.floor와 Math.random 이 뭔지 찾아봐야겠다.
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);

  console.log(currentItem);
  showPreson();
});
