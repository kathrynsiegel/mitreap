//= require Chart

$(document).ready(function() {
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

	var ctpop = document.getElementById("population-chart");
	if (ctpop) {
		var data_population = {
			labels : ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [3857700, 3880500, 3948500, 4027200, 4087500, 4133900, 4184600, 4228300, 4268900, 4315800, 4367800, 4405200, 4433100]
				}
			]
		}
		var popChart = new Chart(ctpop.getContext("2d")).Line(data_population,defaults);
	}
	
	var cticap = document.getElementById("icap-chart");
	if (cticap) {
		var data_icap = {
			labels : ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [307.943, 306.277, 312.223, 362.335, 385.948, 369.095, 399.098, 388.673, 333.002, 327.369, 300.289]
				}
			]
		}
		var capChart = new Chart(cticap.getContext("2d")).Line(data_icap,defaults);
	}

	var cticap2 = document.getElementById("icap-chart2");
	if (cticap2) {
		var data_icap2 = {
			labels : ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [2850.8, 2850.9, 2739.8, 2799.8, 2825.1, 2987.2, 3081.8, 3175.8, 3323.4, 3187.8]
				}
			]
		}
		var capChart2 = new Chart(cticap2.getContext("2d")).Line(data_icap2,defaults);
	}

	var ctstem = document.getElementById("stem-chart");
	if (ctstem) {
		var data_stem = {
			labels : ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [298, 299, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]
				}
			]
		}
		var stemChart = new Chart(ctstem.getContext("2d")).Line(data_stem,defaults);
	}

	var ctrd = document.getElementById("rd-chart");
	if (ctrd) {
		var data_rd = {
			labels : ["2001","2003","2005","2007","2009"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [1.12108, 1.16896, 1.13693, 1.18567, 1.30137]
				}
			]
		}
		var rdChart = new Chart(ctrd.getContext("2d")).Line(data_rd,defaults);
	}
		
	var ctiprop = document.getElementById("iprop-chart");
	if (ctiprop) {
		var data_iprop = {
			labels : ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [5.29444, 5.60356, 5.62319, 6.01035, 5.87085, 6.19631, 5.7669, 5.78175, 6.06878, 5.61601, 5.96089]
				}
			]
		}
		var ipropChart = new Chart(ctiprop.getContext("2d")).Line(data_iprop,defaults);
	}
})