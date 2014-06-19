
function drawChart(canvasName, name) {
	var myChart =document.getElementById(canvasName);
	//myChart.setAttribute("height", 1000);
	//myChart.setAttribute("width", 1000);
	var nameIn = ["","","","","","","Latest"];
	var dataIn = [];
	var num = parseInt(localStorage.getItem("count" + name))
	for( var i = num - 1 ; i > num - 8 ; i--)
	{
		if(localStorage.getItem(name+(i)) == null )
		{
			dataIn.unshift(0);
		} else {
			dataIn.unshift(localStorage.getItem(name+(i)))
		}
	}
	console.log(dataIn);
	var data = {
		labels : [],
		datasets : [
		
			{
				fillColor : "rgba(151,187,205,1)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : []
			}
		]
	}
	for(var i=0;i<nameIn.length;i++)
	{
		data.labels[i] = nameIn[i];
		data.datasets[0].data[i] = dataIn[i];
	}
	var ctx = myChart.getContext("2d");
	var myNewChart = new Chart(ctx).Line(data);
}