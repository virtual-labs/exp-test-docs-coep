var startCount1 = 0;
var datasheetCount1 = 0;
var trendsCount1 = 0;
var reading4 = {};
reading4.sensor = "Vacuum";
 let vacuumsensorData = [];

function vacuumSensorMimic() {
	hookUpPhase++;
	$("#hookUpSelect").prop("disabled", true);
	timerMasterJson.PressureMimic = $("#counter").text();
	//	console.log(timerMasterJson);
	seconds = 0;
	updateCounter();

	$("#Header").html("	<center><span >VACUUM SENSOR - SIMULATION</span></center>");

	htm = ''
		+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+ '<center><span >PROCESS MONITORING PANEL</span></center>'
		+ '</div>'

		+ '<div class="row">'
		+ '<div class="col-sm-6">'
		+ '<button id="startBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+ '</div>'
		+ '<div class="col-sm-6">'
		//		+'<button id="resetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" >Reset</button>'
		+ '</div>'
		+ '</div>'
		//		+'<div class="row">'
		//		+'<div class="col-sm-6">'
		//		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		//		+'</div>'
		//		+'<div class="col-sm-6">'
		//		+'<button type="button" class="btn btn-danger" id="graph" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends1" disabled>Trends</button>'
		//		+'</div>'
		//		+'</div>'
		+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+ '<center><span >READINGS</span></center>'
		+ '</div>'
		+ '<div class="row conf" >'
		+ '<table class="table table-bordered">'
		+ ' <thead>'

		+ '</thead>'
		+ '<tbody>'
		+ '  <tr>'
		+ ' <td><label><b>CV</b></label></td>'
		+ ' <td><label class="PMCValue" id="cv">0</label>%</td>'
		+ '  </tr>'
		+ ' <tr>'
		+ '   <td><label><b>S1 </b></label></td>'
		+ '   <td><label class="PMCValue" id="s1">0</label>mBar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S2</b></label></td>'
		+ ' <td><label class="PMCValue" id="s2">0</label>mBar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S3 </b></label></td>'
		+ ' <td><label class="PMCValue" id="s3">0</label>mBar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S4</b></label></td>'
		+ ' <td><label class="PMCValue" id="s4">0</label>mBar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S5</b></label></td>'
		+ ' <td><label class="PMCValue" id="s5">0</label>mBar</td>'
		+ '  </tr>'


		+ '</tbody>'
		+ '</table>'

		+ '</div>'

		//		+'<div class="col-sm-12">'
		//		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled>Result</button>'
		//		+'</div>'

		+ '<div class="modal fade " id="datasheetModel">'
		+ '<div class="modal-dialog modal-xl" >'
		+ '<div class="modal-content">'
		+ '<div class="modal-header">'
		+ '<h4 class="modal-title"><center>Datasheet</center></h4>'
		+ '<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+ '</div>'
		+ '<div class="modal-body" id="datasheetBody">'
		+ '</div>'
		+ '<div class="modal-footer">'
		//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'

		+ '<div class="modal fade " id="modalTrends1">'
		+ '<div class="modal-dialog modal-xl" >'
		+ '<div class="modal-content">'
		+ '<div class="modal-header">'
		+ '<h4 class="modal-title"><center>Graph</center></h4>'
		+ '<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+ '</div>'
		+ '<div class="modal-body" id="trends1">'
		+ '</div>'
		+ '<div class="modal-footer">'
		//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '</div>'

	$("#Selection").html(htm);
	animateVacuumSensor();

	$("#graph").click(function() {
		trendsCount1++;
		$("#trends1").empty("");
		var htm = ''

		for (var i = 0; i < dataAr1.length; i++) {
			htm += '<div class="Container-fluid">'
			//		htm+='<h4>Test Cycle - '+(i+1)
			var rowStr = 'RowDiv' + (i + 1)
			htm += "<div class='row' id='" + rowStr + "'>"

			var GraphData = 'sensorGraphCold' + i;
			var downloadGraphBtn = 'graphBtn' + i;
			htm += "<div class='col-sm-12' id=" + GraphData + ">"
				+ '</div>'
				+ "<div class='col-sm-12' id=" + downloadGraphBtn + ">"
				+ '</div>'
			htm += '</div>'
			$("#trends1").append(htm);
			vacuumSensorGraph(dataAr1[i].data, i);
			//		tempratureSensorGraphHot(dataArr[i],i);

		}


		//	$(document).ready(function () {
		//        $('#GraphDataButton'+(i+1)).on('click', function () {
		//        	console.log("Clickiuyrotigjdfoigj");
		//            html2canvas(document.querySelector('#RowDiv'+count)).then(canvas => {
		//                var imgData = canvas.toDataURL("image/png");
		//                $('#screenshotImg').attr('src', imgData);
		//                $('#downloadBtn').show().off('click').on('click', function() {
		//                    var a = document.createElement('a');
		//                    a.href = imgData;
		//                    a.download = 'screenshot.png';
		//                    a.click();
		//                });
		//            });
		//        });
		//    });

	});

	$("#datasheetBtn").on("click", function() {
		datasheetCount1++;
		vacuumdatasheet();
	});

	$("#btnResult3").click(function() {
		resultJson.animationStartV = startCount1;
		resultJson.datasheetV = datasheetCount1;
		resultJson.trendsV = trendsCount1;
		//console.log(resultJson);
		result();
	});
}
var dataAr1 = [];
function animateVacuumSensor() {
	$("#diagram").empty();
	var data = {};
	var dataArr4 = [];
	//var dataArrUp = [];
	//var paper = Raphael("diagram", 1500, 700);

	var w = 1500;
	var h = 700;

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('diagram'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('diagram'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}


	paper.clear();
	var x = 50, y = 70;
	var time = 500;

	var txtColor = "#00cc88";
	var color = '#b4eff3';
	var backColor = "#818080";
	var vacuumColor = "#ddf4f6";
	var s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, valveCnt = 0;
	var flag = false, flag1 = false;

	//	Electricity and air flow indicators
	paper.rect((x + 220), (y + 80), 270, 215, 5);

	paper.text((x + 250), (y + 130), "Electricity Status : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var eleOn = paper.image("PressureVaccum/images/green.png", (x + 425), (y + 110), 40, 40);
	var eleOff = paper.image("PressureVaccum/images/red.png", (x + 425), (y + 110), 40, 40);

	paper.text((x + 250), (y + 170), "Start up process : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var stOn = paper.image("PressureVaccum/images/green.png", (x + 425), (y + 150), 40, 40);
	var stOff = paper.image("PressureVaccum/images/red.png", (x + 425), (y + 150), 40, 40);

	paper.text((x + 250), (y + 210), "Running Process : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var rnOn = paper.image("PressureVaccum/images/green.png", (x + 425), (y + 190), 40, 40);
	var rnOff = paper.image("PressureVaccum/images/red.png", (x + 425), (y + 190), 40, 40);

	paper.text((x + 250), (y + 250), "Shutdown Process : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var shOn = paper.image("PressureVaccum/images/green.png", (x + 425), (y + 230), 40, 40);
	var shOff = paper.image("PressureVaccum/images/red.png", (x + 425), (y + 230), 40, 40);

	paper.text((x + 290), (y + 365), "Vacuum Pump").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 480), (y + 600), "Moterized Butterfly Valve").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.text((x + 890), (y + 60), "Vent").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 890), (y + 125), "SV").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });


	paper.text((x + 720), (y + 45), "S1").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 595), (y + 180), "S2").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 655), (y + 345), "S3").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1180), (y + 50), "S4").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1390), (y + 180), "S5").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.image("PressureVaccum/images/wireless.gif", (x + 1370), (y + 200), 60, 40);

	paper.rect((x + 1320), (y - 60), 100, 150, 5);
	paper.image("PressureVaccum/images/wifiGateway.png", (x + 1330), (y - 50), 80, 100).transform("s-1,1");;
	paper.text((x + 1340), (y + 55), "Wireless").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1340), (y + 70), "Gateway").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.path("M" + (x + 360) + " " + (y + 520) + " l  640 0 l 0 -170").attr({ "stroke-width": 24, "stroke": backColor, "stroke-linejoin": "round" });
	//	var motorPipe = paper.path("M" + (x + 360) + " " + (y + 520) + " l  640 0 l 0 -170").attr({ "stroke-width": 20, "stroke": "#fff", "stroke-linejoin": "round" });
	var motorPipe1 = paper.path("M" + (x + 360) + " " + (y + 520) + " l  190 0").attr({ "stroke-width": 20, "stroke": "#fff", "stroke-linejoin": "round" });
	var motorPipe2 = paper.path("M" + (x + 549) + " " + (y + 520) + " l  451 0 l 0 -170").attr({ "stroke-width": 20, "stroke": "#fff", "stroke-linejoin": "round" });

	var mtrOn = paper.image("PressureVaccum/images/on.png", (x + 290), (y + 375), 60, 40).hide();
	var mtrOff = paper.image("PressureVaccum/images/off.png", (x + 290), (y + 375), 60, 40);

	var btrOn = paper.image("PressureVaccum/images/on.png", (x + 517), (y + 555), 60, 40).hide();
	var btrOff = paper.image("PressureVaccum/images/off.png", (x + 517), (y + 555), 60, 40);

	//left side sensor path from top

	//	Main sensor Path
	paper.path("M" + (x + 775) + " " + (y + 92) + " l  0 50 l 135 0 l 22 30").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s1path = paper.path("M" + (x + 775) + " " + (y + 92) + " l  0 50 l 135 0 l 22 30").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//air vent connection path
	paper.path("M" + (x + 825) + " " + (y + 138) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s11path = paper.path("M" + (x + 825) + " " + (y + 138) + " l  0 -62 l 60 0 ").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });


	paper.path("M" + (x + 645) + " " + (y + 220) + " l  0 30 l 245 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s2path = paper.path("M" + (x + 645) + " " + (y + 220) + " l  0 30 l 245 0").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//air vent connection path
	paper.path("M" + (x + 705) + " " + (y + 246) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s21path = paper.path("M" + (x + 705) + " " + (y + 246) + " l  0 -62 l 60 0 ").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });


	paper.path("M" + (x + 705) + " " + (y + 393) + " l  0 20 l 155 0 l 70 -87").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s3path = paper.path("M" + (x + 705) + " " + (y + 393) + " l  0 20 l 155 0 l 70 -87").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//air vent connection path
	paper.path("M" + (x + 760) + " " + (y + 409) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s31path = paper.path("M" + (x + 760) + " " + (y + 409) + " l  0 -62 l 60 0 ").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//	right side sensor path from top

	paper.path("M" + (x + 1230) + " " + (y + 92) + " l  0 50 l -135 0 l -22 30").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s4path = paper.path("M" + (x + 1230) + " " + (y + 92) + " l  0 50 l -135 0 l -22 30").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//air vent connection path
	paper.path("M" + (x + 1175) + " " + (y + 138) + " l  0 -62 l -100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s41path = paper.path("M" + (x + 1175) + " " + (y + 138) + " l  0 -62 l -60 0 ").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1355) + " " + (y + 220) + " l  0 30 l -245 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s5path = paper.path("M" + (x + 1355) + " " + (y + 220) + " l  0 30 l -245 0").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//air vent connection path
	paper.path("M" + (x + 1300) + " " + (y + 246) + " l  0 -62 l -100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s51path = paper.path("M" + (x + 1300) + " " + (y + 246) + " l  0 -62 l -60 0 ").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1073) + " " + (y + 333) + " l 70 80 l 130 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var openPath = paper.path("M" + (x + 1073) + " " + (y + 333) + " l 70 80 l 60 0").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });


	var vacuumPump = paper.image("PressureVaccum/images/vacuum_pump.png", (x + 70), (y + 350), 340, 250);

	var connSocket1 = paper.image("PressureVaccum/images/connectorSocket.png", (x + 522), (y + 496), 20, 50);
	var butterflyValve = paper.image("PressureVaccum/images/butterfly.png", (x + 430), (y + 420), 220, 140);
	var connSocket2 = paper.image("PressureVaccum/images/connectorSocket.png", (x + 556), (y + 494), 20, 50).attr({ 'transform': 'r' + 180 });

	var sensorCircle = paper.circle((x + 1000), (y + 250), 100).attr({ "stroke-width": 7, "stroke": backColor, "fill": "#fff" });


	paper.image("PressureVaccum/images/connectorSocket.png", (x + 883), (y + 230), 20, 40);

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 920), (y + 150), 20, 40).attr({ 'transform': 'r' + 49 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1061), (y + 150), 20, 40).attr({ 'transform': 'r' + 134 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1097), (y + 230), 20, 40).attr({ 'transform': 'r' + 180 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 920), (y + 310), 20, 40).attr({ 'transform': 'r' + 313 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1061), (y + 310), 20, 40).attr({ 'transform': 'r' + 228 });

	//left sensor from top
	var capVacuum = paper.image("PressureVaccum/images/capVacuum.png", (x + 700), (y), 150, 110);

	var capVacuum = paper.image("PressureVaccum/images/capVacuum.png", (x + 570), (y + 130), 150, 110);

	var capVacuum = paper.image("PressureVaccum/images/capVacuum.png", (x + 630), (y + 300), 150, 110);

	//right sensor from top	
	var capVacuum = paper.image("PressureVaccum/images/capVacuum.png", (x + 1155), (y), 150, 110);

	var capVacuum = paper.image("PressureVaccum/images/capVacuum.png", (x + 1280), (y + 130), 150, 110);

	//left side valve from top

	var s1gVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 850), (y + 30), 40, 60);
	var s1rVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 850), (y + 30), 40, 60);

	var s1gMain = paper.image("PressureVaccum/images/svValveH2G.png", (x + 850), (y + 95.5), 40, 60);
	var s1rMain = paper.image("PressureVaccum/images/svValveH1R.png", (x + 850), (y + 95.5), 40, 60);

	var s2gVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 740), (y + 138), 40, 60);
	var s2rVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 740), (y + 138), 40, 60);

	var s2gMain = paper.image("PressureVaccum/images/svValveH2G.png", (x + 740), (y + 203.5), 40, 60);
	var s2rMain = paper.image("PressureVaccum/images/svValveH1R.png", (x + 740), (y + 203.5), 40, 60);

	var s3gVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 790), (y + 301), 40, 60);
	var s3rVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 790), (y + 301), 40, 60);

	var s3gMain = paper.image("PressureVaccum/images/svValveH2G.png", (x + 790), (y + 366.5), 40, 60);
	var s3rMain = paper.image("PressureVaccum/images/svValveH1R.png", (x + 790), (y + 366.5), 40, 60);


	//	right side valve from top
	var s4gVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1115), (y + 30), 40, 60);
	var s4rVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1115), (y + 30), 40, 60);

	var s4gMain = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1115), (y + 95.5), 40, 60);
	var s4rMain = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1115), (y + 95.5), 40, 60);

	var s5gVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1230), (y + 138), 40, 60);
	var s5rVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1230), (y + 138), 40, 60);

	var s5gMain = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1230), (y + 203.5), 40, 60);
	var s5rMain = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1230), (y + 203.5), 40, 60);

	var opengVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1170), (y + 366.5), 40, 60);
	var openrVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1170), (y + 366.5), 40, 60);

	function rectTextBoxes(x, y) {
		paper.rect((x + 130), (y + 85), 70, 28, 5).attr({ "fill": "#000", "stroke": "#9d9d9e", "stroke-width": 3 });
	}

	rectTextBoxes((x + 450), (y + 375));
	var btrflyReading = paper.text((x + 615), (y + 475), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 610), (y - 105));
	var s1Reading = paper.text((x + 775), (y - 5), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 483), (y + 25));
	var s2Reading = paper.text((x + 648), (y + 125), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 540), (y + 197));
	var s3Reading = paper.text((x + 705), (y + 297), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 1065), (y - 105));
	var s4Reading = paper.text((x + 1230), (y - 5), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 1190), (y + 25));
	var s5Reading = paper.text((x + 1355), (y + 125), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	let activeTimeouts = [];
	var initFlagCnt = false;

	setTimeout(() => {
		eleOn.toFront();
		stOn.toFront();
		$("#startBtn").prop("disabled", false);
	}, 2000);

	$("#resetBtn").on("click", function() {

		activeTimeouts.forEach((timeout) => clearTimeout(timeout));
		activeTimeouts = [];

		$("#container").html('');
		animateVacuumSensor();
		s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, valveCnt = 0;
		flag = false;
	})



	//	 click event listener for fill tank button
	$("#startBtn").on("click", function() {
		startCount1++;
		if (initFlagCnt == true) {

			//			resetAllValves();
			s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, valveCnt = 0;
			flag = false;
			flag1 = false;

			activeTimeouts.forEach((timeout) => clearTimeout(timeout));
			activeTimeouts = [];
		}

		stOn.toFront();
		initFlagCnt = true;
		$("#startBtn").prop("disabled", true);
		$("#datasheetBtn").prop("disabled", true);
		$("#graph,#btnResult3").prop("disabled", true);

		a = [];

		activeTimeouts.push(setTimeout(() => {
			opengVent.toFront();

			resetAllToInitFrame();
			activeTimeouts.push(setTimeout(() => {
				openrVent.toFront();
				activeTimeouts.push(setTimeout(() => {
					stOff.toFront();
					rnOn.toFront();
					mtrOff.hide();
					mtrOn.show();
					activeTimeouts.push(setTimeout(() => {
						//						a[0] = paper.path('M' + (x + 528) + " " + (y+520) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": vacuumColor, "stroke-linejoin": "round" });
						motorPipe1.animate({ "stroke": vacuumColor }, time, function() {
							btrOff.hide();
							btrOn.show();

							s1gMain.toFront();
							s2gMain.toFront();
							s3gMain.toFront();
							s4gMain.toFront();
							s5gMain.toFront();

							s1path.animate({ "stroke": vacuumColor }, time * 5);
							s2path.animate({ "stroke": vacuumColor }, time * 5);
							s3path.animate({ "stroke": vacuumColor }, time * 5);
							s4path.animate({ "stroke": vacuumColor }, time * 5);
							s5path.animate({ "stroke": vacuumColor }, time * 5);
							s11path.animate({ "stroke": vacuumColor }, time * 5);
							s21path.animate({ "stroke": vacuumColor }, time * 5);
							s31path.animate({ "stroke": vacuumColor }, time * 5);
							s41path.animate({ "stroke": vacuumColor }, time * 5);
							s51path.animate({ "stroke": vacuumColor }, time * 5);
							openPath.animate({ "stroke": vacuumColor }, time * 5);
							sensorCircle.animate({ "fill": vacuumColor }, time * 5);
							motorPipe1.animate({ "stroke": vacuumColor }, time * 5);
							motorPipe2.animate({ "stroke": vacuumColor }, time * 5);

							vacuumReadings();
						});
					}, 2000));
				}, 1000));
			}, 5000));
		}, 1000));
	})


	var evaluate = function(v, ve, max, min) {
		v = v + 38;
		ve = diff = Math.random() * (max - min) + min;
		randomSign = Math.random() < 0.5 ? -1 : 1;
		perv = (v / 100) * ve;
		perv = randomSign * perv;
		return v + perv;
	}


	var vacuumReadings = function() {
		dataArr4 = [];
		var s2e = 0, s3e = 0, s4e = 0, s5e = 0;

		//		let s2min = 0.25;
		//		let s2max = 0.75;
		//					
		//		let s3min = 0.25;
		//		let s3max = 1.25;
		//			
		//		let s4min = 0.5;
		//		let s4max = 1.5;
		//					
		//		let s5min = 0.7;
		//		let s5max = 2;

		let s2min = 1;
		let s2max = 3;

		let s3min = 1;
		let s3max = 3;

		let s4min = 1;
		let s4max = 3;

		let s5min = 1;
		let s5max = 3;

		for (i = 0; i < 20; i++) {

			activeTimeouts.push(setTimeout(() => {
				round = {};
				s2 = evaluate(s1, s2e, s2max, s2min);
				s3 = evaluate(s1, s3e, s3max, s3min);
				s4 = evaluate(s1, s4e, s4max, s4min);
				s5 = evaluate(s1, s5e, s5max, s5min);

				s1 = s1 + 38;

				valveCnt = valveCnt + 5;

				round.s1 = s1.toFixed(2);
				round.s2 = s2.toFixed(2);
				round.s3 = s3.toFixed(2);
				round.s4 = s4.toFixed(2);
				round.s5 = s5.toFixed(2);
				round.valveCnt = valveCnt.toFixed(2);

				dataArr4.push(round);

				btrflyReading.attr('text', valveCnt);
				s1Reading.attr('text', s1.toFixed(2));
				s2Reading.attr('text', s2.toFixed(2));
				s3Reading.attr('text', s3.toFixed(2));
				s4Reading.attr('text', s4.toFixed(2));
				s5Reading.attr('text', s5.toFixed(2));
				$("#cv").html(valveCnt);
				$("#s1").html(s1.toFixed(2));
				$("#s2").html(s2.toFixed(2));
				$("#s3").html(s3.toFixed(2));
				$("#s4").html(s4.toFixed(2));
				$("#s5").html(s5.toFixed(2));

				activeTimeouts.push(setTimeout(() => {
					if (flag === false) {
						flag = true;
						compressorOffVentOn();
					} else {
						return;
					}
				}, i * (time)));
			}, i * (time)));
		}
	}


	var compressorOffVentOn = function() {

		data = {};
		data.data = dataArr4;
		dataAr1.push(data);

		mtrOff.toFront();
		btrOn.hide();
		btrOff.show();
		btrflyReading.attr('text', "0");
		activeTimeouts.push(setTimeout(() => {
			opengVent.toFront();
			s1path.animate({ "stroke": color }, time * 5);
			s2path.animate({ "stroke": color }, time * 5);
			s3path.animate({ "stroke": color }, time * 5);
			s4path.animate({ "stroke": color }, time * 5);
			s5path.animate({ "stroke": color }, time * 5);
			s11path.animate({ "stroke": color }, time * 5);
			s21path.animate({ "stroke": color }, time * 5);
			s31path.animate({ "stroke": color }, time * 5);
			s41path.animate({ "stroke": color }, time * 5);
			s51path.animate({ "stroke": color }, time * 5);
			openPath.animate({ "stroke": color }, time * 5);
			sensorCircle.animate({ "fill": color }, time * 5);
			motorPipe1.animate({ "stroke": vacuumColor }, time * 5);
			motorPipe2.animate({ "stroke": color }, time * 5);

			preasureReadingsRev();
		}, time * 4));
	}

	var evaluateRev = function(v, ve, max, min) {
		v = v - 38;
		ve = diff = Math.random() * (max - min) + min;
		randomSign = Math.random() < 0.5 ? -1 : 1;
		perv = (v / 100) * ve;
		perv = randomSign * perv;
		return v + perv;
	}

	var valveSwitchFlag = false;
	var preasureReadingsRev = function() {
		s1 = 760.00, s2 = 759.43, s3 = 759.91, s4 = 759.37, s5 = 759.98;
		var s2e = 0, s3e = 0, s4e = 0, s5e = 0;

		//		let s2min = 0.25;
		//		let s2max = 0.75;
		//					
		//		let s3min = 0.25;
		//		let s3max = 1.25;
		//			
		//		let s4min = 0.5;
		//		let s4max = 1.5;
		//					
		//		let s5min = 0.7;
		//		let s5max = 2;

		let s2min = 1;
		let s2max = 3;

		let s3min = 1;
		let s3max = 3;

		let s4min = 1;
		let s4max = 3;

		let s5min = 1;
		let s5max = 3;

		for (i = 0; i < 20; i++) {

			activeTimeouts.push(setTimeout(() => {
				round = {};

				if (valveSwitchFlag == false) {
					opengVent.toFront();
					valveSwitchFlag = true;
				} else {
					openrVent.toFront();
					valveSwitchFlag = false;
				}

				s2 = evaluateRev(s1, s2e, s2max, s2min);
				s3 = evaluateRev(s1, s3e, s3max, s3min);
				s4 = evaluateRev(s1, s4e, s4max, s4min);
				s5 = evaluateRev(s1, s5e, s5max, s5min);

				s1 = s1 - 38;

				round.s1 = s1.toFixed(2);
				round.s2 = s2.toFixed(2);
				round.s3 = s3.toFixed(2);
				round.s4 = s4.toFixed(2);
				round.s5 = s5.toFixed(2);
				round.valveCnt = 0;

				dataArr4.push(round);

				s1Reading.attr('text', s1.toFixed(2));
				s2Reading.attr('text', s2.toFixed(2));
				s3Reading.attr('text', s3.toFixed(2));
				s4Reading.attr('text', s4.toFixed(2));
				s5Reading.attr('text', s5.toFixed(2));

				$("#cv").html("0");
				$("#s1").html(s1.toFixed(2));
				$("#s2").html(s2.toFixed(2));
				$("#s3").html(s3.toFixed(2));
				$("#s4").html(s4.toFixed(2));
				$("#s5").html(s5.toFixed(2));

				activeTimeouts.push(setTimeout(() => {
					if (flag1 === false) {
						flag1 = true;
						opengVent.toFront();
						$("#startBtn").prop("disabled", false);
						$("#datasheetBtn").prop("disabled", false);
						$("#graph,#btnResult3").prop("disabled", false);
						reading4.reading = dataAr1;
						globalArr.push(reading4);
						//console.log(globalArr);

						Swal.fire({
							title: '<span style="font-size: 24px; font-weight: bold;">Good job!</span>',
							html: `
						    <div style="font-size: 20px;">
						      <b>Based on the reading of sensor:</b><br>
						      Check those sensors which are 
						      <b style="color: red;">not accurate</b> 
						      and hence cannot be dispatched.
						    </div>
						  `,
							icon: 'success',
							confirmButtonText: 'OK'
						});

						htm2 = ''
							+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
							+ '<center><span >CHECK SENSORS</span></center>'
							+ '</div>'
							+ '<h6 style="background-color:skyblue; padding:5px;">Considering the S1 sensor as the standard sensor, compare the readings of other sensors with it and reject and check those with more than &plusmn;2% inaccuracy</h6>'
							+ '<table border="1" cellpadding="10" cellspacing="0" id="checkTable">'
							+ '<thead>'
							+ '<tr>'
							+ '   <th>Sr No</th>'
							+ '   <th>Sensor Name</th>'
							+ '   <th>Count</th>'
							+ '   <th>Check</th>'
							+ '</tr>'
							+ '</thead>'
							+ '<tbody>'
							+ '<tr>'
							+ '  <td>1</td>'
							+ '  <td>S1</td>'
							+ '  <td>' + dataAr1[0].data[19].s1 + '</td>'
							+ '  <td></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>2</td>'
							+ '  <td>S2</td>'
							+ '  <td>' + dataAr1[0].data[19].s2 + '</td>'
							+ '  <td><input type="checkbox" name="valid2"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>3</td>'
							+ '  <td>S3</td>'
							+ '  <td>' + dataAr1[0].data[19].s3 + '</td>'
							+ '  <td><input type="checkbox" name="valid3"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>4</td>'
							+ '  <td>S4</td>'
							+ '  <td>' + dataAr1[0].data[19].s4 + '</td>'
							+ '  <td><input type="checkbox" name="valid4"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>5</td>'
							+ '  <td>S5</td>'
							+ '  <td>' + dataAr1[0].data[19].s5 + '</td>'
							+ '  <td><input type="checkbox" name="valid5"></td>'
							+ '</tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<div class="col-sm-12 mt-4">'
							+ '<button type="button" class="btn btn-info" id="btnResult3" style="margin-bottom:100px;width:100%" >Submit</button>'
							+ '</div>';
						$("#Selection").html(htm2);


						$(document).on('click', '#btnResult3', function() {
//							let vacuumsensorData = [];

							$("#checkTable tbody tr").each(function(index) {
								let srNo = $(this).find("td").eq(0).text();
								let sensorName = $(this).find("td").eq(1).text();
								let count = parseFloat($(this).find("td").eq(2).text());
								let isChecked = $(this).find("input[type='checkbox']").is(":checked");

								// Skip validation for the reference sensor S1 (first row)
								let status = "N/A";
								if (sensorName !== "S1") {
									let inRange = count >= 744.80 && count <= 775.20;
									status = (inRange && !isChecked) || (!inRange && isChecked) ? "Correct" : "Wrong";

									// Optional: visually mark correct or wrong rows
									if (status === "Correct") {
										$(this).css("background-color", "#d4edda"); // green
									} else {
										$(this).css("background-color", "#f8d7da"); // red
									}
								} else {
									$(this).find("input[type='checkbox']").prop("disabled", true); // Disable checkbox for S1
									$(this).css("background-color", "#e2e3e5"); // grey background for reference sensor
								}

								vacuumsensorData.push({
									srNo: srNo,
									sensorName: sensorName,
									count: count,
									isChecked: isChecked,
									status: status
								});
							});

							// Show result in Swal popup
//							Swal.fire({
//								title: 'Sensor Validation Result',
//								html: '<pre>' + JSON.stringify(vacuumsensorData, null, 2) + '</pre>',
//								width: 700,
//								icon: 'info'
//							});
                       if(hookUpPhase<5){
							$("#hookUpSelect").prop("disabled", false);
						$("#btnResult3").prop("hidden", true);
						$("#checkTable").css("margin-bottom", "100px");
						
						Swal.fire({
//								title: 'Information',
//								html: '<pre>' + JSON.stringify(levelsensorData, null, 2) + '</pre>',
                                html: '<pre>Select Another Sensor</pre>',
								width: 300,
								icon: 'info'
							});
						
						}else{
							finResult();
						}
							
						});



						rnOff.toFront();
						shOn.toFront();
						s1gVent.toFront();
						s2gVent.toFront();
						s3gVent.toFront();
						s4gVent.toFront();
						s5gVent.toFront();
						mtrOn.hide();
						mtrOff.show();
						btrOn.hide();
						btrOff.show();

						activeTimeouts.push(setTimeout(() => {
							shOff.toFront();
							resetAllValves();
						}, 3000));
					} else {
						return;
					}
				}, i * (time)));
			}, i * (time)));
		}
	}

	function resetAllToInitFrame() {

		s1path.animate({ "stroke": color }, 5000);
		s11path.animate({ "stroke": color }, 5000);
		s2path.animate({ "stroke": color }, 5000);
		s21path.animate({ "stroke": color }, 5000);
		s3path.animate({ "stroke": color }, 5000);
		s31path.animate({ "stroke": color }, 5000);
		s4path.animate({ "stroke": color }, 5000);
		s41path.animate({ "stroke": color }, 5000);
		s5path.animate({ "stroke": color }, 5000);
		s51path.animate({ "stroke": color }, 5000);
		openPath.animate({ "stroke": color }, 5000);
		sensorCircle.animate({ "fill": color }, 5000);
		motorPipe1.animate({ "stroke": color }, 5000);
		motorPipe2.animate({ "stroke": color }, 5000);

		butterflyValve.toFront();
		sensorCircle.toFront();
		connSocket1.toFront();
		connSocket2.toFront();
	}

	function resetAllValves() {

		s1path.attr({ "stroke": "#fff" });
		s2path.attr({ "stroke": "#fff" });
		s3path.attr({ "stroke": "#fff" });
		s4path.attr({ "stroke": "#fff" });
		s5path.attr({ "stroke": "#fff" });
		s11path.attr({ "stroke": "#fff" });
		s21path.attr({ "stroke": "#fff" });
		s31path.attr({ "stroke": "#fff" });
		s41path.attr({ "stroke": "#fff" });
		s51path.attr({ "stroke": "#fff" });
		openPath.attr({ "stroke": "#fff" });
		sensorCircle.attr({ "fill": "#fff" });
		motorPipe2.attr({ "stroke": "#fff" });
		motorPipe1.attr({ "stroke": "#fff" });

		butterflyValve.toFront();
		sensorCircle.toFront();
		connSocket1.toFront();
		connSocket2.toFront();

		s1rVent.toFront();
		s2rVent.toFront();
		s3rVent.toFront();
		s4rVent.toFront();
		s5rVent.toFront();
	}


}