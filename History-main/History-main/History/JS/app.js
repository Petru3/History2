const loader = document.querySelector('.loader_bg');

setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1000);

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#cursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
});


