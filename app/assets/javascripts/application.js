// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require Chart
//= require_tree .

var hasClass = function(element, cls) {
    return (' ' + element.attr('class') + ' ').indexOf(' ' + cls + ' ') > -1;
}

$(document).ready(function() {
	$('.partner-country-index.light-blue-reap').mouseover(function() {
		$(this).removeClass('light-blue-reap');
		$(this).addClass('pink-reap');
	})

	$('.partner-country-index.light-blue-reap').mouseout(function() {
		$(this).removeClass('pink-reap');
		$(this).addClass('light-blue-reap');
	})

	$('.partner-country-index.dark-blue-reap').mouseover(function() {
		$(this).removeClass('dark-blue-reap');
		$(this).addClass('red-reap');
	})

	$('.partner-country-index.dark-blue-reap').mouseout(function() {
		$(this).removeClass('red-reap');
		$(this).addClass('dark-blue-reap');
	})

	$('.partner-country-index.pink-reap').mouseover(function() {
		$(this).removeClass('pink-reap');
		$(this).addClass('light-blue-reap');
	})

	$('.partner-country-index.pink-reap').mouseout(function() {
		$(this).removeClass('light-blue-reap');
		$(this).addClass('pink-reap');
	})

	$('.partner-country-index.red-reap').mouseover(function() {
		$(this).removeClass('red-reap');
		$(this).addClass('dark-blue-reap');
	})

	$('.partner-country-index.red-reap').mouseout(function() {
		$(this).removeClass('dark-blue-reap');
		$(this).addClass('red-reap');
	})

	$('.person-circle').mouseover(function() {
		jQuery($(this).children()[1]).css('visibility','visible');	
		jQuery($(this).children()[2]).css('visibility','visible');		
	})

	$('.person-circle').mouseout(function() {
		jQuery($(this).children()[1]).css('visibility','hidden');
		jQuery($(this).children()[2]).css('visibility','hidden');
	})

	$('#partner-regions-link').bind("ajax:after", function(evt, xhr, settings){
    	window.scroll(0, 1000);
    })
})

