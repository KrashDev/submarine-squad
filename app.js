$(document).ready(function() {

  var container = $('.container-fluid');
  // var sub = $('#submarine');
  // var subImg = $('#submarine img');
  var i;

  //bubble div creation
  for (i = 0; i < 50; i++) {
    $(container).append('<div class="bubbles"></div>');
  }

  var bubbles = $('.bubbles');

  // buuble sizing and positioning
  bubbles.each(function() {

    var x = Math.floor((Math.random() * 1500) + 1);
    var y = Math.floor((Math.random() * 2000) + 1);
    var s = Math.floor((Math.random() * 20) + 1);


    $(this).css({
      "top": y,
      "left": x,
      "height": s,
      "width": s
    });
  }); //end bubble sizing/positioning


  for (i = 0; i < 10; i++) {
    $(container).append('<div><img id="squid" src="images/squid.svg"></div>');
  }

  var squid = $('#squid');

  // buuble sizing and positioning
  squid.each(function() {

    var x = Math.floor((Math.random() * 1500) + 1);
    var y = Math.floor((Math.random() * 1000) + 1);


    $(this).css({
      "top": y,
      "left": x
    });
  }); //end squid positioning


  //sub bubbles
  for (i = 0; i < 4; i++) {
    sub.append('<div class="sub-bubbles"></div>');
  }

  var subBubbles = $('.sub-bubbles');

  subBubbles.each(function() {
    var s = Math.floor((Math.random() * 10) + 1);

    $(this).css({
      "height": s,
      "width": s
    })
  });


  $('body').on('keydown', function(e) {
    if (e.keyCode === 32) {
      $('#submarine').parent('div').append('<div class="torpedo"> <img src="images/torpedo.svg"></div>');
    }
  });

  // //submarine movement
  // const downKeys = new Set();
  // let xx = 0;
  // let yy = 0;
  // const sub = document.getElementById('submarine');
  //
  // document.addEventListener('keydown', event => downKeys.add(event.key));
  // document.addEventListener('keyup', event => downKeys.delete(event.key));
  //
  // function update() {
  //   function isDown(key) {
  //     return downKeys.has(key)
  //   }
  //   if (isDown('ArrowDown')) sub.style.top = ++yy + 'px';
  //   if (isDown('ArrowUp')) sub.style.top = --yy + 'px';
  //   if (isDown('ArrowRight')) sub.style.left = ++xx + 'px';
  //   if (isDown('ArrowLeft')) sub.style.left = --xx + 'px';
  //   window.requestAnimationFrame(update);
  // }
  //
  // window.requestAnimationFrame(update);


}); //document ready function