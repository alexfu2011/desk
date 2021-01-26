var options = {
	series: [
	{
		name: "Patients",
		data: [10, 15, 12, 20, 18, 26, 24, 25, 20, 25, 22, 30]
	},
	{
		name: "Consultations",
		data: [15, 10, 17, 15, 23, 21, 30, 20, 26, 20, 28, 25]
	}
	],
	chart: {
		height: 300,
		type: 'line',
		zoom: {
			enabled: false,
		},
		dropShadow: {
			enabled: true,
			color: '#000',
			top: 18,
			left: 7,
			blur: 16,
			opacity: 0.2
		},
		toolbar: {
			show: false
		}
	},
	colors: ['#f0746c', '#255cd3'],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: [3,3],
		curve: 'smooth'
	},
	grid: {
		show: false,
	},
	markers: {
		colors: ['#f0746c', '#255cd3'],
		size: 5,
		strokeColors: '#ffffff',
		strokeWidth: 2,
		hover: {
			sizeOffset: 2
		}
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		labels:{
			style:{
				colors: '#8c9094'
			}
		}
	},
	yaxis: {
		min: 0,
		max: 35,
		labels:{
			style:{
				colors: '#8c9094'
			}
		}
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		floating: true,
		offsetY: 0,
		labels: {
			useSeriesColors: true
		},
		markers: {
			width: 10,
			height: 10,
		}
	}
};

var chart = new ApexCharts(document.querySelector("#activities-chart"), options);
chart.render();
