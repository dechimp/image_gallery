$(document).ready(function () {

  var backgroundOption = $('.backgroundOption');
  var thumbnail = $('.backgroundOption img.thumbnail');
  var container = $('.preview_container');
  var image_preview = container.find('.image_preview');
  var color_preview = container.find('.color_preview');
  var color_edit = container.find('#color_hex_edit');
  color_preview.hide();

  backgroundOption.on('click', function () {
    // ...mark the image as selected...
    select_image($(this));
  });

  function select_image (that) {
    backgroundOption.removeClass("selected");
    that.addClass("selected");
  }
  function show_image_preview (that) {
    color_preview.hide();
    $('.blocker').show();
    var img_src = that.attr('src');
    image_preview.attr('src', img_src);
    image_preview.show();
  }
  function show_color_preview () {
    image_preview.hide();
    color_preview.show();
    $('.blocker').hide();
  }

  thumbnail.on('click', function () {

    // ...and display the image in the preview container.
    show_image_preview($(this));
  }); // end on click

  $('.color_picker').on('click', function (e) {
    show_color_preview();
  });

  $('.deleteButton').on('click', function () {
      var container = $(this).parent();
      var img_name = container.find('img').attr('src').split("/");
      img_name = img_name[img_name.length - 1];
      var r = confirm('Remove image: ' + img_name + '?');
      if (r==true) {
        // find the next option to select
        var nxt = $(this).parent().next();
        if (!nxt.length) { // if next() doesn't exist
          nxt = $(this).parent().prev();
        }
        select_image(nxt);        // select a new image
        var nxt_thumb = nxt.find('img');
        show_image_preview(nxt_thumb);  // change the preview
        container.remove();       // remove this thumbnail
        if (!nxt.length) { // if all images are gone
          show_color_preview();
        }
      }
      else
        return;
    }); // end on click

    // color_edit.bind("enterKey",function(e){
    // });
    // color_edit.keyup(function(e){
        // if(e.keyCode == 13)
        // {
          // $(this).trigger("enterKey");
          // console.log('enter pressed');
        // }
    // });
}); // end ready()
