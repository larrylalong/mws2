jQuery(function ($) {
	
	var launch = new Date(2019,10,27,00,00);
	var days = $('#days');
	var hours = $('#hours');
	var minutes = $('#minutes');
	var seconde = $('#seconde');

	setDate();
	function setDate() {
		var now = new Date();
		var s = (launch.getTime() - now.getTime())/1000;
		var d = Math.floor(s/86400);
		days.html('<strong>' +d+' </strong><br><span>jour</span>' + (d>1?'<span>s</span>':''));
		s -= d*86400;

		var h = Math.floor(s/3600);
		hours.html('<strong>' +h+' </strong><br><span>heure</span>' + (h>1?'<span>s</span>':''));
		s -= h*3600;

		var m = Math.floor(s/60);
		minutes.html('<strong>' +m+' </strong><br><span>minute</span>' + (m>1?'<span>s</span>':''));
		s -= m*60;

		s = Math.floor(s);
		seconde.html('<strong>' +s+' </strong><br><span>seconde</span>' + (s>1?'<span>s</span>':''));

		setTimeout(setDate,1000);
	}
})