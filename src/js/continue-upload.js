ContinueUpolad = {
  init: function() {
    $("#continue-upload").click(function() {
      window.history.back(-1);
    })
  }

};

$(function() {
  $(window).load(function() {
    ContinueUpolad.init();
  });
});
