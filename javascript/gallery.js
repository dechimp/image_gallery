$(document).ready(function () {

  // when I click an image thumbnail...
  $('.thumbnail').on('click', function () {

    // store the path of the image...
    var img_src = $(this).find('img').attr('src');
    console.log('selected ' + img_src);

    // mark the image as selected
    $('.thumbnail').removeClass("selected");
    $(this).addClass("selected");

    // and display it in the preview container
    $('.preview_container').find('img').attr('src', img_src);
  });

});
