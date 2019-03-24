UploadImage = {
  init: function() {
    layui.use(['upload', 'element'], function(){
      var element = layui.element;
      var $ = layui.jquery
      ,upload = layui.upload;
      
      $('#test1').click(function() {
        $('#select').click();
      })

    });
  }

};
  
$(function() {
  $(window).load(function() {
    UploadImage.init();
  });
});
  