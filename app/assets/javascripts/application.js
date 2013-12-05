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
	$('.partner-country-index').mouseover(function() {
		if (jQuery($(this).children()[0]).hasClass('light-blue-reap')) {
			jQuery($(this).children()[0]).removeClass('light-blue-reap');
			jQuery($(this).children()[0]).addClass('pink-reap');
		}
	})

	$('.partner-country-index').mouseout(function() {
		if (jQuery($(this).children()[0]).hasClass('pink-reap')) {
			jQuery($(this).children()[0]).removeClass('pink-reap');
			jQuery($(this).children()[0]).addClass('light-blue-reap');
		}
	})

	$('.partner-country-index').mouseover(function() {
		if (jQuery($(this).children()[0]).hasClass('dark-blue-reap')) {
			jQuery($(this).children()[0]).removeClass('dark-blue-reap');
			jQuery($(this).children()[0]).addClass('red-reap');
		}
	})

	$('.partner-country-index').mouseout(function() {
		if (jQuery($(this).children()[0]).hasClass('red-reap')) {
			jQuery($(this).children()[0]).removeClass('red-reap');
			jQuery($(this).children()[0]).addClass('dark-blue-reap');
		}
	})

	$('.person-holder').mouseover(function() {
		if (jQuery($(this).children()[0]).hasClass('pink-reap')) {
			jQuery($(this).children()[0]).removeClass('pink-reap');
			jQuery($(this).children()[0]).addClass('light-blue-reap');
		}
	})

	$('.person-holder').mouseout(function() {
		if (jQuery($(this).children()[0]).hasClass('light-blue-reap')) {
			jQuery($(this).children()[0]).removeClass('light-blue-reap');
			jQuery($(this).children()[0]).addClass('pink-reap');
		}
	})

	$('.person-holder').mouseover(function() {
		if (jQuery($(this).children()[0]).hasClass('red-reap')) {
			jQuery($(this).children()[0]).removeClass('red-reap');
			jQuery($(this).children()[0]).addClass('dark-blue-reap');
		}
	})

	$('.person-holder').mouseout(function() {
		if (jQuery($(this).children()[0]).hasClass('dark-blue-reap')) {
			jQuery($(this).children()[0]).removeClass('dark-blue-reap');
			jQuery($(this).children()[0]).addClass('red-reap');
		}
	})

	$('.person-holder').mouseover(function() {
		jQuery($(this).children()[2]).css('visibility','visible');	
		jQuery($(this).children()[3]).css('visibility','visible');		
	})

	$('.person-holder').mouseout(function() {
		jQuery($(this).children()[2]).css('visibility','hidden');
		jQuery($(this).children()[3]).css('visibility','hidden');
	})

    $('#cohort2show').popover('hide')
})

