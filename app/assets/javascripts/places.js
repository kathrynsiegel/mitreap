//= require Chart

$(document).ready(function() {
	for (var i=0; i<10; i++) {
		if ($('#individual-'+i)) {
			$('#individual-'+i).popover('hide');
		}
	}

	var defaults = {
					
		//Boolean - If we show the scale above the chart data			
		scaleOverlay : false,
		
		//Boolean - If we want to override with a hard coded scale
		scaleOverride : false,
		
		//** Required if scaleOverride is true **
		//Number - The number of steps in a hard coded scale
		scaleSteps : null,
		//Number - The value jump in the hard coded scale
		scaleStepWidth : null,
		//Number - The scale starting value
		scaleStartValue : null,

		//String - Colour of the scale line	
		scaleLineColor : "white",
		
		//Number - Pixel width of the scale line	
		scaleLineWidth : 1,

		//Boolean - Whether to show labels on the scale	
		scaleShowLabels : true,
		
		//Interpolated JS string - can access value
		scaleLabel : "<%=value%>",
		
		//String - Scale label font declaration for the scale label
		scaleFontFamily : "'whitney_htflight_condensed'",
		
		//Number - Scale label font size in pixels	
		scaleFontSize : 12,
		
		//String - Scale label font weight style	
		scaleFontStyle : "normal",
		
		//String - Scale label font colour	
		scaleFontColor : "white",	
		
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,
		
		//String - Colour of the grid lines
		scaleGridLineColor : "white",
		
		//Number - Width of the grid lines
		scaleGridLineWidth : 1,	
		
		//Boolean - Whether the line is curved between points
		bezierCurve : false,
		
		//Boolean - Whether to show a dot for each point
		pointDot : true,
		
		//Number - Radius of each point dot in pixels
		pointDotRadius : 3,
		
		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,
		
		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,
		
		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,
		
		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,
		
		//Boolean - Whether to animate the chart
		animation : true,

		//Number - Number of animation steps
		animationSteps : 60,
		
		//String - Animation easing effect
		animationEasing : "easeOutQuart",

		//Function - Fires when the animation is complete
		onAnimationComplete : null
		
	}

	// var ctpop = document.getElementById("population-chart");
	// if (ctpop) {
	// 	xlabels = [];
	// 	if (document.getElementById("New Zealand")) {
	// 		xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"];
	// 	}
	// 	var data_population = {

	// 		labels : xlabels,
	// 		datasets : [
	// 			{
	// 				fillColor : "rgba(220,220,220,0.5)",
	// 				strokeColor : "rgba(220,220,220,1)",
	// 				pointColor : "rgba(220,220,220,1)",
	// 				pointStrokeColor : "#fff",
	// 				data : [3857700, 3880500, 3948500, 4027200, 4087500, 4133900, 4184600, 4228300, 4268900, 4315800, 4367800, 4405200, 4433100]
	// 			}
	// 		]
	// 	}
	// 	var popChart = new Chart(ctpop.getContext("2d")).Line(data_population,defaults);
	// }
	
	var cticap = document.getElementById("icap-chart");
	if (cticap) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [307.943, 306.277, 312.223, 362.335, 385.948, 369.095, 399.098, 388.673, 333.002, 327.369, 300.289];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2000","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [0.583, 1.5, 4.5, 0.2, 1.367, 0.25, 3.093, 3.2, 3.5, 0.583];
		}
		var data_icap = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var capChart = new Chart(cticap.getContext("2d")).Line(data_icap,defaults);
	}

	var cticap2 = document.getElementById("icap-chart2");
	if (cticap2) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009"];
			ydata = [2850.8, 2850.9, 2739.8, 2799.8, 2825.1, 2987.2, 3081.8, 3175.8, 3323.4, 3187.8];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009"];
			ydata = [3202.8, 3320.2, 3658.5, 3870, 3931.6, 3998.2, 4223.6, 4256.8, 4127.7];
		}
		var data_icap2 = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var capChart2 = new Chart(cticap2.getContext("2d")).Line(data_icap2,defaults);
	}

	var ctstem = document.getElementById("stem-chart");
	if (ctstem) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"];
			ydata = [298, 299, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [51566, 57910, 63358, 71052, 69898, 80360, 85058, 82866, 82114, 81034, 55532, 54240];
		}
		var data_stem = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var stemChart = new Chart(ctstem.getContext("2d")).Line(data_stem,defaults);
	}

	var ctrd = document.getElementById("rd-chart");
	if (ctrd) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2001","2003","2005","2007","2009"];
			ydata = [1.12108, 1.16896, 1.13693, 1.18567, 1.30137];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009"];
			ydata = [0.37273, 0.39433, 0.43617, 0.39614, 0.39964, 0.41183, 0.38612, 0.37019, 0.35059, 0.395];
		}
		var data_rd = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var rdChart = new Chart(ctrd.getContext("2d")).Line(data_rd,defaults);
	}
		
	var ctiprop = document.getElementById("iprop-chart");
	if (ctiprop) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [5.29444, 5.60356, 5.62319, 6.01035, 5.87085, 6.19631, 5.7669, 5.78175, 6.06878, 5.61601, 5.96089];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [3.57373, 3.00467, 3.80583, 3.31286, 3.2008, 3.99957, 3.35261, 3.11961, 3.25923, 2.94326, 3.31397];
		}
		var data_iprop = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var ipropChart = new Chart(ctiprop.getContext("2d")).Line(data_iprop,defaults);
	}

	var ctgdpc = document.getElementById("gdpc-chart");
	if (ctgdpc) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2000", "2001","2002","2003","2007","2008","2009","2010"];
			ydata = [19729, 20294, 21493, 21675, 26674, 28917, 29083, 28635];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2000","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [0.583, 1.5, 4.5, 0.2, 1.367, 0.25, 3.093, 3.2, 3.5, 0.583];
		}
		var data_gdpc = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var gdpcChart = new Chart(ctgdpc.getContext("2d")).Line(data_gdpc,defaults);
	}

	var ctsccorp = document.getElementById("sccorp-chart");
	if (ctsccorp) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [63266, 65590, 68071, 70624, 53512, 48358, 44898, 42447];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [6429, 7038, 7748, 8874, 9403, 10029, 9620, 9682];
		}
		var data_sccorp = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata		
				}
			]
		}
		var sccorpChart = new Chart(ctsccorp.getContext("2d")).Line(data_sccorp,defaults);
	}

	var ctbusiday = document.getElementById("busiday-chart");
	if (ctbusiday) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2001", "2002", "2003", "2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [12, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [58, 58, 58, 58, 58, 58, 27, 27, 28, 13, 13];
		}
		var data_busiday = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata	
				}
			]
		}
		var busidayChart = new Chart(ctbusiday.getContext("2d")).Line(data_busiday,defaults);
	}

	var ctgdpcap = document.getElementById("gdpcap-chart");
	if (ctgdpcap) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2000", "2001", "2002", "2003", "2007","2008","2009","2010"];
			ydata = [19729, 20294, 21493, 21675, 26674, 28917, 29083, 28635];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [6429, 7038, 7748, 8874, 9403, 10029, 9620, 9682];
		}
		var data_gdpcap = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata	
				}
			]
		}
		var gdpcapChart = new Chart(ctgdpcap.getContext("2d")).Line(data_gdpcap,defaults);
	}

	var ctvcinv = document.getElementById("vcinv-chart");
	if (ctvcinv) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2003", "2004", "2005", "2006", "2007","2008","2009","2010","2011","2012","2013"];
			ydata = [12, 26, 24, 33, 46, 29, 18, 20, 15, 20, 14];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"];
			ydata = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
		var data_vcinv = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var vcinvChart = new Chart(ctvcinv.getContext("2d")).Line(data_vcinv,defaults);
	}

	var ctdoluniv = document.getElementById("doluniv-chart");
	if (ctdoluniv) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007","2008","2009", "2011"];
			ydata = [31175, 31571, 31581, 32154, 37882, 39459, 41797, 41973, 39950, 42209, 46163];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = [];
			ydata = [];
		}
		var data_doluniv = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var dolunivChart = new Chart(ctdoluniv.getContext("2d")).Line(data_doluniv,defaults);
	}

	var cttotemp = document.getElementById("totemp-chart");
	if (cttotemp) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = ["2007","2008","2009", "2010", "2011", "2012"];
			ydata = [2.175, 2.189, 2.165, 2.181, 2.216, 2.217];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = [];
			ydata = [];
		}
		var data_totemp = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var totempChart = new Chart(cttotemp.getContext("2d")).Line(data_totemp,defaults);
	}

	var ctearlyentrep = document.getElementById("earlyentrep-chart");
	if (ctearlyentrep) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2001", "2002", "2005", "2006", "2008", "2010", "2011"];
			ydata = [17.9, 12.4, 5.9, 5.3, 13.1, 10.5, 9.6];
		}
		var data_earlyentrep = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var earlyentrepChart = new Chart(ctearlyentrep.getContext("2d")).Line(data_earlyentrep,defaults);
	}

	var ctphdgrad = document.getElementById("phdgrad-chart");
	if (ctphdgrad) {
		xlabels = [];
		ydata = [];
		if (document.getElementById("New Zealand")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("Mexico (Veracruz)")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [288055, 297981, 323600, 320727, 324013, 357931, 389575, 398017, 396281, 424170, 437707, 465174];
		}
		var data_phdgrad = {
			labels : xlabels,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : ydata
				}
			]
		}
		var phdgradChart = new Chart(ctphdgrad.getContext("2d")).Line(data_phdgrad,defaults);
	}
})