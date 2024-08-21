$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 825) {
      $(".navbar").addClass("bg-black");
      $(".navbar").removeClass("bg-gradient");
    } else {
      $(".navbar").addClass("bg-gradient");
      $(".navbar").removeClass("bg-black");
    }
  });
  // $(window).scroll(function () {
  //   if ($(".navbar").offset().top > 825 ) {
  //     $(".navbar").addClass("bg-black");
  //   } else {
  //     $(".navbar").removeClass("bg-gradient");
  //   }
  // });
});