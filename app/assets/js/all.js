/* console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
}); */

$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});
