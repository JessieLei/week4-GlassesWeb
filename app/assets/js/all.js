/* console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
}); */

$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});

$(".top-navbar").click(function (e) {
  e.preventDefault();
  $(this).addClass("this-page-active");
  $(this).parent().siblings().children().removeClass("this-page-active");
});
