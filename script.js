// let menu_icon = document.querySelector('#menu-icon');
// let menu = document.querySelector('.nav-list');

// function showmenu(){
//   menu.style.display = 'block';
  

// }
// function hidemenu(){
//   menu.style.display = 'none';
  

// }
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}


