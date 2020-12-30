"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
$(document).ready(function () {
  var _$$slick, _$$slick2;

  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header-slider').slick((_$$slick = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000
  }, _defineProperty(_$$slick, "speed", 1000), _defineProperty(_$$slick, "cssEase", 'linear'), _defineProperty(_$$slick, "appendArrows", false), _defineProperty(_$$slick, "pauseOnDotsHover", true), _$$slick));
  $('.slider-projects').slick((_$$slick2 = {
    speed: 1000,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }, _defineProperty(_$$slick2, "infinite", true), _defineProperty(_$$slick2, "arrows", true), _defineProperty(_$$slick2, "responsive", [{
    breakpoint: 1220,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      dots: false
    }
  }]), _$$slick2));
});
var ourLocation = {
  lat: 40.690594269194385,
  lng: -73.90273910938937
};
var picMarker = 'img/marker.png';

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: ourLocation,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e0e0e0"
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "landscape.natural.terrain",
      "elementType": "geometry.fill",
      "stylers": [{
        "weight": 4
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.business",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#c7c7c7"
      }, {
        "weight": 5
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "weight": 8
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.place_of_worship",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c7c7c7"
      }, {
        "visibility": "on"
      }, {
        "weight": 5
      }]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#c7c7c7"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "saturation": 30
      }, {
        "weight": 1
      }]
    }, {
      "featureType": "road.arterial",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "weight": 2.5
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "visibility": "on"
      }, {
        "weight": 1.5
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [{
        "weight": 0.5
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]
  });
  var marker = new google.maps.Marker({
    position: ourLocation,
    map: map,
    icon: picMarker
  });
}