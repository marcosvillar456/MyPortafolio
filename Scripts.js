$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".btn-menu").click(function () {
    $(".navbar .max-width .menu").toggleClass("active");
    $(".btn-menu i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Developer", "FullStack"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  let form = document.getElementById("my-form");
  async function handleSubmit(event) {
    event.preventDefault();

    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        alert(
          "Gracias por comunicarce conmigo,pronto me contactare con usted "
        );
        form.reset();
      })
      .catch((error) => {
        alert("Oops! hubo un problema intentelo de nuevo mas tarde");
      });
  }
  form.addEventListener("submit", handleSubmit);
});
