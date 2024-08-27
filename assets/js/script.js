$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      $(".navbar").addClass("bg-black").removeClass("bg-gradient");
    } else {
      $(".navbar").addClass("bg-gradient").removeClass("bg-black");
    }
  });

  // Código para el manejo de eventos de las tarjetas
  $(".card-container")
    .on("mouseenter", function () {
      $(this).find(".card").addClass("flip");
    })
    .on("mouseleave", function () {
      $(this).find(".card").removeClass("flip");
    });
});
