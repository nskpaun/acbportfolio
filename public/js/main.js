$(document).ready(function() {

  $('body').css('background-image','url('+slides[0].image+')');
  var closeAll = function() {
  	for(i = 0; i < 7; i++) {
  	  $('#content0'+i).css('visibility','hidden');
  	}
  }

  var showContent = function(contentIndex) {
  	closeAll();
  	$('#content0'+contentIndex).css('visibility','visible');
  	$('body').css('background-image','url('+slides[contentIndex].image+')');
  }

  $('.deg3').click(function () {
    showContent(0);
  });
  $('.deg54').click(function () {
    showContent(1);
  });
  $('.deg105').click(function () {
    showContent(2);
  });
  $('.deg156').click(function () {
    showContent(3);
  });
  $('.deg207').click(function () {
    showContent(4);
  });
  $('.deg258').click(function () {
    showContent(5);
  });
  $('.deg309').click(function () {
    showContent(6);
  });

  $('.close-button').click(function() {
  	closeAll();
  })


});