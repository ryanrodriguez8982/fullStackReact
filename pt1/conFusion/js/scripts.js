
    $(document).ready(function () {
      $('#mycarousel').carousel({ interval: 500 });
      $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#mycarousel').carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
          console.log("in pause");
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
          $('#mycarousel').carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play');
          $('#carouselButton').children('span').addClass('fa-pause');
          console.log("in play");
        }
      });
      $('#login').click(function () {
        $('#loginModal').modal('show');
      });
      $('#reserve2').click(function () {
        $('#reserveModal').modal('show');
      });
      $('#loginModal .close2').click(function () {$('#loginModal').modal('hide')});
      $('#reserveModal .close2').click(function () {$('#reserveModal').modal('hide')});
    });