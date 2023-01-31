const menuLinks = document.querySelectorAll('.menu__link');
const menuItem = document.querySelectorAll('.menu__item');

let links = Array.from(menuLinks);

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  let item = link.closest('.menu__item');
  console.log(link);
  console.log(item);
  let subMenu = item.querySelector('.menu_sub');
  console.log(subMenu);
  link.onclick = function () {
    if (subMenu) {
      subMenu.classList.add('menu_active');
      return false;
    }
  }
}