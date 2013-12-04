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
		else if (document.getElementById("Finland")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [1395.907, 1385.309, 1311.435, 1291.33, 1520.217, 1464.146, 1644.956, 1598.218, 1500.341, 1485.486, 1509.529];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [4.806, 7.976, 29.49, 69.665, 126.292, 167.7, 196.416, 214.676, 232.038, 269.593, 276.317];
		}
		else if (document.getElementById("Spain (Andalusia)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [43.271, 64.408, 74.263, 65.688, 83.924, 103.829, 108.655, 130.269, 159.463, 209.216, 178.991];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [2557, 2285.7, 2166.19, 2214.1, 2316.43, 2480.01, 2667.23, 2414.56, 2207.5];
		}
		else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [18.25, 16.976, 39.556, 78.505, 78.471, 133.783, 176.529, 225.126, 233.301, 396.264, 515.263];
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
		else if (document.getElementById("Finland")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [4374, 4430, 5098, 5652, 7064, 6878, 7040, 7612, 14068, 6802, 7978, 8234];
		}
		else if (document.getElementById("Turkey(Istanbul")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [28634, 32556, 33986, 33792, 34690, 36958, 38918, 44462, 49156, 53176, 50478, 61862];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [43358, 45506, 43656, 43214, 42100, 40800, 41228, 39282, 42210, 43222, 45728, 50748];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = ["2000","2001","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [339330, 346730,395386, 347052, 401470, 402214, 406392, 411534, 421012, 443386, 468266];
		}
		else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = []; //data not available
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
		else if(document.getElementById("Finland")) {
			xlabels = ["2000", "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [3.8789, 3.93378, 3.7007, 3.47143, 3.47552, 3.47693, 3.45016, 3.43914, 3.36269, 3.31616, 3.34552];
		}
		else if(document.getElementById("Turkey(Istanbul")) {
			xlabels = ["2000", "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [0.84343, 0.84902, 0.72518, 0.72241, 0.58016, 0.59104, 0.51831, 0.48311, 0.52594, 0.53779, 0.47909];
		}
		else if(document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2000", "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [1.21, 1.1, 1.03, 1.02, 0.89, 0.84, 0.76, 0.85, 0.6, 0.59, 0.65];
		}
		else if(document.getElementById("USA(Boston)")) {
			xlabels = ["2000", "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [5.34, 5.62, 5.55, 6.97, 6.1, 5.49, 5.15, 5.25, 4.96, 5.19, 4.76];
		}
		else if(document.getElementById("USA(Boston)")) {
			xlabels = ["2001","2003","2005", "2007","2009"];
			ydata = [1.30137, 1.18567, 1.13693, 1.16896, 1.12108];
		}
		else if(document.getElementById("China (Hangzhou)")) {
			xlabels = ["2000", "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [1.46985811605583, 1.39582326192777, 1.38830174967547, 1.32475805326559, 1.229891736402, 1.1335578415406, 1.07003333258541, 0.950690802972961, 0.902751600060475];
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
		else if (document.getElementById("Finland")) {
			xlabels = ["2000","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [36110, 35624, 38173, 36228, 33164, 30764, 29911, 27662, 27562, 26576, 25695];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010", "2011"];
			ydata = [14615.53, 13577.11, 12460.79, 13107.55, 12891.57, 12116.07, 11116.96, 9335.53, 8255.23, 7803.01, 12547, 13575];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [24087, 24576, 25691, 25122, 23692, 21427, 20144, 18992, 18108, 16756, 15763];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [67851.49, 65735.68, 66656.22, 66407.99, 65489.97, 64868.35, 64460.52, 63723.82, 63151.82, 63022.97, 62483.47];
		}
		else if (document.getElementById("New Zealand")) {
			xlabels = ["2000","2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010"];
			ydata = [32219.4635654966, 30933.3180513709, 29813.8401989582, 29700.677522554, 29008.3433237872, 28798.9890515837, 27068.1999358143, 25308.240937781, 24634.315207785, 23555.5265441434, 22904.0327111315, 22111.507515514, 21135.8483308162];
		}
		else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2005","2006","2007","2008","2009","2010", "2011"];
			ydata = [14177, 12840, 11569, 10771, 10033, 8953, 7809];
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
			else if (document.getElementById("Finland")) {
			xlabels = ["2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [12742, 12391, 12254, 14091, 13948, 10247, 8426, 7711];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2004","2005","2006","2007","2008"];
			ydata = [45569, 50658, 48012, 42671, 36647];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [429363, 379628, 340170, 326013, 381189, 346968, 355520, 331265];
		}
		else if (document.getElementById("New Zealand")) {
			xlabels = ["2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [42447, 44898, 48358, 53512, 70624, 68071, 65590, 63266];
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
		else if (document.getElementById("Finland")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [14, 14, 14, 14, 14, 14, 14, 31, 31, 31, 31];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [6, 6, 6, 6, 6, 6, 6, 38, 38, 38, 38];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [47, 47, 47, 47, 47, 47, 114, 114, 114, 114, 114];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
		}
		else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [37, 37, 40, 35, 35, 48, 48, 48, 48, 48, 48];
		}
		else if (document.getElementById("New Zealand")) {
			xlabels = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"];
			ydata = [1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12];
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
		if (document.getElementById("Finland")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007","2008","2009","2010"];
			ydata = [25695, 26576, 27562, 27662, 29911, 30764, 33164, 36228, 38173, 35624, 36110];
		}
		if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007","2008","2009","2010", "2011"];
			ydata = [13575, 12547, 7803.01, 8255.23, 9335.53, 11116.96, 12116.07, 12891.57, 13107.55, 12460.79, 13577.11, 14615.53];
		}
		if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011"];
			ydata = [24095, 25483, 26630, 27694, 29653, 31022, 33357, 34258, 34605, 33336, 34215];
		}
		if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011"];
			ydata = [15763, 16756, 18108, 18992, 20144, 21427, 23692, 25122, 25691, 24576, 24087];
		}
		if (document.getElementById("USA(Boston)")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011"];
			ydata = [62483.47, 63022.97, 63151.82, 63723.82, 64460.52, 64868.35, 65489.97, 66407.99, 66656.22, 65735.68, 67851.49];
		}
		if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2005", "2006","2007","2008","2009","2010", "2011"];
			ydata = [7809, 8953, 10033, 10771, 11569, 12840, 14177];
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
		else if (document.getElementById("Finland")) {
			xlabels = ["2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011", "2012", "2013"];
			ydata = [267, 190, 229, 260, 185, 103, 39, 71, 77, 53, 48];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011", "2012", "2013"];
			ydata = [2, 2, 4, 8, 16, 11, 6, 20, 27, 26, 10];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011", "2012", "2013"];
			ydata = [13, 11, 12, 15, 11, 19, 12, 11, 12, 22, 12];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011", "2012", "2013"];
			ydata = [9, 2, 4, 2, 3, 2, 4, 7, 5, 3, 3];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = ["2012"];
			ydata = [26652.4];
		}
		else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2003", "2004", "2005", "2006","2007","2008","2009","2010", "2011", "2012", "2013"];
			ydata = [2, 2, 4, 4, 8, 12, 17, 17, 12, 9, 10];
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
				else if (document.getElementById("Finland")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("China (Hangzhou)")) {
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
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = [];
			ydata = [];
		}
		else if (document.getElementById("Finland")) {
			xlabels = ["2007", "2008", "2009", "2010", "2011", "2012"];
			ydata = [2.492, 2.531, 2.457, 2.447, 2.474, 2.483];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2007", "2008", "2009", "2010", "2011", "2012"];
			ydata = [20.356, 20.258, 18.888, 18.457, 18.105, 17.282];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2007", "2008", "2009", "2010", "2011", "2012"];
			ydata = [29.228, 29.44, 28.96, 29.019, 29.166, 29.519];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2007", "2008", "2009", "2010", "2011", "2012"];
			ydata = [146.05, 145.373, 139.894, 139.077, 139.882, 142.469];
		}
		else if (document.getElementById("China (Hangzhou)")) {
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
		else if (document.getElementById("Finland")) {
			xlabels = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [8.2, 4.6, 3.1, 4.4, 4.9, 5, 6.9, 7.3, 5.2, 5.7, 6.3];
		}
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2006", "2007", "2008", "2010", "2011"];
			ydata = [6.1, 5.6, 6, 8.6, 11.9];
		}
		else if (document.getElementById("UK(Scotland)")) {
			xlabels = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [6.5, 5.4, 6.4, 6.2, 6.2, 5.8, 5.5, 5.9, 5.7, 6.4, 7.3];
		}
		else if (document.getElementById("Spain (Andalucia)")) {
			xlabels = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [6.3, 4.6, 6.6, 5.1, 5.7, 7.3, 7.6, 7, 5.1, 4.3, 5.8];
		}
		else if (document.getElementById("USA(Boston")) {
			xlabels = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [11.1, 10.6, 11.9, 11.3, 12.4, 10, 9.6, 10.8, 8, 7.6, 12.3];
		}
			else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2002", "2003", "2005", "2006", "2007", "2009", "2010", "2011"];
			ydata = [12.1, 12.9, 13.7, 16, 16.4, 18.8, 14.4, 24];
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
		else if (document.getElementById("Turkey (Istanbul)")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [131212, 156404, 159380, 165469, 215603, 180856, 235884, 261070, 280875, 303253, 341558, 321720];
		}
		else if (document.getElementById("Finland")) {
			xlabels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [27782, 30686, 34253, 37486, 38819, 39119, 40416, 43279, 60023, 44870, 50890, 51380];
		}
		else if (document.getElementById("UK (Scotland)")) {
			xlabels = ["2000", "2001", "2003", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [393399.711, 425733.223, 452707.5739, 498184.95, 514135.13, 521486.57, 536723, 538279, 575197, 61894];
		}
		else if (document.getElementById("USA(Boston)")) {
			xlabels = ["2000", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011"];
			ydata = [1837257, 1987792, 2089901, 2153802, 2223029, 2279379, 234517, 2417872, 2501597, 2610313];
		}
		else if (document.getElementById("China (Hangzhou)")) {
			xlabels = ["2010", "2011"];
			ydata = [3719067, 4280780];
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