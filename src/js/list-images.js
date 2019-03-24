listImages = {
    web3Provider: null,
    contracts: {},
  
    init: async function() {
      // 动态加载图片
      // 暂时使用本地json文件，后面迭代使用服务器返回的json文件
      $.getJSON('../images.json', function(data) {
        var imagesRow = $('#imagesRow');
        var imageTemplate = $('#imageTemplate');
  
        for (i = 0; i < data.length; i ++) {
          imageTemplate.find('.panel-title').text(data[i].name);
          imageTemplate.find('img').attr('src', data[i].picture);
          imageTemplate.find('.image-name').text(data[i].name);
          imageTemplate.find('.image-painter').text(data[i].painter);
          imageTemplate.find('.image-owner').text(data[i].owner);
          imageTemplate.find('.btn-buy').attr('data-id', data[i].id);
  
          imagesRow.append(imageTemplate.html());
        }
      });
    },
  
  };
  
$(function() {
  $(window).load(function() {
    listImages.init();
  });
});
  