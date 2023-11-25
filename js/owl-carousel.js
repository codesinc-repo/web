
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3, // Change this number based on how many items you want to show in the carousel
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });
