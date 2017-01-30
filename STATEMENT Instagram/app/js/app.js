
//Arrows click & scroll
(function($) {

  $('.hideable').on('click', function() {
    $(this).hide();
  })

})( jQuery );

$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#target").offset().top
    }, 750);
});

//Instafeed
$(function () {

    //Set up instafeed
    var feed = new Instafeed({
        target: 'instafeed',
        get: 'user',
        userId: '4560499',
        accessToken: '4560499.1677ed0.9d3f7db527bd449db237d8d6aa907c01',
        links: true,
        limit: 4,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

})

//Waypoints
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });

    var osTrigger = ( trigger ) ? trigger : osElement;

    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '90%'
    });
  });
}
onScrollInit( $('.os-animation') );
