(function(module) {
  var iceCreamController = {};

  iceCreamController.create = function() {
    $('#home-container').hide();
    $($('.container')[0]).show();
    $('.js-icecream-flavor').hide();
    $('.scoops-filter').off().on('change', function() {
      var scoops = ($('.scoops-filter').val());
      if(scoops == 1) {
        $($('.js-icecream-flavor')[1]).hide();
        $($('.js-icecream-flavor')[0]).show();
      }
      if(scoops == 2) {
        $($('.js-icecream-flavor')[0]).show();
        $($('.js-icecream-flavor')[1]).show();
      }
    })
    $('#ic-order').off().on('click', function() {
      var curIceCreamOrder = new IceCream ({
        scoops: $('.scoops-filter').val(),
        flavorOne: $($('.js-icecream-flavor')[0]).val(),
        flavorTwo: $($('.js-icecream-flavor')[1]).val(),
        vessel: $('.vessel-filter').val()
      });
      var orderHistory = new Order ({
        type: "ice cream",
        data: curIceCreamOrder
      });
      Order.orders.push(orderHistory);
      $('#order-history-table').children().remove();
      orderView.makeTable(Order.orders);
      $($('.container')[0]).hide();
      $('#order-history-table').show();
      $('#more-treats').show();
    });
    $('#ic-cancel').on('click', productController.index);
    $('#more-treats').on('click', productController.index);
  };

  module.iceCreamController = iceCreamController;
})(window);
