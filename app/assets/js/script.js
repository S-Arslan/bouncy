

jQuery('#map-view').click(function(){
    $('.map__overflow').fadeOut();
    setTimeout(function(){$('.map__overflow').fadeIn()}, 100000)
})