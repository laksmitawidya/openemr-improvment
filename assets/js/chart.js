$(document).ready(function() {
	
	// Bar Chart

	var barChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: 'rgba(0, 158, 251, 0.5)',
			borderColor: 'rgba(0, 158, 251, 1)',
			borderWidth: 1,
			data: [35, 59, 80, 81, 56, 55, 40]
		}, {
			label: 'Dataset 2',
			backgroundColor: 'rgba(255, 188, 53, 0.5)',
			borderColor: 'rgba(255, 188, 53, 1)',
			borderWidth: 1,
			data: [28, 48, 40, 19, 86, 27, 90]
		}]
	};

	var ctx = document.getElementById('bargraph');
	if(ctx){
		ctx.getContext('2d');
		window.myBar = new Chart(ctx, {
			type: 'bar',
			data: barChartData,
			options: {
				responsive: true,
				legend: {
					display: false,
				}
			}
		});
	}


	// Bar Chart Cash Accounting

	var cashflowData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [{
			label: 'Income',
			backgroundColor: 'rgba(0, 255, 0, 0.5)',
			borderColor: 'rgba(0, 255, 0, 1)',
			borderWidth: 1,
			data: [35000, 59000, 80000, 81000, 56000, 55000, 40000]
		}, {
			label: 'Expense',
			backgroundColor: 'rgba(255, 0, 0, 0.5)',
			borderColor: 'rgba(255, 0, 0, 1)',
			borderWidth: 1,
			data: [28000, 48000, 40000, 19000, 86000, 27000, 90000]
		}]
	};

	var ctx_cashflow = document.getElementById('bargraph-income-expense');
	if(ctx_cashflow){
		ctx_cashflow.getContext('2d');
		window.myBar = new Chart(ctx_cashflow, {
			type: 'bar',
			data: cashflowData,
			options: {
				responsive: true,
				legend: {
					display: false,
				},
			}
		});
	}

	//Doughnut expense pending Chart
	var expenseStatusData = {
		labels: [
			'Approved',
			'Pending',

		],
		datasets: [{
			label: 'Status',
			data: [1, 1],
			backgroundColor: [
				'rgba(0, 255, 0, 0.5)',
				'rgba(255, 0, 0, 0.5)',
			],
			borderColor:[
				'rgba(0, 255, 0, 0.5)',
				'rgba(255, 0, 0, 0.5)',
			],
			hoverOffset: 4
		}]
	}; 

	var ctx_expenseStatus = document.getElementById('doughnut-expense-status');
	if(ctx_expenseStatus){
		ctx_expenseStatus.getContext('2d');
		window.myBar = new Chart(ctx_expenseStatus, {
			type: 'doughnut',
			data: expenseStatusData,
			options: {
				responsive: true,
				// legend: {
				// 	display: false,
				// },
			}
		});
	}

	

	// Line Chart

	var lineChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [{
			label: "My First dataset",
			backgroundColor: "rgba(0, 158, 251, 0.5)",
			data: [100, 70, 20, 100, 120, 50, 70, 50, 50, 100, 50, 90]
		}, {
			label: "My Second dataset",
			backgroundColor: "rgba(255, 188, 53, 0.5)",
			fill: true,
			data: [28, 48, 40, 19, 86, 27, 20, 90, 50, 20, 90, 20]
		}]
	};
	
	var linectx = document.getElementById('linegraph');
	if(linectx){
		linectx.getContext('2d');
		window.myLine = new Chart(linectx, {
			type: 'line',
			data: lineChartData,
			options: {
				responsive: true,
				legend: {
					display: false,
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				}
			}
		});
	}


	// Line Chart INCOME OUTCOME

	// var lineChartData = {
	// 	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	// 	datasets: [{
	// 		label: "Income",
	// 		backgroundColor: "red",
	// 		data: [100000, 70000, 20000, 100000, 120000, 50000, 70000, 50000, 50000, 100000, 50000, 90000]
	// 	}, {
	// 		label: "My Second dataset",
	// 		backgroundColor: "rgba(255, 188, 53, 0.5)",
	// 		fill: true,
	// 		data: [28, 48, 40, 19, 86, 27, 20, 90, 50, 20, 90, 20]
	// 	}]
	// };
	
	// var linectx = document.getElementById('linegraph').getContext('2d');
	// window.myLine = new Chart(linectx, {
	// 	type: 'line',
	// 	data: lineChartData,
	// 	options: {
	// 		responsive: true,
	// 		legend: {
	// 			display: false,
	// 		},
	// 		tooltips: {
	// 			mode: 'index',
	// 			intersect: false,
	// 		}
	// 	}
	// });
	
	// Bar Chart 2
	
    barChart();
    
    $(window).resize(function(){
        barChart();
    });
    
    function barChart(){
        $('.bar-chart').find('.item-progress').each(function(){
            var itemProgress = $(this),
            itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            itemProgress.css('width', itemProgressWidth);
        });
    };
});