UploadImage = {
    init: function() {
        $("#test1").click( function() {
            $("#select").click();
        })
    }
};

$(function() {
    $(window).load(function() {
        UploadImage.init();
    })
})