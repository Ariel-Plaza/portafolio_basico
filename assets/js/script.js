// $(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() >= 825) {
//       $(".navbar").addClass("bg-black");
//       $(".navbar").removeClass("bg-gradient");
//     } else {
//       $(".navbar").addClass("bg-gradient");
//       $(".navbar").removeClass("bg-black");
//     }
//   });


  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-container");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.querySelector(".card").classList.add("flip");
      });
      card.addEventListener("mouseleave", function () {
        this.querySelector(".card").classList.remove("flip");
      });
    });
  });

  // $(window).scroll(function () {
  //   if ($(".navbar").offset().top > 825 ) {
  //     $(".navbar").addClass("bg-black");
  //   } else {
  //     $(".navbar").removeClass("bg-gradient");
  //   }
  // });
// });

// Interactividad básica (por ejemplo, efectos al hacer clic).
// • Manipulación del DOM para actualizar contenido dinámicamente.
// • Puedes utilizar JavaScript vanilla o JQuery.

// Portafolio
