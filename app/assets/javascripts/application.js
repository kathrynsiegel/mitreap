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
//= require turbolinks
//= require_tree .

var hasClass = function(element, cls) {
    return (' ' + element.attr('class') + ' ').indexOf(' ' + cls + ' ') > -1;
}

window.onload = function() {
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

	$('.team-member-name').mouseover(function() {
		colorClasses = ['dark-blue-reap','light-blue-reap','pink-reap','red-reap'];
		for (var i=0; i<colorClasses.length; i++) {
			if (hasClass($(this),colorClasses[i])) {
				console.log('hello');
				$('#person-bio').addClass(colorClasses[i]);
				$('#person-bio').text('this is a bio');
			}
			console.log('hi');
		}
	})

	$('.team-member-name').mouseout(function() {
		colorClasses = ['dark-blue-reap','light-blue-reap','pink-reap','red-reap'];
		for (var i=0; i<colorClasses.length; i++) {
			if (hasClass($(this),colorClasses[i])) {
				$('#person-bio').removeClass(colorClasses[i]);
				$('#person-bio').text('');
			}
		}
	})

};

