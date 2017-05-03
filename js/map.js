var fadetime = 0;
var selected = false;
var mapColor1 = null;
var mapColor2 = null;
var load = true;
var lat = 36.31627;
var lng = -82.351161;
var map;

function initMap() {
        var jc = {lat: lat, lng: lng};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          disableDefaultUI: true,
          center: jc,
          clickableIcons: false,
          styles: [
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#555555"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "color": "#ffffff"
                },
                {
                  "weight": 1
                }
              ]
            }
            ],

        });
        map.setMapTypeId('roadmap');

        var imageBounds = {
            north: 36.320410000680331,
            south: 36.312237064559916,
            east: -82.34567485313415,
            west: -82.35653614686584,
          };

        shopping = new google.maps.GroundOverlay(
            'images/shopping.svg',
            imageBounds);

        special = new google.maps.GroundOverlay(
            'images/special.svg',
            imageBounds);

        services = new google.maps.GroundOverlay(
            'images/services.svg',
            imageBounds);

        bars = new google.maps.GroundOverlay(
            'images/bars.svg',
            imageBounds);

        food = new google.maps.GroundOverlay(
            'images/food.svg',
            imageBounds);

        rec = new google.maps.GroundOverlay(
            'images/rec.svg',
            imageBounds);

        if (load === true) {
          shopping.setMap(map);
          special.setMap(map);
          services.setMap(map);
          bars.setMap(map);
          food.setMap(map);
          rec.setMap(map);

          atomikComic(map);
          energyFitness(map);
          crownCutz(map);
          urbane(map);
          willowTree(map);
          holyTaco(map);
          koreanTacoHouse(map);
          lit(map);
          yoga(map);
          load = false;
        }

        if ($('#shopping').data('clicked') === false) {
          shopping.setMap(map);
          atomikComic(map);
        }

        if ($('#special').data('clicked') === false) {
          special.setMap(map);
          willowTree(map);
        }

        if ($('#services').data('clicked') === false) {
          services.setMap(map);
          crownCutz(map);
          urbane(map);
        }

        if ($('#bars').data('clicked') === false) {
          bars.setMap(map);
          lit(map);
        }

        if ($('#food').data('clicked') === false) {
          food.setMap(map);
          holyTaco(map);
          koreanTacoHouse(map);
        }

        if ($('#rec').data('clicked') === false) {
          rec.setMap(map);
          yoga(map);
          energyFitness(map);
        }
}

initMap();

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
                    //background, Elements
        switchMapColor('#f4f4f4','#473556');
  });  
}

//Willow Tree Page HTML
function willowHTML() {
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
                    //background, Elements
        switchMapColor('#ffa42e', '#972d20');
  });  
}

//Holy Taco Page HTML
function tacoHTML() {
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

//Atomik Comic Polygon
function atomikComic(gmap) {
  var cords = [
          {lat: 36.316649, lng: -82.352106},
          {lat: 36.316617, lng: -82.352173},
          {lat: 36.316994, lng: -82.352443},
          {lat: 36.317025, lng: -82.352376}
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
        $('.mapContent').html(atomikHTML());
                    //background, Elements
        switchMapColor('#000000','#FFC20F');

  });  
}

//Atomik Comik HTML
function atomikHTML() {
  html =  '<img class="aLogo" src="images/atomik.png">' +
          '<h1 class="aText">THE LARGEST COMIC SHOP IN TENNESSEE!</h1>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/TEPwzGMj2vy"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Korean Taco House
function koreanTacoHouse(gmap) {
  var cords = [
          {lat: 36.316058, lng: -82.352776},
          {lat: 36.316006, lng: -82.352869},
          {lat: 36.316033, lng: -82.352900},
          {lat: 36.316157, lng: -82.352859}
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
        $('.mapContent').html(koreanTacoHouseHTML());
                    //background, Elements
        switchMapColor('#2B355B','#FFF');
  });  
}

//Korean Taco House HTML
function koreanTacoHouseHTML() {
  html =  '<img class="kTaco" src="images/korean.svg">' +
          '<img class="kTaco" src="images/butter.svg">' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/TEPwzGMj2vy"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Energy Fitness
function energyFitness(gmap) {
  var cords = [
          {lat: 36.316568, lng: -82.351890},
          {lat: 36.316539, lng: -82.351957},
          {lat: 36.316296, lng: -82.351787},
          {lat: 36.316325, lng: -82.351721}
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
        $('.mapContent').html(energyFitnessHTML());
                    //background, Elements
        switchMapColor('#0d0d0d','#78be68');
  });  
}

//Energy Fitness HTML
function energyFitnessHTML() {
  html =  '<img class="kTaco" src="images/energy.png">' +
          '<p class="energyF">BE MORE.<br>DO MORE.</p>' +
          '<div class="compassCont">' +
          '<a href="https://goo.gl/maps/YiKs7TSVHQp"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

//Crown Cutz
function crownCutz(gmap) {
  var cords = [
          {lat: 36.316154, lng: -82.351737},
          {lat: 36.316220, lng: -82.351773},
          {lat: 36.316080, lng: -82.352100},
          {lat: 36.316029, lng: -82.352045}
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
        
        $('.mapContent').html(genericHTML('crown.png', 'https://goo.gl/maps/arDVS2UyzYL2'));
                    //background, Elements
        switchMapColor('#FFF','#d82206');
  });  
}

//Lit
function lit(gmap) {
  var cords = [
          {lat: 36.315633, lng: -82.351824},
          {lat: 36.315571, lng: -82.351925},
          {lat: 36.315721, lng: -82.352067},
          {lat: 36.315782, lng: -82.351968}
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
        $('.expand').trigger('click');
        $('.expand').data('open', true);
        $('.mapContent').html(genericHTML('lit.jpg', 'https://goo.gl/maps/Fobby9niwJ12'));
                    //background, Elements
        switchMapColor('#FFF','#000');
  });  
}

//yoga center
function yoga(gmap) {
  var cords = [
          {lat: 36.315512, lng: -82.352022},
          {lat: 36.315572, lng: -82.351927},
          {lat: 36.315720, lng: -82.352069},
          {lat: 36.315660, lng: -82.352165}
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
        $('.mapContent').html(genericHTML('yoga.svg', 'https://goo.gl/maps/AtBfnsQD64G2'));
                    //background, Elements
        switchMapColor('#FFF','#75939e');
  });  
}

//urbane uncommon
function urbane(gmap) {
  var cords = [
          {lat: 36.315511, lng: -82.352023},
          {lat: 36.315462, lng: -82.352104},
          {lat: 36.315610, lng: -82.352247},
          {lat: 36.315660, lng: -82.352166}
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
        $('.mapContent').html(genericHTML('urban.png', 'https://goo.gl/maps/v6MGE2ueJnD2'));
                    //background, Elements
        switchMapColor('#000','#FFF');
  });  
}

//generic HTML
function genericHTML(image, link)
{
  html =  '<img class="generic" src="images/' + image + '">' +
          '<div class="compassCont">' +
          '<a href="' + link + '"><i class="fa fa-compass fa-4x compass" aria-hidden="true"></i></a>' +
          '</div>';
  return html;
}

$('#map').click(function () {
  if ($('.expand').data('open') === true) {
    $('.expand').trigger('click');
  }
});

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

//expand function for category sidebar
$('.category').click(function () {
  $('#categories').toggle(300);
  if($('.category').data('status') === true) {
    $('.category').css('left', '80px');
    $('.category').data('status', false);
  }
  else {
    $('.category').css('left', '0px');
    $('.category').data('status', true);
  }
});

//shopping button
$('#shopping').click(function () {
  var id = $('#shopping');
  catClicked(id, '#f8f8f8', '#84a5f6');
});

//special button
$('#special').click(function () {
  var id = $('#special');
  catClicked(id, '#f8f8f8', '#7bd57b');
});

//services button
$('#services').click(function () {
  var id = $('#services');
  catClicked(id, '#f8f8f8', ' #f3b979');
});

//bars button
$('#bars').click(function () {
  var id = $('#bars');
  catClicked(id, '#f8f8f8', '#fa7974');
});

//food button
$('#food').click(function () {
  var id = $('#food');
  catClicked(id, '#f8f8f8', '#cf79f4');
});

//rec button
$('#rec').click(function () {
  var id = $('#rec');
  catClicked(id, '#f8f8f8', '#e0ec5a');
});

//parking button
$('#parking').click(function () {
  var id = $('#parking');
  catClicked(id, '#f8f8f8', '#444');
});

function catClicked(id, color1, color2) {
  if(id.data('clicked') === true) {
    swapCatColor(id, color1, color2);
    id.data('clicked', false);
    getLatLng();
    initMap();
  }
  else {
    swapCatColor(id, color2, color1);
    id.data('clicked', true);
    getLatLng();
    initMap();
  }
}

function swapCatColor(id, color1 , color2) {
  id.css('background-color', color1);
  id.css('color', color2);
}

function getLatLng() {
  lat = map.getCenter().lat();
  lng = map.getCenter().lng();
}