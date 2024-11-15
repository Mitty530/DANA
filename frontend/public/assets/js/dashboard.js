(function ($) {
    "use strict";
    /*=================================
        JS Index Here
    ==================================*/
    
    var activeDrivers = {
    chart: {
        type: 'area',
		height: '300px',
		toolbar: {
			show: false,
		},
    },
	dataLabels: {
		enabled: false
	},
    series: [{
        name: 'sales',
        data: [130,180,110,250,100]
    }],
    xaxis: {
        categories: ['Mon','Tue','Wed','Thu','Fri']
    },
	grid: {
		show: true,
		borderColor: '#E5E5E5',
		strokeDashArray: 4,
		position: 'back',
		xaxis: {
			lines: {
				show: false
			}
		},   
		yaxis: {
			lines: {
				show: true
			}
		},  
	},
	stroke: {
		show: true,
		curve: 'smooth',
		lineCap: 'butt',
		colors: undefined,
		width: 2,
		dashArray: 0,      
	},
	fill: {
		colors: ['#0066FC', 'transparent'],
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.6,
			opacityTo: 0.7,
			stops: [0, 90, 100]
		}
	  }
    }

	if ($('#chart1').length > 0) {
		var chart1 = new ApexCharts(document.querySelector("#chart1"), activeDrivers);
    	chart1.render();
	};
    
    

	// Chart 2 ---------------------------
    var activePassengers = {
    chart: {
        type: 'area',
		height: '300px',
		toolbar: {
			show: false,
		},
    },
	dataLabels: {
		enabled: false
	},
    series: [{
        name: 'sales',
        data: [200,150,200,100,180]
    }],
    xaxis: {
        categories: ['Mon','Tue','Wed','Thu','Fri']
    },
	grid: {
		show: true,
		borderColor: '#E5E5E5',
		strokeDashArray: 4,
		position: 'back',
		xaxis: {
			lines: {
				show: false
			}
		},   
		yaxis: {
			lines: {
				show: true
			}
		},  
	},
	stroke: {
		show: true,
		curve: 'smooth',
		lineCap: 'butt',
		colors: undefined,
		width: 2,
		dashArray: 0,      
	},
	fill: {
		colors: ['#0066FC', 'transparent'],
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.6,
			opacityTo: 0.7,
			stops: [0, 90, 100]
		}
	  }
    }
    
	if ($('#chart2').length > 0) {
		var chart2 = new ApexCharts(document.querySelector("#chart2"), activePassengers);
    	chart2.render();
	};

	// Trip Chart ---------------------------
    var tripChart = {
	chart: {
		type: 'area',
		height: '300px',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		name: 'sales',
		data: [100,135,100,175,130,100,180,150,230,120,140,100]
	}],
	xaxis: {
		categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	},
	grid: {
		show: true,
		borderColor: '#E5E5E5',
		strokeDashArray: 4,
		position: 'back',
		xaxis: {
			lines: {
				show: false
			}
		},   
		yaxis: {
			lines: {
				show: true
			}
		},  
	},
	stroke: {
		show: true,
		curve: 'smooth',
		lineCap: 'butt',
		colors: undefined,
		width: 2,
		dashArray: 0,      
	},
	fill: {
		colors: ['#0066FC', 'transparent'],
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.6,
			opacityTo: 0.7,
			stops: [0, 90, 100]
		}
		}
	}

	if ($('#tripChart').length > 0) {
		var chart2 = new ApexCharts(document.querySelector("#tripChart"), tripChart);
		chart2.render();
	};

	var chartGender = {
		series:[50, 50],
		labels: ['Male', 'Female'],
		markers: {
            fillColors: ["#0066FC","#73DC96"],
		},
		chart: {
			type: 'donut',
		},
		plotOptions: {
			pie: {
			  startAngle: 0,
			  endAngle: 360,
			  donut:{
				size: "90",
				labels: {
					show: false,
				  total: {
					show: false,
					showAlways: false
			}}
			  },
			  dataLabels: {
				offset: 0,
				enabled: false,
			  }
			},
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			position: 'bottom'
		},
		options: {
			chart: {
				width: 216
			},
			legend: {
				position: 'bottom'
			}
		}
	};

	if ($('#chartGender').length > 0) {
		var chart = new ApexCharts(document.querySelector("#chartGender"), chartGender);
		chart.render();
	};

	/* Masonary Active ------------------------*/

	$(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
    });
    
	/* Dashboard Toggle Menu ------------------------*/
	function popupSideMenu($sideMenu, $toggleBtn,  $toggleCls) {
        // Sidebar Popup
        $($toggleBtn).on('click', function (e) {
        	e.preventDefault();
        	$($sideMenu).toggleClass($toggleCls);
        	$($toggleBtn).toggleClass($toggleCls);
        });
    };
    popupSideMenu('.header-dashboard', '.toggle-dashboard', 'show');
  
    /*----------- 00. Right Click Disable ----------*/
    // window.addEventListener('contextmenu', function (e) {
    //   // do something here... 
    //   e.preventDefault();
    // }, false);
  
  
    /*----------- 00. Inspect Element Disable ----------*/
    // document.onkeydown = function (e) {
    //   if (event.keyCode == 123) {
    //     return false;
    //   }
    //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    //     return false;
    //   }
    //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    //     return false;
    //   }
    //   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    //     return false;
    //   }
    //   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    //     return false;
    //   }
    // }
   
})(jQuery);