// Menu Burger
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// LANGUAGE SELECT
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("header__lang");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// Main News Swiper
var swiper = new Swiper(".mainNewsSwiper", {
  spaceBetween: 10,
  loop: 1,
});

// Article Tab
function openArticleTab(evt, articleName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("articles__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("articles__tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" articles__active", "");
  }
  document.getElementById(articleName).style.display = "grid";
  evt.currentTarget.className += " articles__active";
}

// Organization Swiper
var swiper2 = new Swiper(".organizationSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 4,
  loop: 1,
  spaceBetween: 10,
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    370: {
      slidesPerView: 1,
    },
  }
});

// Flip Book
$(document).ready(function () {
  $("#openbook__flipbook").flipBook({
      pdfUrl:"pdf/KuttyBilik.pdf",
  });

})

// Modal Youtube Jquery
$(".js-video-button").modalVideo();

// Main Search Button
function mySearch() {
  var x = document.getElementById("headerSearchBox");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
