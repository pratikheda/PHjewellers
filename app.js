const nav = document.querySelector('.mobile-nav');
let   COUNTER=0;
COUNTER++;
function showNav()  {
    if (COUNTER === 0) {
      // nav.style.display = "none";
      nav.style.left = "-100%";
      COUNTER++;
    }
    else {
      // nav.style.display = "block";
      nav.style.left = "0%";
      COUNTER--;
    }
  }