$(window).scroll(function() {
    console.log($(document).height())
    if ($(this).scrollTop() > $(document).height()/3 ) {  // The number 50 is the amount of pixels you have to scroll down before the navbar is visible
      $('.navbar').fadeOut();
    } else {
      $('.navbar').fadeIn();
    }
  });