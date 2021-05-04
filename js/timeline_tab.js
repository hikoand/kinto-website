$(function () {
  $('.timeline_btn > button').each(function (i) {
    let indexNum = i;
    $(this).click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.box_wrap_container').each(function (j) {
        if (indexNum == j) {
          $('.box_wrap_container').removeClass('active');
          $(this).addClass('active');
        }
      });
    });
  });
});
