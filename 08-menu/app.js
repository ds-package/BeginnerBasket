const menu = [
  {
    id: 1,
    title: "mini",
    category: "cute",
    price: 15.99,
    img: "/assets/img-01.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "juni",
    category: "cute",
    price: 13.99,
    img: "/assets/img-02.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "dahee",
    category: "cool",
    price: 6.99,
    img: "/assets/img-03.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "woona",
    category: "hot",
    price: 20.99,
    img: "/assets/img-04.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "johell",
    category: "cool",
    price: 22.99,
    img: "/assets/img-05.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "kooooooog",
    category: "hot",
    price: 18.99,
    img: "/assets/img-06.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },

  {
    id: 7,
    title: "null",
    category: "cool",
    price: 99.99,
    img: "/assets/image-cat.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// 아이템 불러오기
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h3>${item.title}</h3>
              <h3 class="price">${item.price}</h3>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  // 이걸 추가하니 데이터로 작성되어있는 메뉴가 쭉 나열되었는데 왜 됐는지 검색이 필요함
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// 버튼과 버튼 내부 로직들 분리해서 관리하기
function displayMenuButtons() {
  // get only unique categories
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  // 하드코딩 X JS로 버튼 관리
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  // 필터
  const filterBtns = document.querySelectorAll(".filter-btn");
  // 필터 아이템
  // 와 여기는 치면서도 정말 잘 모르겠다, 해석이 필요함
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // console.log(menuCategory);
      // 카테고리가 "all"이 아니라면 "menuCategory"를 불러와?
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
