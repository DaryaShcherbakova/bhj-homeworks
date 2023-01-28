
let cookie = document.getElementById('cookie');
let clickCount = document.getElementById('clicker__counter');
function cocookieClicker() {
   clickCount.textContent++;
  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
}
cookie.onclick = cocookieClicker;
