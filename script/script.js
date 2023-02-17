// Header

window.onscroll = function () {
  stickyHeader();
};

var header = document.getElementById("header");
var headerbtn = document.getElementById("headerbtn");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

jQuery(document).ready(function () {
  jQuery(".ib-nav-btn").click(function () {
    jQuery(".header").toggleClass("ib-nav-show");
    jQuery(".ib-nav-btn").toggleClass("nav-white");
    jQuery("#headerbtn").toggleClass("ib-header-btn");
  });
});

//   Header End

// Progress Steps

//jQuery time
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next-fill, .next-bullet").click(function () {
current_fs = $(this).parent();
next_fs = $(this).parent().next();

$("#ib-progressbar-fill-pack li, #ib-progressbar-bullet-pack li")
  .eq($("fieldset").index(next_fs))
  .addClass("active-link");

next_fs.show();

current_fs.animate(
  { opacity: 0 },
  {
    step: function (now, mx) {
      scale = 1 - (1 - now) * 0.2;

      left = now * 50 + "%";

      opacity = 1 - now;
      current_fs.css({ transform: "scale(" + scale + ")" });
      next_fs.css({ left: left, opacity: opacity });
    },
    duration: 800,
  }
);
});

$(".prev-fill, .prev-bullet").click(function () {
if (animating) return false;

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

$("#ib-progressbar-fill-pack li, #ib-progressbar-bullet-pack li")
  .eq($("fieldset").index(current_fs))
  .removeClass("active-link");

previous_fs.show();

current_fs.animate(
  { opacity: 0 },
  {
    step: function (now, mx) {
      scale = 0.8 + (1 - now) * 0.2;

      left = (1 - now) * 50 + "%";

      opacity = 1 - now;
      current_fs.css({ left: left });
      previous_fs.css({
        transform: "scale(" + scale + ")",
        opacity: opacity,
      });
    },
    duration: 800,
  }
);
});


// Copy To Clipboard

function CopyToClipboard(id) {
let activeclass = document.querySelector(".copy");
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand("copy");
window.getSelection().removeAllRanges();
}
$(document).ready(function(){
$('.copy').click(function(){
  $(this).addClass("copied").delay(2500).queue(function(next){
    $(this).removeClass("copied");
    next();
  });
});
});