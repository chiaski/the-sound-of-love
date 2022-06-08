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
$("._count").text(love.length);

$("h1").fadeIn(3000);

   setTimeout(
            function () {
$(".__intro p").css("color", "#000000");
              
            }, 1500);


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

      
      $('#msg').scrollTop(0);
        

          if ((love[r].c).length <= 80) {
            $("p.isaid").css("font-size", "2em");
            $("p.isaid").css("letter-spacing", "-1px");
            $("p.isaid").css("line-height", "80%;");
          } else if ((love[r].c).length <= 100) {
            $("p.isaid").css("font-size", "1.8em");
            $("p.isaid").css("letter-spacing", "-1.2px");
          } else if ((love[r].c).length <= 200) {
            $("p.isaid").css("font-size", "1.6em");
            $("p.isaid").css("letter-spacing", "-.5px");
          } else if ((love[r].c).length <= 400) {
            $("p.isaid").css("font-size", "1.3em");
            $("p.isaid").css("letter-spacing", "-.5px");
          } else if ((love[r].c).length <= 800) {
            $("p.isaid").css("font-size", "1.2em");
            $("p.isaid").css("letter-spacing", "0px");
          } else if ((love[r].c).length <= 1200) {
            $("p.isaid").css("font-size", "1em");
            $("p.isaid").css("letter-spacing", "0px");
          } else {
            $("p.isaid").css("font-size", ".8em");
            $("p.isaid").css("letter-spacing", "-.5px");
          }
      

    }, 1500);


  setTimeout(
    function () {
      $(".grad").css("opacity", "1");
      $("#cover").css("opacity", 0);
    }, 2500);


  // cursor back
  setTimeout(
    function () {
      $("body").css("pointer-events", "auto");
      $("*").css("cursor", "pointer");
    }, 3200);
}

$("#msgs").click(function (e) {
  $("#msgs").fadeOut();
});

$("#msg").click(function (e) {

  if (e.button == 0) {

    let r = Math.floor(Math.random() * (love.length));

    // first click
    if (c === 0) {
      
      
      $("#controls").fadeIn(3000).css("display", "flex");
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

          $('#msg').scrollTop(0);
          
          $(".grad").css("opacity", "1");

          if ((love[r].c).length <= 80) {
            $("p.isaid").css("font-size", "2em");
            $("p.isaid").css("letter-spacing", "-1px");
            $("p.isaid").css("line-height", "80%;");
          } else if ((love[r].c).length <= 100) {
            $("p.isaid").css("font-size", "1.8em");
            $("p.isaid").css("letter-spacing", "-1.2px");
          } else if ((love[r].c).length <= 200) {
            $("p.isaid").css("font-size", "1.6em");
            $("p.isaid").css("letter-spacing", "-.5px");
          } else if ((love[r].c).length <= 400) {
            $("p.isaid").css("font-size", "1.3em");
            $("p.isaid").css("letter-spacing", "-.5px");
          } else if ((love[r].c).length <= 800) {
            $("p.isaid").css("font-size", "1.2em");
            $("p.isaid").css("letter-spacing", "0px");
          } else if ((love[r].c).length <= 1200) {
            $("p.isaid").css("font-size", "1em");
            $("p.isaid").css("letter-spacing", "0px");
          } else {
            $("p.isaid").css("font-size", ".8em");
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


// teeny commands


function _togglebw(){
  $("#bw").fadeToggle()
}

function _viewall(){
  $("#msgs").fadeToggle();
}

function _about(){
  // redirect to eiii
  window.open("https://eiii-zine.nl/thecommentsection/submission2.html?id=2", "_blank");
}


// load all messages once
loadmsgs();

function loadmsgs(){
  
  for(let i = 0; i < love.length; i++){
    $("#msgs .wrapper").append("<p data-comment='" + i + "'>" + love[i].c + "</p>");
  }
  
  $(document).on('click', "#msgs p" , function() {
    $("#msgs").fadeOut();
    thesoundof( $(this).attr("data-comment") );
    
  });
  
}
