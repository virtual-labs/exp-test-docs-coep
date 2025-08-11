function BoilerGraph(arrayJson)
{
	$("#checkDiv").prop("hidden",false);
//console.log(arrayJson);
	var htm=''
//	+'<div class="container mt-5">'
	+' <h2 class="text-center text-light mb-4"></h2>'
	+' <div class="row" id="graphDiv">'
//	  <div class="row mb-3">
//    <!-- Checkboxes for toggling series -->
	+'  <div class="col-md-12 text-center" id="checkDiv" >'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="0" checked> <b>TT01</b></label>'
	+'      <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="1" checked><b> TT02</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="2" checked> <b>TT03</b></label>'
	+'      <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="3" checked><b> TT04</b></label>'
	+'      <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="4" checked><b> TT05</b></label>'
	+'      <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="5" checked><b> TT06</b></label>'
	
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="6" checked><b> FT1</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="7" checked><b> FT2</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="8" checked> <b>FT3</b></label>'
	
	+'   <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="9" checked> <b>PT</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="10" checked><b> FCV</b></label>'
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="11" checked> <b>SCR</b></label>'
	
	+'   <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="12" checked> <b>MSV1</b></label>'
	+'    <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="13" checked><b> MSV2</b></label>'
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="14" checked> <b>PY1</b></label>'
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="15" checked> <b>PY2</b></label>'
	+'     <label class="mr-3"><input type="checkbox" class="series-toggle" data-series="16" checked> <b>LT</b></label>'
	+' </div>'

	
	+'</div>'
	+'   <div class="col-md-12">'
	+'        <div id="marketChart" style="width:100%; height: 100%;"></div>'
	
	+'    </div>'
//	+'   <div class="col-md-2"> </div>'
	+'</div>'
//	+'</div>'
	$("#bodyTrends").html(htm);
//$("#buttonDiv").html("");
$('#download').on('click', function() {
	
//	$('#saveAsJpg').prop("hidden",true);
    html2canvas(document.querySelector("#marketChart")).then(canvas => {
        // Append the screenshot canvas to the body
        document.body.appendChild(canvas);
        $("canvas").css("display","none");
        // Optionally save the screenshot as an image
        var link = document.createElement('a');
        link.download = 'BoilerHeatExchangerGraph.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

		const allValues = Object.values(arrayJson)
		    .flat()
		    .filter(value => value !== undefined && value !== null);

		// Find the minimum value
		const minValueY = Math.min(...allValues);

		console.log("Minimum value:", minValueY);
		        // Initialize the chart
		        var chart = Highcharts.chart('marketChart', {
		            chart: {
		                type: 'line',
		                backgroundColor: '#222222',
		                animation: true,
		                marginRight: 10
		            },
		            exporting: { enabled: false },
					credits: { enabled: false},
		            title: {
		                text: 'Boiler Heat Exchanger',
		                style: { color: '#ffffff', fontSize: '20px' }
		            },
		            xAxis: {
		                type: 'linear',
		                title: {
		                    text: 'TIME',
		                    style: { color: '#ffffff' }
		                },
						// min: yMin, // Use calculated y-axis min
						//max: yMax,
		                gridLineColor: '#444444',
		                labels: { style: { color: '#ffffff' } }
		            },
		            yAxis: {
					
		                title: {
		                    text: 'READINGS',
		                    style: { color: '#ffffff' }
		                },
						 min: minValueY, // Use calculated y-axis min
						//max: yMax,
		                gridLineColor: '#444444',
		                labels: { style: { color: '#ffffff' } }
		            },
		            legend: {
		                enabled: true,
		                itemStyle: { color: '#ffffff' },
		                itemHoverStyle: { color: '#dddddd' }
		            },
		            tooltip: {
		                shared: true,
		                backgroundColor: 'rgba(0,0,0,0.75)',
		                style: { color: '#ffffff' },
		                valueDecimals: 3
		            },
		            
		            series: [
		                {
		                    name: 'TT01',
		                    data: [],
		                    color: '#FF5733'
		                },
		                {
		                    name: 'TT02',
		                    data: [],
		                    color: '#33FF57'
		                },
		                {
		                    name: 'TT03',
		                    data: [],
		                    color: '#3357FF'
		                },
						{
		                    name: 'TT04',
		                    data: [],
		                    color: '#FF33A6'
		                },
		                {
		                    name: 'TT05',
		                    data: [],
		                    color: '#FFDB33'
		                },
		                {
		                    name: 'TT06',
		                    data: [],
		                    color: '#A633FF'
		                },
		                {
		                    name: 'FT1',
		                    data: [],
		                    color: '#33FFF3'
		                },
		                {
		                    name: 'FT2',
		                    data: [],
		                    color: '#FF8C33'
		                },
		                {
		                    name: 'FT3',
		                    data: [],
		                    color: '#33FF8C'
		                },
		                {
		                    name: 'PT',
		                    data: [],
		                    color: '#8C33FF'
		                },
						 
		                {
		                    name: 'FCV',
		                    data: [],
		                    color: '#FF3333'
		                },
		                {
		                    name: 'SCR',
		                    data: [],
		                    color: '#00b3b3'
		                },
						  {
		                    name: ' MSV1',
		                    data: [],
		                    color: '#33FF33'
		                },
		                {
		                    name: ' MSV2',
		                    data: [],
		                    color: '#3333FF'
		                },
		                {
		                    name: 'PY1',
		                    data: [],
		                    color: '#FFC733'
		                },
		                {
		                    name: 'PY2',
		                    data: [],
		                    color: '#33A6FF'
		                },
		                {
		                    name: 'LT',
		                    data: [],
		                    color: '#808080'
		                }
		                
		                
						
		            ],

		            credits: {
		                enabled: false
		            }
		        });
		        
		        // Initialize data and dynamically update
		        let currentIndex = 0;

		        setInterval(function () {
		            if (currentIndex < arrayJson.time.length) {
		                const currentTime = arrayJson.time[currentIndex];
		                
		                const tt1 = arrayJson.TT1[currentIndex];
		                const tt2 = arrayJson.TT2[currentIndex];
		                const tt3 = arrayJson.TT3[currentIndex];
						 const tt4 = arrayJson.TT4[currentIndex];
		                const tt5 = arrayJson.TT5[currentIndex];
		                const tt6 = arrayJson.TT6[currentIndex];
		                
						const ft1 = arrayJson.FT1[currentIndex];
		                const ft2 = arrayJson.FT2[currentIndex];
		                const ft3 = arrayJson.FT3[currentIndex];
		                
		                const PT = arrayJson.PT[currentIndex];
		                const FCV = arrayJson.FCR[currentIndex];
		                const SCR = arrayJson.scr[currentIndex];
		                
		                const MOV1 = arrayJson.MSV1[currentIndex];
		                const MOV2 = arrayJson.MSV2[currentIndex];
		                const PY1 = arrayJson.FI[currentIndex];
		                const PY2 = arrayJson.FI2[currentIndex];
		                const LT = arrayJson.LT[currentIndex];
		                
		                // Add new points to the chart
		                chart.series[0].addPoint(["TIME : "+currentTime, tt1], true, false);
		                chart.series[1].addPoint(["TIME : "+currentTime, tt2], true, false);
		                chart.series[2].addPoint(["TIME : "+currentTime, tt3], true, false);
						 chart.series[3].addPoint(["TIME : "+currentTime, tt4], true, false);
		                chart.series[4].addPoint(["TIME : "+currentTime, tt5], true, false);
		                chart.series[5].addPoint(["TIME : "+currentTime, tt6], true, false);
						 chart.series[6].addPoint(["TIME : "+currentTime, ft1], true, false);
		                chart.series[7].addPoint(["TIME : "+currentTime, ft2], true, false);
		                chart.series[8].addPoint(["TIME : "+currentTime, ft3], true, false);
		                
		                chart.series[9].addPoint(["TIME : "+currentTime, PT], true, false);
		                chart.series[10].addPoint(["TIME : "+currentTime, FCV], true, false);
		                chart.series[11].addPoint(["TIME : "+currentTime, SCR], true, false);
						 chart.series[12].addPoint(["TIME : "+currentTime, MOV1], true, false);
		                chart.series[13].addPoint(["TIME : "+currentTime, MOV2], true, false);
		             
						 chart.series[14].addPoint(["TIME : "+currentTime, PY1], true, false);
		                chart.series[15].addPoint(["TIME : "+currentTime, PY2], true, false);
		                chart.series[16].addPoint(["TIME : "+currentTime, LT], true, false);
		                currentIndex++;
		                console.log("currentIndex",currentIndex);
		            }
		            if(currentIndex==131){
		            	$("#download,#checkDiv").prop("hidden",false);
		            }
		            
		        }, 1000);

		     // Toggle series visibility based on checkbox
		     document.querySelectorAll('.series-toggle').forEach(checkbox => {
		     checkbox.addEventListener('change', function () {
		         const seriesIndex = parseInt(this.dataset.series);
		         const series = chart.series[seriesIndex];
		         if (this.checked) {
		             series.show();
		         } else {
		             series.hide();
		         }
		     });
//	            
//const allValues = Object.values(dataJson)
//.flat()
//.filter(value => value !== undefined && value !== null);
//
//const minValueY = Math.min(...allValues);
//
//var chart = Highcharts.chart('marketChart', {
//chart: {
//    type: 'line',
//    backgroundColor: '#222222',
//},
//title: {
//    text: 'Spray Dryer',
//    style: { color: '#ffffff', fontSize: '20px' }
//},
//xAxis: {
//    categories: dataJson.time,
//    title: {
//        text: 'TIME',
//        style: { color: '#ffffff' }
//    },
//    gridLineColor: '#444444',
//    labels: { style: { color: '#ffffff' } }
//},
//yAxis: {
//    title: {
//        text: 'READINGS',
//        style: { color: '#ffffff' }
//    },
//    min: minValueY,
//    gridLineColor: '#444444',
//    labels: { style: { color: '#ffffff' } }
//},
//legend: {
//    enabled: true,
//    itemStyle: { color: '#ffffff' },
//    itemHoverStyle: { color: '#dddddd' }
//},
//tooltip: {
//    shared: true,
//    backgroundColor: 'rgba(0,0,0,0.75)',
//    style: { color: '#ffffff' },
//    valueDecimals: 2
//},
//series: [
//    { name: 'TT01', data: dataJson.TT01, color: '#FF5733' },
//    { name: 'TT02', data: dataJson.TT02, color: '#33FF57' },
//    { name: 'FT', data: dataJson.FT, color: '#3357FF' },
//    { name: 'NT', data: dataJson.NT, color: '#ff9999' },
//    { name: 'P1_SPEED', data: dataJson.P1_SPEED, color: '#cc9900' },
//    { name: 'FD_SPEEDPer', data: dataJson.FD_SPEEDPer, color: '#00b3b3' },
//    { name: 'ID_SPEEDPer', data: dataJson.ID_SPEEDPer, color: '#9900ff' },
//    { name: 'Heater', data: dataJson.HeaterPer, color: '#ff00ff' }
//],
//credits: {
//    enabled: false
//}
//});
//
//// Toggle series visibility based on checkbox
//document.querySelectorAll('.series-toggle').forEach(checkbox => {
//checkbox.addEventListener('change', function () {
//    const seriesIndex = parseInt(this.dataset.series);
//    const series = chart.series[seriesIndex];
//    if (this.checked) {
//        series.show();
//    } else {
//        series.hide();
//    }
//});
});         
		        
		        
}
