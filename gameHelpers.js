var settings = {
    FPS: 30,
    CW: 1920, // canvas width
    CH: 979, // canvas height
    speed: 4,
}
settings.SZ= (settings.CW+settings.CH)/2,
settings.setWindowSize = function() {
  if (typeof (window.innerWidth) == 'number') {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else {
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else {
      if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
      }
    }
  }
  console.log(myWidth, myHeight);
  settings.CW = myWidth;
  settings.CH = myHeight;
}
settings.setWindowSize();

var helpers = {
  distance: function(a,b){
      return Math.sqrt((a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y));
  },
  tryToDestroy: function(arr){
    return arr.filter(function(item){
      return item.active;
    });
  }
}

var canvasElement = $("<canvas id='canvas' width='" + settings.CW +  "' height='" + settings.CH + "'></canvas>");
var ctx = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#gameBoard');

/*
window.addEventListener('resize', function(){
  setWindowSize();
  canvasElement.attr('width', settings.CW)
  .attr('height', settings.CH);

});
*/

$(document).ready(function(){
  $('#gameBoard').on('click', 'canvas', function(e){
    getPosition(e);
  })
})

function getPosition(event)
{
  var x = event.pageX;
  var y = event.pageY;

  var c = document.getElementById("canvas");
  x -= c.offsetLeft;
  y -= c.offsetTop;
  gDATA.userClick = {x: x, y: y, newClick: true};
  console.log(gDATA.userClick);
}