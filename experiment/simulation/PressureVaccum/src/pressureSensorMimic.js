var startCount = 0;
var datasheetCount = 0;
var trendsCount = 0;
var reading3 = {};
reading3.sensor = "Pressure";
let pressuresensorData = [];
function pressureSensorMimic() {
	hookUpPhase++;
$("#hookUpSelect").prop("disabled", true);
	timerMasterJson.squences = $("#counter").text();
	//	console.log(timerMasterJson);
	seconds = 0;
	$("#btnDiv").prop("hidden", false);
	$("#Header").html("	<center><span >PRESSURE SENSOR - SIMULATION</span></center>");

	htm = ''
		+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+ '<center><span >PROCESS MONITORING PANEL</span></center>'
		+ '</div>'

		+ '<div class="row">'
		+ '<div class="col-sm-6">'
		+ '<button id="startBtn1" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+ '</div>'
		+ '<div class="col-sm-6">'
		//		+'<button id="resetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" >Reset</button>'
		+ '</div>'
		+ '</div>'
		//		+'<div class="row">'
		//		+'<div class="col-sm-6">'
		//		+'<button id="datasheetBtn1" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		//		+'</div>'
		//		+'<div class="col-sm-6">'
		//		+'<button type="button" class="btn btn-danger"  id="graph1" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends1" disabled>Trends </button>'
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
		+ '   <td><label class="PMCValue" id="s1">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S2</b></label></td>'
		+ ' <td><label class="PMCValue" id="s2">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S3 </b></label></td>'
		+ ' <td><label class="PMCValue" id="s3">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S4</b></label></td>'
		+ ' <td><label class="PMCValue" id="s4">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S5</b></label></td>'
		+ ' <td><label class="PMCValue" id="s5">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S6</b></label></td>'
		+ ' <td><label class="PMCValue" id="s6">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S7</b></label></td>'
		+ ' <td><label class="PMCValue" id="s7">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S8</b></label></td>'
		+ ' <td><label class="PMCValue" id="s8">0</label>Bar</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>S9</b></label></td>'
		+ ' <td><label class="PMCValue" id="s9">0</label>Bar</td>'
		+ '  </tr>'


		+ '</tbody>'
		+ '</table>'

		+ '</div>'

		//		+ '<div class="col-sm-12">'
		//		+ '<button type="button" class="btn btn-danger"  id="btnVacuumMimic" style="margin-bottom:50px; width:100%" disabled>Next</button>'
		//		+ '</div>'

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

	//		+'</div>'
	$("#Selection").html(htm);
	animatePressureSensor();

	$("#btnVacuumMimic").click(function() {

		vacuumSensorMimic();
		resultJson.animationStartP = startCount;
		resultJson.datasheetP = datasheetCount;
		resultJson.trendsP = trendsCount;

	});

	$("#graph1").click(function() {
		trendsCount++;
		$("#trends1").empty("");
		var htm = ''

		for (var i = 0; i < dataAr.length; i++) {
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
			pressureSensorGraph(dataAr[i].data, i);
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

	$("#datasheetBtn1").on("click", function() {
		datasheetCount++;
		Datasheet();
	});

}
var dataAr = [];
function animatePressureSensor() {
	$("#diagram").empty();
	var data = {};
	var dataArr3 = [];
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
	var x = -50, y = 50;
	var time = 500;

	var txtColor = "#00cc88";
	var color = '#b4eff3';
	var backColor = "#818080";
	var initColor = "#e8f2f3";
	//	var vacuumColor = "#ddf4f6";
	var s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0, s7 = 0, s8 = 0, s9 = 0, valveCnt = 0;
	var flag = false, flag1 = false;

	//	Electricity and air flow indicators
	d = x + 110;
	e = y + 150;
	paper.rect((d + 10), (e - 50), 270, 215, 5);

	paper.text((d + 30), (e), "Electricity Status : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var eleOn = paper.image("PressureVaccum/images/green.png", (d + 225), (e - 20), 40, 40);
	var eleOff = paper.image("PressureVaccum/images/red.png", (d + 225), (e - 20), 40, 40);

	paper.text((d + 30), (e + 40), "Start up process : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var stOn = paper.image("PressureVaccum/images/green.png", (d + 225), (e + 20), 40, 40);
	var stOff = paper.image("PressureVaccum/images/red.png", (d + 225), (e + 20), 40, 40);

	paper.text((d + 30), (e + 80), "Running Process : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var rnOn = paper.image("PressureVaccum/images/green.png", (d + 225), (e + 60), 40, 40);
	var rnOff = paper.image("PressureVaccum/images/red.png", (d + 225), (e + 60), 40, 40);

	paper.text((d + 30), (e + 120), "Shutdown Process : ").attr({ 'font-size': 17, 'font-weight': 'bold', 'text-anchor': 'start' });
	var shOn = paper.image("PressureVaccum/images/green.png", (d + 225), (e + 100), 40, 40);
	var shOff = paper.image("PressureVaccum/images/red.png", (d + 225), (e + 100), 40, 40);

	paper.text((x + 220), (y + 360), "Compressor").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 508), (y + 600), "Control Valve").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.text((x + 1200), (y + 460), "Vent").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1150), (y + 500), "SV").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });


	paper.text((x + 800), (y - 30), "S1").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 720), (y + 60), "S2").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 640), (y + 140), "S3").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 720), (y + 270), "S4").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 765), (y + 385), "S5").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.text((x + 1190), (y - 30), "S6").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1265), (y + 60), "S7").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1340), (y + 140), "S8").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1260), (y + 270), "S9").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.image("PressureVaccum/images/wireless.gif", (x + 1290), (y + 80), 60, 40);
	paper.image("PressureVaccum/images/wireless.gif", (x + 1360), (y + 190), 60, 40);
	paper.image("PressureVaccum/images/wireless.gif", (x + 1280), (y + 330), 60, 40);

	paper.rect((x + 1420), (y - 60), 100, 150, 5);
	paper.image("PressureVaccum/images/wifiGateway.png", (x + 1430), (y - 50), 80, 100).transform("s-1,1");;
	paper.text((x + 1440), (y + 55), "Wireless").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });
	paper.text((x + 1440), (y + 70), "Gateway").attr({ 'font-size': 13, 'font-weight': 'bold', 'text-anchor': 'start' });

	paper.image("PressureVaccum/images/wireless.gif", (x + 1425), (y - 49), 80, 50).attr({ 'transform': 'r' + 270 });

	paper.path("M" + (x + 360) + " " + (y + 520) + " l  640 0 l 0 -170").attr({ "stroke-width": 24, "stroke": backColor, "stroke-linejoin": "round" });
	var motorPipe1 = paper.path("M" + (x + 360) + " " + (y + 520) + " l  190 0").attr({ "stroke-width": 20, "stroke": "#fff", "stroke-linejoin": "round" });
	var motorPipe2 = paper.path("M" + (x + 549) + " " + (y + 520) + " l  451 0 l 0 -170").attr({ "stroke-width": 20, "stroke": "#fff", "stroke-linejoin": "round" });

	var btrOn = paper.image("PressureVaccum/images/on.png", (x + 517), (y + 555), 60, 40).hide();
	var btrOff = paper.image("PressureVaccum/images/off.png", (x + 517), (y + 555), 60, 40);

	//left side sensor path from top

	//	Main sensor Path
	paper.path("M" + (x + 810) + " " + (y + 42) + " l  0 40 l 125 0 l 25 65").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s1path = paper.path("M" + (x + 810) + " " + (y + 42) + " l  0 40 l 125 0 l 25 65").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 730) + " " + (y + 130) + " l  0 40 l 155 0 l 25 20").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s2path = paper.path("M" + (x + 730) + " " + (y + 130) + " l  0 40 l 155 0 l 25 20").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 650) + " " + (y + 209) + " l  0 40 l 240 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s3path = paper.path("M" + (x + 650) + " " + (y + 209) + " l  0 40 l 240 0").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 730) + " " + (y + 340) + " l  0 20 l 117 0 l 60 -50").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s4path = paper.path("M" + (x + 730) + " " + (y + 340) + " l  0 20 l 117 0 l 60 -50").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 773) + " " + (y + 456) + " l  0 15 l 125 0 l 63 -127").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s5path = paper.path("M" + (x + 773) + " " + (y + 456) + " l  0 15 l 125 0 l 63 -127").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	//	right side sensor path from top

	paper.path("M" + (x + 1196) + " " + (y + 46) + " l  0 40 l -125 0 l -25 65").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s6path = paper.path("M" + (x + 1196) + " " + (y + 46) + " l  0 40 l -125 0 l -25 65").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1273) + " " + (y + 131) + " l  0 40 l -155 0 l -25 20").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s7path = paper.path("M" + (x + 1273) + " " + (y + 131) + " l  0 40 l -155 0 l -25 20").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1350) + " " + (y + 211) + " l  0 40 l -240 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s8path = paper.path("M" + (x + 1350) + " " + (y + 211) + " l  0 40 l -240 0").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1265) + " " + (y + 340) + " l  0 20 l -117 0 l -60 -50").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s9path = paper.path("M" + (x + 1265) + " " + (y + 340) + " l  0 20 l -117 0 l -60 -50").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1230) + " " + (y + 479) + "l -125 0 l -63 -127").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var openPath = paper.path("M" + (x + 1175) + " " + (y + 479) + "l -70 0 l -63 -127").attr({ "stroke-width": 8, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 355) + " " + (y + 550) + "l 25 0 l 0 70").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });

	var compressorGVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 378), (y + 560), 40, 65).attr({ 'transform': 'r' + 90 });
	var compressorRVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 378), (y + 560), 40, 65).attr({ 'transform': 'r' + 90 });

	paper.image("PressureVaccum/images/compressor.png", (x + 120), (y + 350), 240, 280);

	var connSocket1 = paper.image("PressureVaccum/images/connectorSocket.png", (x + 505), (y + 493), 20, 55);
	var connSocket2 = paper.image("PressureVaccum/images/connectorSocket.png", (x + 567), (y + 491), 20, 55).attr({ 'transform': 'r' + 180 });
	var controlValve = paper.image("PressureVaccum/images/controlValve.png", (x + 480), (y + 412), 120, 140);

	var mtrOn = paper.image("PressureVaccum/images/green.png", (x + 290), (y + 495), 50, 50);
	var mtrOff = paper.image("PressureVaccum/images/red.png", (x + 290), (y + 495), 50, 50);


	var sensorCircle = paper.circle((x + 1000), (y + 250), 100).attr({ "stroke-width": 7, "stroke": backColor, "fill": "#fff" });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 883), (y + 230), 20, 40);

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1097), (y + 230), 20, 40).attr({ 'transform': 'r' + 180 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 901), (y + 171), 20, 40).attr({ 'transform': 'r' + 33 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1080), (y + 171), 20, 40).attr({ 'transform': 'r' + 148 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 950), (y + 130), 20, 40).attr({ 'transform': 'r' + 68 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1033), (y + 132), 20, 40).attr({ 'transform': 'r' + 115 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 901), (y + 290), 20, 40).attr({ 'transform': 'r' + 327 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1080), (y + 290), 20, 40).attr({ 'transform': 'r' + 213 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 950), (y + 330), 20, 40).attr({ 'transform': 'r' + 292 });

	paper.image("PressureVaccum/images/connectorSocket.png", (x + 1033), (y + 328), 20, 40).attr({ 'transform': 'r' + 245 });


	//left sensor from top
	paper.image("PressureVaccum/images/capVacuum.png", (x + 745), (y - 30), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 665), (y + 55), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 585), (y + 135), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 665), (y + 265), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 708), (y + 380), 130, 90);

	//right sensor from top	
	paper.image("PressureVaccum/images/capVacuum.png", (x + 1131), (y - 30), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 1208), (y + 55), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 1285), (y + 135), 130, 90);

	paper.image("PressureVaccum/images/capVacuum.png", (x + 1200), (y + 265), 130, 90);


	//left side valve from top

	var s1gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 850), (y + 35.5), 40, 60);
	var s1rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 850), (y + 35.5), 40, 60);

	var s2gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 790), (y + 123.5), 40, 60);
	var s2rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 790), (y + 123.5), 40, 60);

	var s3gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 775), (y + 203), 40, 60);
	var s3rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 775), (y + 203), 40, 60);

	var s4gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 775), (y + 313.5), 40, 60);
	var s4rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 775), (y + 313.5), 40, 60);

	var s5gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 820), (y + 424.5), 40, 60);
	var s5rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 820), (y + 424.5), 40, 60);


	//	right side valve from top
	var s6gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1100), (y + 39.5), 40, 60);
	var s6rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1100), (y + 39.5), 40, 60);

	var s7gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1160), (y + 124.5), 40, 60);
	var s7rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1160), (y + 124.5), 40, 60);

	var s8gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1175), (y + 204.5), 40, 60);
	var s8rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1175), (y + 204.5), 40, 60);

	var s9gValve = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1175), (y + 313.5), 40, 60);
	var s9rValve = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1175), (y + 313.5), 40, 60);

	var openrVent = paper.image("PressureVaccum/images/svValveH1R.png", (x + 1140), (y + 432.5), 40, 60);
	var opengVent = paper.image("PressureVaccum/images/svValveH2G.png", (x + 1140), (y + 432.5), 40, 60);

	function rectTextBoxes(x, y) {
		paper.rect((x + 130), (y + 85), 70, 28, 5).attr({ "fill": "#000", "stroke": "#9d9d9e", "stroke-width": 3 });
	}

	rectTextBoxes((x + 450), (y + 375));
	var cvReading = paper.text((x + 450 + 165), (y + 475), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 580), (y - 115));
	var s1Reading = paper.text((x + 580 + 165), (y - 15), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 500), (y - 30));
	var s2Reading = paper.text((x + 500 + 165), (y + 70), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 420), (y + 80));
	var s3Reading = paper.text((x + 420 + 165), (y + 180), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 500), (y + 210));
	var s4Reading = paper.text((x + 500 + 165), (y + 310), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 542), (y + 325));
	var s5Reading = paper.text((x + 542 + 165), (y + 425), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 1100), (y - 115));
	var s6Reading = paper.text((x + 1100 + 165), (y - 15), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 1175), (y - 30));
	var s7Reading = paper.text((x + 1175 + 165), (y + 70), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 1253), (y + 80));
	var s8Reading = paper.text((x + 1253 + 165), (y + 180), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 1165), (y + 212));
	var s9Reading = paper.text((x + 1165 + 165), (y + 312), "00").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	let activeTimeouts = [];
	var initFlagCnt = false;

	setTimeout(() => {
		eleOn.toFront();
		stOn.toFront();
		$("#startBtn1").prop("disabled", false);
	}, 2000);

	//	 click event listener for fill tank button
	$("#startBtn1").on("click", function() {
		startCount++;
		if (initFlagCnt == true) {

			//			resetAllValves();
			s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0, s7 = 0, s8 = 0, s9 = 0, valveCnt = 0;
			flag = false;
			flag1 = false;

			activeTimeouts.forEach((timeout) => clearTimeout(timeout));
			activeTimeouts = [];
		}

		stOn.toFront();
		initFlagCnt = true;
		$("#startBtn1").prop("disabled", true);
		$("#datasheetBtn1").prop("disabled", true);
		$("#graph1,#btnVacuumMimic").prop("disabled", true);

		//		a = [];

		mtrOn.toFront();
		activeTimeouts.push(setTimeout(() => {
			compressorGVent.toFront();
			s1path.animate({ "stroke": initColor }, time * 5);
			s2path.animate({ "stroke": initColor }, time * 5);
			s3path.animate({ "stroke": initColor }, time * 5);
			s4path.animate({ "stroke": initColor }, time * 5);
			s5path.animate({ "stroke": initColor }, time * 5);
			s6path.animate({ "stroke": initColor }, time * 5);
			s7path.animate({ "stroke": initColor }, time * 5);
			s8path.animate({ "stroke": initColor }, time * 5);
			s9path.animate({ "stroke": initColor }, time * 5);
			openPath.animate({ "stroke": initColor }, time * 5);
			sensorCircle.animate({ "fill": initColor }, time * 5);
			motorPipe2.animate({ "stroke": initColor }, time * 5);
			activeTimeouts.push(setTimeout(() => {
				compressorRVent.toFront();
				activeTimeouts.push(setTimeout(() => {
					compressorGVent.toFront();
					activeTimeouts.push(setTimeout(() => {
						compressorRVent.toFront();
						activeTimeouts.push(setTimeout(() => {
							compressorGVent.toFront();
							openrVent.toFront();
							s1gValve.toFront();
							s2gValve.toFront();
							s3gValve.toFront();
							s4gValve.toFront();
							s5gValve.toFront();
							s6gValve.toFront();
							s7gValve.toFront();
							s8gValve.toFront();
							s9gValve.toFront();
							motorPipe1.animate({ "stroke": color }, 2000);
							activeTimeouts.push(setTimeout(() => {
								compressorRVent.toFront();
								stOff.toFront();
								rnOn.toFront();
								motorPipe2.animate({ "stroke": color }, time * 5);
								btrOff.hide();
								btrOn.show();
								preasureReadings();
								s1path.animate({ "stroke": color }, time * 5);
								s2path.animate({ "stroke": color }, time * 5);
								s3path.animate({ "stroke": color }, time * 5);
								s4path.animate({ "stroke": color }, time * 5);
								s5path.animate({ "stroke": color }, time * 5);
								s6path.animate({ "stroke": color }, time * 5);
								s7path.animate({ "stroke": color }, time * 5);
								s8path.animate({ "stroke": color }, time * 5);
								s9path.animate({ "stroke": color }, time * 5);
								openPath.animate({ "stroke": color }, time * 5);
								sensorCircle.animate({ "fill": color }, time * 5);
							}, 2000));
						}, 1000));
					}, 2000));
				}, 1000));
			}, 2000));
		}, 1000));


	})


	var evaluate = function(v, ve, max, min) {
		v = v + 0.3;
		ve = diff = Math.random() * (max - min) + min;
		randomSign = Math.random() < 0.5 ? -1 : 1;
		perv = (v / 100) * ve;
		perv = randomSign * perv;
		return v + perv;
	}


	var preasureReadings = function() {
		dataArr3 = [];
		var s2e = 0, s3e = 0, s4e = 0, s5e = 0, s6e = 0, s7e = 0, s8e = 0, s9e = 0;

		//		let s2min = 0.25;
		//		let s2max = 2;
		//
		//		let s3min = 0.3;
		//		let s3max = 1;
		//
		//		let s4min = 0.8;
		//		let s4max = 2;
		//
		//		let s5min = 0.4;
		//		let s5max = 0.7;
		//
		//		let s6min = 0.25;
		//		let s6max = 0.75;
		//
		//		let s7min = 0.4;
		//		let s7max = 1.2;
		//
		//		let s8min = 0.6;
		//		let s8max = 1.1;
		//
		//		let s9min = 0.7;
		//		let s9max = 1.5;

		let s2min = 1;
		let s2max = 2.5;

		let s3min = 1;
		let s3max = 2.5;

		let s4min = 1;
		let s4max = 2.5;

		let s5min = 1;
		let s5max = 2.5;

		let s6min = 1;
		let s6max = 2.5;

		let s7min = 1;
		let s7max = 2.5;

		let s8min = 1;
		let s8max = 2.5;

		let s9min = 1;
		let s9max = 2.5;

		for (i = 0; i < 20; i++) {

			activeTimeouts.push(setTimeout(() => {
				round = {};
				s2 = evaluate(s1, s2e, s2max, s2min);
				s3 = evaluate(s1, s3e, s3max, s3min);
				s4 = evaluate(s1, s4e, s4max, s4min);
				s5 = evaluate(s1, s5e, s5max, s5min);
				s6 = evaluate(s1, s6e, s6max, s6min);
				s7 = evaluate(s1, s7e, s7max, s7min);
				s8 = evaluate(s1, s8e, s8max, s8min);
				s9 = evaluate(s1, s9e, s9max, s9min);

				s1 = s1 + 0.3;

				valveCnt = valveCnt + 5;

				round.s1 = s1.toFixed(2);
				round.s2 = s2.toFixed(2);
				round.s3 = s3.toFixed(2);
				round.s4 = s4.toFixed(2);
				round.s5 = s5.toFixed(2);
				round.s6 = s6.toFixed(2);
				round.s7 = s7.toFixed(2);
				round.s8 = s8.toFixed(2);
				round.s9 = s9.toFixed(2);
				round.valveCnt = valveCnt.toFixed(2);

				dataArr3.push(round);

				cvReading.attr('text', valveCnt);
				s1Reading.attr('text', s1.toFixed(2));
				s2Reading.attr('text', s2.toFixed(2));
				s3Reading.attr('text', s3.toFixed(2));
				s4Reading.attr('text', s4.toFixed(2));
				s5Reading.attr('text', s5.toFixed(2));
				s6Reading.attr('text', s6.toFixed(2));
				s7Reading.attr('text', s7.toFixed(2));
				s8Reading.attr('text', s8.toFixed(2));
				s9Reading.attr('text', s9.toFixed(2));

				$("#cv").html(valveCnt);
				$("#s1").html(s1.toFixed(2));
				$("#s2").html(s2.toFixed(2));
				$("#s3").html(s3.toFixed(2));
				$("#s4").html(s4.toFixed(2));
				$("#s5").html(s5.toFixed(2));
				$("#s6").html(s6.toFixed(2));
				$("#s7").html(s7.toFixed(2));
				$("#s8").html(s8.toFixed(2));
				$("#s9").html(s9.toFixed(2));

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
		data.data = dataArr3;
		dataAr.push(data);

		mtrOff.toFront();
		btrOn.hide();
		btrOff.show();
		cvReading.attr('text', "0");
		activeTimeouts.push(setTimeout(() => {
			opengVent.toFront();
			s1path.animate({ "stroke": initColor }, time * 5);
			s2path.animate({ "stroke": initColor }, time * 5);
			s3path.animate({ "stroke": initColor }, time * 5);
			s4path.animate({ "stroke": initColor }, time * 5);
			s5path.animate({ "stroke": initColor }, time * 5);
			s6path.animate({ "stroke": initColor }, time * 5);
			s7path.animate({ "stroke": initColor }, time * 5);
			s8path.animate({ "stroke": initColor }, time * 5);
			s9path.animate({ "stroke": initColor }, time * 5);
			openPath.animate({ "stroke": initColor }, time * 5);
			sensorCircle.animate({ "fill": initColor }, time * 5);
			motorPipe1.animate({ "stroke": initColor }, time * 5);
			motorPipe2.animate({ "stroke": initColor }, time * 5);
			preasureReadingsRev();
		}, time * 3));
	}

	var evaluateRev = function(v, ve, max, min) {
		v = v - 0.3;
		ve = diff = Math.random() * (max - min) + min;
		randomSign = Math.random() < 0.5 ? -1 : 1;
		perv = (v / 100) * ve;
		perv = randomSign * perv;
		return v + perv;
	}

	var valveSwitchFlag = false;
	var preasureReadingsRev = function() {
		s1 = 6.00, s2 = 6.10, s3 = 5.95, s4 = 6.05, s5 = 5.90, s6 = 5.85, s7 = 5.80, s8 = 6.15, s9 = 6.20;
		var s2e = 0, s3e = 0, s4e = 0, s5e = 0, s6e = 0, s7e = 0, s8e = 0, s9e = 0;

		//		let s2min = 0.25;
		//		let s2max = 2;
		//
		//		let s3min = 0.3;
		//		let s3max = 1;
		//
		//		let s4min = 0.8;
		//		let s4max = 2;
		//
		//		let s5min = 0.4;
		//		let s5max = 0.7;
		//
		//		let s6min = 0.25;
		//		let s6max = 0.75;
		//
		//		let s7min = 0.4;
		//		let s7max = 1.2;
		//
		//		let s8min = 0.6;
		//		let s8max = 1.1;
		//
		//		let s9min = 0.7;
		//		let s9max = 1.5;

		let s2min = 1;
		let s2max = 2.5;

		let s3min = 1;
		let s3max = 2.5;

		let s4min = 1;
		let s4max = 2.5;

		let s5min = 1;
		let s5max = 2.5;

		let s6min = 1;
		let s6max = 2.5;

		let s7min = 1;
		let s7max = 2.5;

		let s8min = 1;
		let s8max = 2.5;

		let s9min = 1;
		let s9max = 2.5;

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
				s6 = evaluateRev(s1, s6e, s6max, s6min);
				s7 = evaluateRev(s1, s7e, s7max, s7min);
				s8 = evaluateRev(s1, s8e, s8max, s8min);
				s9 = evaluateRev(s1, s9e, s9max, s9min);

				if (s2 < 0) { s2 = 0 }
				if (s3 < 0) { s3 = 0 }
				if (s4 < 0) { s4 = 0 }
				if (s5 < 0) { s5 = 0 }
				if (s6 < 0) { s6 = 0 }
				if (s7 < 0) { s7 = 0 }
				if (s8 < 0) { s8 = 0 }
				if (s9 < 0) { s9 = 0 }

				s1 = s1 - 0.3;

				round.s1 = s1.toFixed(2);
				round.s2 = s2.toFixed(2);
				round.s3 = s3.toFixed(2);
				round.s4 = s4.toFixed(2);
				round.s5 = s5.toFixed(2);
				round.s6 = s6.toFixed(2);
				round.s7 = s7.toFixed(2);
				round.s8 = s8.toFixed(2);
				round.s9 = s9.toFixed(2);
				round.valveCnt = 0;

				dataArr3.push(round);

				s1Reading.attr('text', s1.toFixed(2));
				s2Reading.attr('text', s2.toFixed(2));
				s3Reading.attr('text', s3.toFixed(2));
				s4Reading.attr('text', s4.toFixed(2));
				s5Reading.attr('text', s5.toFixed(2));
				s6Reading.attr('text', s6.toFixed(2));
				s7Reading.attr('text', s7.toFixed(2));
				s8Reading.attr('text', s8.toFixed(2));
				s9Reading.attr('text', s9.toFixed(2));

				$("#cv").html("0");
				$("#s1").html(s1.toFixed(2));
				$("#s2").html(s2.toFixed(2));
				$("#s3").html(s3.toFixed(2));
				$("#s4").html(s4.toFixed(2));
				$("#s5").html(s5.toFixed(2));
				$("#s6").html(s6.toFixed(2));
				$("#s7").html(s7.toFixed(2));
				$("#s8").html(s8.toFixed(2));
				$("#s9").html(s9.toFixed(2));



				activeTimeouts.push(setTimeout(() => {
					if (flag1 === false) {
						flag1 = true;
						rnOff.toFront();
						shOn.toFront();
						opengVent.toFront();
						$("#startBtn1").prop("disabled", false);
						$("#datasheetBtn1").prop("disabled", false);
						$("#graph1,#btnVacuumMimic").prop("disabled", false);
						reading3.reading = dataAr;
						globalArr.push(reading3);
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
							+ '   <th>Sensor</th>'
							+ '   <th>Count</th>'
							+ '   <th>Check</th>'
							+ '</tr>'
							+ '</thead>'
							+ '<tbody>'
							+ '<tr>'
							+ '  <td>1</td>'
							+ '  <td>S1</td>'
							+ '  <td>' + dataAr[0].data[19].s1 + '</td>'
							+ '  <td></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>2</td>'
							+ '  <td>S2</td>'
							+ '  <td>' + dataAr[0].data[19].s2 + '</td>'
							+ '  <td><input type="checkbox" name="valid2"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>3</td>'
							+ '  <td>S3</td>'
							+ '  <td>' + dataAr[0].data[19].s3 + '</td>'
							+ '  <td><input type="checkbox" name="valid3"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>4</td>'
							+ '  <td>S4</td>'
							+ '  <td>' + dataAr[0].data[19].s4 + '</td>'
							+ '  <td><input type="checkbox" name="valid4"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>5</td>'
							+ '  <td>S5</td>'
							+ '  <td>' + dataAr[0].data[19].s5 + '</td>'
							+ '  <td><input type="checkbox" name="valid5"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>6</td>'
							+ '  <td>S6</td>'
							+ '  <td>' + dataAr[0].data[19].s6 + '</td>'
							+ '  <td><input type="checkbox" name="valid6"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>7</td>'
							+ '  <td>S7</td>'
							+ '  <td>' + dataAr[0].data[19].s7 + '</td>'
							+ '  <td><input type="checkbox" name="valid7"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>7</td>'
							+ '  <td>S8</td>'
							+ '  <td>' + dataAr[0].data[19].s8 + '</td>'
							+ '  <td><input type="checkbox" name="valid8"></td>'
							+ '</tr>'
							+ '<tr>'
							+ '  <td>9</td>'
							+ '  <td>S9</td>'
							+ '  <td>' + dataAr[0].data[19].s9 + '</td>'
							+ '  <td><input type="checkbox" name="valid9"></td>'
							+ '</tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<div class="col-sm-12 mt-4">'
							+ '<button type="button" class="btn btn-info" id="btnResult2" style="margin-bottom:100px;width:100%" >Submit</button>'
							+ '</div>';
						$("#Selection").html(htm2);
						
						$(document).on('click', '#btnResult2', function() {
//							let pressuresensorData = [];

							$("#checkTable tbody tr").each(function() {
								let srNo = $(this).find("td").eq(0).text(); // Sr No
								let sensorName = $(this).find("td").eq(1).text(); // Sensor Name
								let count = parseFloat($(this).find("td").eq(2).text()); // Convert Count to number
								let isChecked = $(this).find("input[type='checkbox']").is(":checked"); // Checked or not

								let status = "N/A"; // Default for S1

								if (sensorName === "S1") {
									// Skip validation and highlight differently for reference sensor
									$(this).find("input[type='checkbox']").prop("disabled", true); // Disable checkbox
									$(this).css("background-color", "#e2e3e5"); // Grey background
								} else {
									// Check if count is within 1274 to 1326
									let isWithinRange = count >= 5.88 && count <= 6.12;

									// Apply logic
									status = (isWithinRange && !isChecked) || (!isWithinRange && isChecked) ? 'Correct' : 'Wrong';

									if (status === "Correct") {
										$(this).css('background-color', '#d4edda'); // light green
									} else {
										$(this).css('background-color', '#f8d7da'); // light red
									}
								}

								pressuresensorData.push({
									srNo: srNo,
									sensorName: sensorName,
									count: count,
									isChecked: isChecked,
									status: status
								});
							});

							// Show result
							
							
							if(hookUpPhase<5){
							$("#hookUpSelect").prop("disabled", false);
						$("#btnResult2").prop("hidden", true);
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


	function resetAllValves() {

		s1path.attr({ "stroke": "#fff" });
		s2path.attr({ "stroke": "#fff" });
		s3path.attr({ "stroke": "#fff" });
		s4path.attr({ "stroke": "#fff" });
		s5path.attr({ "stroke": "#fff" });
		s6path.attr({ "stroke": "#fff" });
		s7path.attr({ "stroke": "#fff" });
		s8path.attr({ "stroke": "#fff" });
		s9path.attr({ "stroke": "#fff" });
		openPath.attr({ "stroke": "#fff" });
		sensorCircle.attr({ "fill": "#fff" });
		motorPipe1.attr({ "stroke": "#fff" });
		motorPipe2.attr({ "stroke": "#fff" });

		s1rValve.toFront();
		s2rValve.toFront();
		s3rValve.toFront();
		s4rValve.toFront();
		s5rValve.toFront();
		s6rValve.toFront();
		s7rValve.toFront();
		s8rValve.toFront();
		s9rValve.toFront();

		controlValve.toFront();
		sensorCircle.toFront();
		connSocket1.toFront();
		connSocket2.toFront();
	}


}