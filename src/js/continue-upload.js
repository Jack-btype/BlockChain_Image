ContinueUpolad = {
  init: function() {
    $("#continue-upload").click(function() {
      window.history.back(-1); // 相当于点击浏览器后退按钮
    })
  }

};

$(function() {
  $(window).load(function() {
    ContinueUpolad.init();
  });
});
