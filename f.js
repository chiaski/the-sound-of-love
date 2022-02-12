/* PLAYER */

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    playerVars: {
      'fs': 0,
      'playsinline': 1,
      'autoplay': 1,
      'controls': 0,
      'origin': "https://www.youtube.com"
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}


function onPlayerStateChange(event) {
  // if video is ended, play another one
  if (event.data == 0) {
    thesoundof(Math.floor(Math.random() * (love.length)));
  }
}


let c = 0;

console.log(love.length);

$("body").click(function (e) {

  if (e.button == 0) {

    let r = Math.floor(Math.random() * (love.length));


    // first click
    if (c === 0) {
      $(".__intro").fadeOut(4000);
      $("*").css("cursor", "wait");
      setTimeout(
        function () {
          $(".s").css("opacity", 1);
          $("#player").css("opacity", 1);
          $("body").css("pointer-events", "none !important");
          $("p.isaid").fadeIn(3000);

          $("div._s").fadeOut(function () {
            $(this).text(love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s).fadeIn(2000);
          });

          
          $(".grad").css("opacity", "1");
          $("#msg").css("height", "60vh");
          

          if ((love[r].c).length <= 80) {
            $("p.isaid").css("font-size", "2em");
            $("p.isaid").css("letter-spacing", "-3px");
            $("p.isaid").css("line-height", "80%;");
          } else if ((love[r].c).length <= 80) {
            $("p.isaid").css("font-size", "1.8em");
            $("p.isaid").css("letter-spacing", "-2.2px");
          } else if ((love[r].c).length <= 400) {
            $("p.isaid").css("font-size", "1.6em");
            $("p.isaid").css("letter-spacing", "-1.6px");
          } else if ((love[r].c).length <= 1200) {
            $("p.isaid").css("font-size", "1.2em");
            $("p.isaid").css("letter-spacing", "-1px");
          } else {
            $("p.isaid").css("font-size", "1em");
            $("p.isaid").css("letter-spacing", "-.5px");
          }

          $("p.isaid").text(love[r].c);
          player.loadVideoById(love[r].v);

          // cursor back
          setTimeout(
            function () {
              $("*").css("cursor", "pointer");
              $("body").css("pointer-events", "auto");
            }, 3200);


        }, 4000);

    } else {
      // all else
      thesoundof(r);
    }

    c++;
  }


});

$('body').keyup(function (e) {
  if (e.keyCode == 32) {
    $("#bw").fadeToggle();
  }
});

function thesoundof(r) {
  //  $(love[r].c).hide().prependTo("p.isaid").fadeIn(4000);
  $("*").css("cursor", "wait");

  $("p.isaid").fadeOut(function () {
    $(this).text(love[r].c).fadeIn(2000);
  });

  $("div._s").fadeOut(function () {
    $(this).text(love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s + " · " + love[r].s).fadeIn(2000);
  });

  $("#player").css("opacity", 0);
  $("#cover").css("opacity", 1);
  $("body").css("pointer-events", "none !important");


  setTimeout(
    function () {
      $("#player").css("opacity", 1);
      player.loadVideoById(love[r].v);

      if ((love[r].c).length <= 80) {
        $("p.isaid").css("font-size", "2em");
        $("p.isaid").css("letter-spacing", "-3px");
        $("p.isaid").css("line-height", "80%;");
      } else if ((love[r].c).length <= 80) {
        $("p.isaid").css("font-size", "1.8em");
        $("p.isaid").css("letter-spacing", "-2.2px");
      } else if ((love[r].c).length <= 400) {
        $("p.isaid").css("font-size", "1.6em");
        $("p.isaid").css("letter-spacing", "-1.6px");
      } else if ((love[r].c).length <= 1200) {
        $("p.isaid").css("font-size", "1.2em");
        $("p.isaid").css("letter-spacing", "-1px");
      } else {
        $("p.isaid").css("font-size", "1em");
        $("p.isaid").css("letter-spacing", "-.5px");
      }

    }, 1500);


  setTimeout(
    function () {
      $("#cover").css("opacity", 0);
    }, 2500);


  // cursor back
  setTimeout(
    function () {
      $("body").css("pointer-events", "auto");
      $("*").css("cursor", "pointer");
    }, 3200);


  // adjust font size based on length
  console.log((love[r].c).length);
}
