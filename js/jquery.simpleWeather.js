/*
 * simpleWeather
 * http://simpleweatherjs.com
 *
 * A simple jQuery plugin to display current weather data
 * for any location and doesn't get in your way.
 *
 * Developed by James Fleeting <@fleetingftw> <http://iwasasuperhero.com>
 * Another project from monkeeCreate <http://monkeecreate.com>
 *
 * Version 2.7.0 - Last updated: April 17 2014
 */
// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: '',
    woeid: '23424754',
    unit: 'c',
    success: function(weather) {
      html = '<h1 class="hero-text alt-text">Today</h1>';
      html += '<h4>'+weather.forecast[0].date+'</h4>';
      html += '<h2><i class="icon-'+weather.code+'"></i><span>'+weather.temp+'&deg;'+weather.units.temp+'</span></h2>';
      html += '<h3>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</h3>';
      html += '<h4>'+weather.country+'</h4>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

