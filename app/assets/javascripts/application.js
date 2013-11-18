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

	$('.team-member-name').click(function() {
		colorClasses = ['dark-blue-reap','light-blue-reap','pink-reap','red-reap'];
		for (var i=0; i<colorClasses.length; i++) {
			if (hasClass($(this),colorClasses[i])) {
				var id_str = $(this).attr('id');
				var id = id_str.substring(id_str.length-1);
				$('#person-bio').addClass(colorClasses[i]);
				var txt = $('#person-bio').data('url')[id]['bio'];
				if ($('#person-bio').text() == txt) {
					$('#person-bio').text('');
					$('#person-bio').css('display','none');
				}
				else {
					$('#person-bio').text(txt);
					$('#person-bio').css('display','block');
				}
			}
			else {
				$('#person-bio').removeClass(colorClasses[i]);
			}

		}
	})

	// $('.team-member-name').mouseout(function() {
	// 	colorClasses = ['dark-blue-reap','light-blue-reap','pink-reap','red-reap'];
	// 	for (var i=0; i<colorClasses.length; i++) {
	// 		if (hasClass($(this),colorClasses[i])) {
	// 			$('#person-bio').removeClass(colorClasses[i]);
	// 			$('#person-bio').text('');
	// 		}
	// 	}
	// })

})

