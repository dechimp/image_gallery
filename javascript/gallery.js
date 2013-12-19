$(document).ready(function () {

  var backgroundOption = $('.backgroundOption');
  var thumbnail = $('.backgroundOption img.thumbnail');
  var container = $('.preview_container');
  var image_preview = container.find('.image_preview');
  var color_preview = container.find('.color_preview');
  color_preview.hide();

  backgroundOption.on('click', function () {
    // ...mark the image as selected...
    backgroundOption.removeClass("selected");
    $(this).addClass("selected");
  });

  thumbnail.on('click', function () {

    // ...and display the image in the preview container.
    color_preview.hide();
    var img_src = $(this).attr('src');
    image_preview.attr('src', img_src);
    image_preview.show();
  }); // end on click

  $('.color_picker').on('click', function (e) {
    image_preview.hide();
    color_preview.show();
  });

  $('.deleteButton').on('click', function () {

      var container = $(this).parent();
      var img_name = container.find('img').attr('name');
      var r = confirm('Remove image: ' + img_name + '?');
      if (r==true)
        // [insert code to remove the image from the application]
        container.remove();
      else
        return;
    }); // end on click
}); // end ready()
