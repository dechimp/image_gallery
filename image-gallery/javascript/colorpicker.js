$(document).ready(function() {

  var container = $('.preview_container');
  // var image_preview = container.find('.image_preview');
  // var color_preview = container.find('.color_preview');
  var color_edit = container.find('#color_hex_edit');
  var color_picker = $.farbtastic('#colorpicker');

  color_picker.linkTo(color_edit);

});

