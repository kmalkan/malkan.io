$(function() {
  var body = $('body');
  var profile = $('.profile');
  var bg = 'background-color';
  var color = 'color';

  // Colors
  var primary = '#55efc4';
  var font = '#252830';
  var linkedin = '#0077B5';
  var github = '#4078c0';
  var spotify = '#1ED760';
  var xbox = '#0F760F';
  var nyu = '#57068C';
  var white = 'white';

  $('.linkedin').hover(function() {
      body.css(bg, linkedin);
    }, function(){
    body.css(bg, primary);
  });

  $('.github').hover(function() {
      body.css(bg, github);
    }, function(){
    body.css(bg, primary);
  });

  $('.spotify').hover(function() {
      body.css(bg, spotify);
    }, function(){
    body.css(bg, primary);
  });

  $('.xbox').hover(function() {
      body.css(bg, xbox);
    }, function(){
    body.css(bg, primary);
  });

  $('.nyu').hover(function() {
      body.css(bg, nyu);
      profile.css(color, white);
    }, function(){
    body.css(bg, primary);
    profile.css(color, font);
  });
});