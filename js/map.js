var fadetime = 0;
var selected = false;
var mapColor1 = null;
var mapColor2 = null;

function initMap() {
        var jc = {lat: 36.31627, lng: -82.351161};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          disableDefaultUI: true,
          center: jc,
          clickableIcons: false,
          styles: [
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            }
            ],
        });
        map.setMapTypeId('roadmap');

        willowTree(map);
        holyTaco(map);

        var imageBounds = {
            north: 36.320410000680331,
            south: 36.312237064559916,
            east: -82.34567485313415,
            west: -82.35653614686584,
          };

        overlay = new google.maps.GroundOverlay(
            'images/Map.svg',
            imageBounds);
        overlay.setMap(map);
}

initMap();

//expand function used for sidebar
$('.expand').click(function () {
  $('#capture').toggle(300);
  $('.menu').fadeIn(300);
  if ($('.expand').data('rotate') === true) {
    $('.fa-bars').css({'-webkit-transform' : 'rotate('+ 0 +'deg)'});
    $('.expand').data('rotate', false);
  }
  else {
    $('.fa-bars').css({'-webkit-transform' : 'rotate('+ 90 +'deg)'});
    $('.expand').data('rotate', true);
  }

  if (selected === false) {
    $('.about').click();
  }
});

//Willow Tree Coffeehouse and Music Room Polygon
function willowTree(gmap) {
  var cords = [
          {lat: 36.316423, lng: -82.351494},
          {lat: 36.316386, lng: -82.351576},
          {lat: 36.316628, lng: -82.351751},
          {lat: 36.316665, lng: -82.351674}
        ];
  var polygon = new google.maps.Polygon({
        paths: cords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.0,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.0
      });
  polygon.setMap(gmap);
  google.maps.event.addListener(polygon, 'click', function (event) {
        selected = true;
        $('.mapinfo').click();
        $('.mapContent').html(willowHTML());
        switchMapColor('#f4f4f4','#473556');
  });  
}

//Willow Tree Page HTML
function willowHTML()
{
  html =  '<img class="wLogo" src="images/willow.png">' +
          '<h1 class="willow">COFFEHOUSE & MUSIC ROOM</h1>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/NRij2U6aTsF2"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Holy Taco Cantina Polygon
function holyTaco(gmap) {
  var cords = [
          {lat: 36.316860, lng: -82.352432},
          {lat: 36.316588, lng: -82.352238},
          {lat: 36.316616, lng: -82.352175},
          {lat: 36.316890, lng: -82.352370}
        ];
  var polygon = new google.maps.Polygon({
        paths: cords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.0,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.0
      });
  polygon.setMap(gmap);
  google.maps.event.addListener(polygon, 'click', function (event) {
        selected = true;
        $('.mapinfo').click();
        $('.mapContent').html(tacoHTML());
        switchMapColor('#ffa42e', '#972d20');
  });  
}

//Holy Taco Page HTML
function tacoHTML()
{
  html =  '<div class="tContainer">' + 
          '<div class="lines"></div><span class="the"> The </span><div class="lines"></div>' +
          '</div>' +
          '<p class="tTitle">HOLY TACO</p>' +
          '<p class="tCantina">CANTINA</p>' + 
          '<p class="the2">Food <br> & <br> Drinks</p>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/71ApwVXtswP2"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//menu about function
$('.about').click(function () {
  $('.aboutContent').fadeIn(fadetime);
  $('.eventsContent').fadeOut(fadetime);
  $('.mapContent').fadeOut(fadetime);
  switchColor($('.about'), $('.mapinfo'), $('.events'));
});

//menu mapinfo function
$('.mapinfo').click(function () {
  $('.aboutContent').fadeOut(fadetime);
  $('.eventsContent').fadeOut(fadetime);
  $('.mapContent').fadeIn(fadetime);
  if (selected === false) {
    switchColor($('.mapinfo'), $('.about'), $('.events'));
  }
  else {
    switchColorM($('.mapinfo'), $('.about'), $('.events'));
  }
});

//menu events function
$('.events').click(function () {
  $('.aboutContent').fadeOut(fadetime);
  $('.eventsContent').fadeIn(fadetime);
  $('.mapContent').fadeOut(fadetime);
  switchColor($('.events'), $('.mapinfo'), $('.about'));
});

//function to switch the menu colors
function switchColor(current, tab1, tab2) {
  current.css('color', '#505086');
  current.css('background-color', '#d0d0d0');
  tab1.css('color', '#d0d0d0');
  tab1.css('background-color', '#505086');
  tab2.css('color', '#d0d0d0');
  tab2.css('background-color', '#505086');
}

function switchColorM(current, tab1, tab2) {
  current.css('color', mapColor2);
  current.css('background-color', mapColor1);
  tab1.css('color', '#d0d0d0');
  tab1.css('background-color', '#505086');
  tab2.css('color', '#d0d0d0');
  tab2.css('background-color', '#505086');
}

function switchMapColor(color1, color2) {
  $('.mapinfo').css('color', color2);
  $('.mapinfo').css('background-color', color1);
  $('.mapContent').css('background-color', color1);
  $('.compass').css('color', color1);
  $('.compass').css('background-color', color2);
  mapColor1 = color1;
  mapColor2 = color2;
}

$('.etitle').click(function () {
  $('.edesc').fadeToggle(300);
});