$(document).ready(function() {

  var container = $('.preview_container');
  var color_edit = container.find('#color_hex_edit');
  var color_picker = $.farbtastic('#colorpicker');

  color_picker.linkTo(color_edit);

});

