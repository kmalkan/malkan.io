$(function() {
  var computeLines = function() {
    // remove any previous numbering
    $(".line-number").remove();
    var count = 1;
    // loop through paragraphs
    $(".editor-p").each(function() {
        // get the number of lines in the paragraph
        var pos = $(this).position();
        var paragraphHeight = $(this).height();
        var lines = paragraphHeight / refHeight;
        var lineHeight = paragraphHeight / lines;
        
        for (var i = pos.top; i < pos.top + paragraphHeight; i += lineHeight) {
            var x = i;
            if ($(".links")[0].offsetHeight < 100) {
              x = i + 48;
            }
            // add the numbering paragraph at absolute position
            $("<p>", { class: "line-number" }).text(count++).css("top", x).insertBefore($(this));;
        }
        $(this).css("margin-left", "1rem");
    });
  
    // display the contents of the editor
    $(".line-number").css("opacity", 0.3);
    $(".editor-p").css("opacity", 1);
  };

  // compute a reference height
  var test = $("<p>dummy</p>");
  $(".editor-p").eq(0).before(test);
  var refHeight = test.height();
  test.remove();

  $(window).resize(computeLines);

  var typed = new Typed(".lead", {
    strings: [
      "I like to design things.",
      "I like to build things.",
      "I like to think outside the box.",
      "I like to solve puzzles."
    ],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 7000,
    loop: true
  });

  var body = $("main");
  var bg = "background-color";
  var opacity = "opacity";

  // Colors
  var primary = "#33323F";
  var linkedin = "#0077B5";
  var github = "#4078c0";
  var spotify = "#1ED760";
  var xbox = "#0F760F";
  var playstation = "#031869";
  var email = "#FF5252";

  var linkedinIcon = $(".linkedin");
  var githubIcon = $(".github");
  var spotifyIcon = $(".spotify");
  var playstationIcon = $(".playstation");
  var xboxIcon = $(".xbox");
  var emailIcon = $(".email");

  function setHoverListener(selector, color) {
    selector.hover(function() {
      body.css(bg, color);
      selector.css(opacity, 1.0);
    }, function(){
      body.css(bg, primary);
      selector.css(opacity, .7);
    });
  }

  setHoverListener(linkedinIcon, linkedin);
  setHoverListener(githubIcon, github);
  setHoverListener(spotifyIcon, spotify);
  setHoverListener(playstationIcon, playstation);
  setHoverListener(xboxIcon, xbox);
  setHoverListener(emailIcon, email);

  if ($(window).width() > 768) {
    computeLines();
  } else {
    window.setTimeout(function(){
    computeLines();   
    }, 100);
  }
});