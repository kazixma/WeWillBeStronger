
var myChart =document.getElementById("myChart");
myChart.setAttribute("height", document.body.clientHeight);
myChart.setAttribute("width", document.body.clientWidth);
var nameIn = [1,2,3,4,5,6,7];
var dataIn = [];
var num = localStorage.getItem("countsu")
for( var i = num-7 ; i-7 < num ; i++)
{
	if(localStorage.getItem("su"+(i-7)) == null )
	{
		dataIn[i] = 0;
		continue;
	}
	dataIn[i] = localStorage.getItem("su"+(i-7))
}
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