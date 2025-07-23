//console.log(globalArr);
timerMasterJson = {};
var startCount = 0;
var datasheetCount = 0;
var trendsCount = 0;
var reading = {};
reading.sensor = "flow";
var selectedValue;
let flowsensorData = [];

var dataArr = [];
function flowSensorMimic() {
	hookUpPhase++;
	$("#hookUpSelect").prop("disabled", true);
	timerMasterJson.squences = $("#counter").text();
	seconds = 0;
	updateCounter();
	$("#btnDiv").prop("hidden", false);
	$("#Header").html("	<center><span >FLOW SENSOR - SIMULATION</span></center>");
	$("#diagram").html("");

	htm = ''
		+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+ '<center><span >PROCESS MONITORING PANEL</span></center>'
		+ '</div>'
		+ '<div class="row">'
		+ ' <div class="panel">'
		+ ' <h5>Select Run Mode</h5>'
		
		+ ' <div class="form-check form-check-inline">'
		+ '   <input class="form-check-input" type="radio" name="Mode" id="runModeCV" value="cv">'
		+ '   <label class="form-check-label radio-label" for="twoMinutes">Control Valve</label>'
		+ '  </div>'
		+ '  <div class="form-check form-check-inline">'
		+ '    <input class="form-check-input" type="radio" name="Mode" id="runModeM1" value="m1">'
		+ '    <label class="form-check-label radio-label" for="threeMinutes">Motor</label>'
		+ '  </div>'

		//  +'	  <div id="selectedTime">Selected Time: None</div>'
		+ '	</div>'
		+ '</div>'
		+ '<div class="row">'
		+ '<div class="col-sm-6">'
		+ '<button id="fillTankBtn" class="btn btn-danger" disabled style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#myModal1">Fill Tank</button>'
		+ '</div>'
		+ '<div class="col-sm-6">'
		+ '<button id="startBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+ '</div>'
		+ '</div>'
		//		+'<div class="row">'
		//		+'<div class="col-sm-6">'
		//		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		//		+'</div>'
		//		+'<div class="col-sm-6">'
		//		+'<button type="button" class="btn btn-danger"  id="graph" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends1" disabled>Trends </button>'
		//		+'</div>'
		//		+'</div>'
		+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+ '<center><span >READINGS</span></center>'
		+ '</div>'
		+ '<div class="row conf" style="margin-bottom:50px">'
		+ '<table class="table table-bordered" id="countTable">'
		+ ' <thead>'
		//		+'  <tr>'
		//		+'    <th>Firstname</th>'
		//		+'   <th>Lastname</th>'
		//		+'    <th>Email</th>'
		//		+' </tr>'
		+ '</thead>'
		+ '<tbody>'
		+ ' <tr>'
		+ '   <td><label><b>MTR :</b></label></td>'
		+ '   <td><label class="PMCValue" id="motorVal1">0</label>%</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>CV :</b></label></td>'
		+ ' <td><label class="PMCValue" id="cvVal1">0</label>%</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>FE1 :</b></label></td>'
		+ ' <td><label class="PMCValue" id="orificeVal1">0</label>lph</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>FE2 : </b></label></td>'
		+ ' <td><label class="PMCValue" id="venturiVal1">0</label>lph</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>FE3 :  </b></label></td>'
		+ ' <td><label class="PMCValue" id="pitotVal1">0</label>lph</td>'
		+ '  </tr>'

		+ '  <tr>'
		+ ' <td><label><b>FT1 :</b></label></td>'
		+ ' <td><label class="PMCValue" id="eleMagneticVal1">0</label>lph</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>FT2 :</b></label></td>'
		+ ' <td><label class="PMCValue" id="ultrasonicVal1">0</label>lph</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>FT3 :</b></label></td>'
		+ ' <td><label class="PMCValue" id="turbineVal1">0</label>lph</td>'
		+ '  </tr>'
		+ '  <tr>'
		+ ' <td><label><b>WT :</b></label></td>'
		+ ' <td><label class="PMCValue" id="lcWtVal1">240</label>Kg</td>'
		+ '  </tr>'
		+ '</tbody>'
		+ '</table>'

		//		+ '<table border="1" cellpadding="10" cellspacing="0" id="checkTable" hidden>'
		//		+ '<thead>'
		//		+ '<tr>'
		//		+ '   <th>Sr No</th>'
		//		+ '   <th>Sensor Name</th>'
		//		+ '   <th>Count</th>'
		//		+ '   <th>Valid or Not</th>'
		//		+ '</tr>'
		//		+ '</thead>'
		//		+ '<tbody>'
		//		+ '<tr>'
		//		+ '  <td>1</td>'
		//		+ '  <td>CV</td>'
		//		+ '  <td>12</td>'
		//		+ '  <td><input type="checkbox" name="valid1"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>2</td>'
		//		+ '  <td>FE1</td>'
		//		+ '  <td>23</td>'
		//		+ '  <td><input type="checkbox" name="valid2"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>3</td>'
		//		+ '  <td>FE2</td>'
		//		+ '  <td>55</td>'
		//		+ '  <td><input type="checkbox" name="valid3"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>4</td>'
		//		+ '  <td>FE3</td>'
		//		+ '  <td>34</td>'
		//		+ '  <td><input type="checkbox" name="valid4"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>5</td>'
		//		+ '  <td>FT1</td>'
		//		+ '  <td>56</td>'
		//		+ '  <td><input type="checkbox" name="valid5"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>6</td>'
		//		+ '  <td>FT2</td>'
		//		+ '  <td>78</td>'
		//		+ '  <td><input type="checkbox" name="valid6"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>7</td>'
		//		+ '  <td>FT3</td>'
		//		+ '  <td>89</td>'
		//		+ '  <td><input type="checkbox" name="valid7"></td>'
		//		+ '</tr>'
		//		+ '<tr>'
		//		+ '  <td>8</td>'
		//		+ '  <td>WT</td>'
		//		+ '  <td>98</td>'
		//		+ '  <td><input type="checkbox" name="valid8"></td>'
		//		+ '</tr>'
		//		+ '</tbody>'
		//		+ '</table>'
		//		+ '<div class="col-sm-12 mt-4">'
		//		+ '<button type="button" class="btn btn-danger" id="btnResult" style="margin-bottom:50px;width:100%" disabled>Submit</button>'
		//		+ '</div>'
		+ '</div>'

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


	//		+'<div class="modal fade " id="modalTrends">'
	//		+'<div class="modal-dialog modal-xl" >'
	//		+'<div class="modal-content">'
	//		+'<div class="modal-header">'
	//		+'<h4 class="modal-title"><center></center></h4>'
	//		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
	//		+'</div>'
	//		+'<div class="modal-body" id="bodyTrends">'
	//		+'</div>'
	//		+'<div class="modal-footer">'
	////		+'       <button type="button" class="btn btn-danger"  id="download" style="margin-top:10px;float: right;" >Download </button>'
	//	
	////		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
	//		+'</div>'
	//		+'</div>'
	//		+'</div>'
	//		+'</div>'
	$("#Selection").html(htm);
	const radioButtons = document.querySelectorAll('input[name="Mode"]');

	radioButtons.forEach(radio => {
		radio.addEventListener('change', () => {
			$("#fillTankBtn").prop("disabled", false);
			selectedValue = $('input[name="Mode"]:checked').val();
			runMode = selectedValue;
		});
	});
	animateFlowSensor();

	$("#btnResult").click(function() {
		resultJson.animationStart = startCount;
		resultJson.datasheet = datasheetCount;
		resultJson.trends = trendsCount;
		//		console.log(resultJson);
		result();
	});

	$("#graph").click(function() {
		trendsCount++;
		$("#trends1").empty("");
		var htm = ''

		for (var i = 0; i < dataArr.length; i++) {
			htm += '<div class="Container-fluid">'
			//		htm+='<h4>Test Cycle - '+(i+1)
			var rowStr = 'RowDiv' + (i + 1)
			htm += "<div class='row' id='" + rowStr + "'>"

			var GraphData = 'sensorGraphCold' + i;
			htm += "<div class='col-sm-12' id=" + GraphData + ">"
				+ '</div>'

			//For Hot Readings

			var GraphData = 'sensorGraphHot' + i;
			var downloadGraphBtn = 'graphBtn' + i;
			htm += "<div class='col-sm-12' id=" + GraphData + ">"
				+ '</div>'
				+ "<div class='col-sm-12' id=" + downloadGraphBtn + ">"
				+ '</div>'
				+ '</div>'
			htm += '</div>'
			$("#trends1").append(htm);
			flowSensorGraph(dataArr[i].sensor, i);
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
		datasheetCount++;
		Datasheet();
	});

	$('#download').on('click', function() {
		//		$('#saveAsJpg').prop("hidden",true);
		html2canvas(document.querySelector("#bodyTrends")).then(canvas => {
			// Append the screenshot canvas to the body
			document.body.appendChild(canvas);
			$("canvas").css("display", "none");
			// Optionally save the screenshot as an image
			var link = document.createElement('a');
			link.download = 'FlowSensorGraph.png';
			link.href = canvas.toDataURL();
			link.click();
		});
	});
}

//TODO animation starts here

var runMode = selectedValue;
function animateFlowSensor() {

	var data = {};
	var dataArrUp = [];
	var dataArrUpwt = [];
	var dataArrDownwt = [];
	var w = 1250;
	var h = 700;
	//			var paper ;
	var x = 10, y = 20;

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '110%');
	} else {
		paper = new Raphael(document.getElementById('diagram'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '110%');
	}

	paper.clear();
	var time = 500;
	var htb = -110;
	var htb1 = 110;
	var htt = -110;
	var htt1 = 110;
	var ptb = 20;
	var ptt = 20;
	var initFlg = false;
	var color = '#a8f2f7';
	var emptyColor = "#fff";
	var txtColor = "#00cc88";
	var expCompleteFlg = false;
	var strtBtnFlg = false;


	//		    var runMode = "m1";
	runMode = selectedValue;
	var loadCell = 1200;
	var wt = loadCell / 20;
	var tankWt = 0;
	var tareInit = wt * 4;

	function tank(x, y) {
		paper.path('M' + (x) + ' ' + (y) + 'l 80 0 l 0 30 l 25 30 l 0 130 l -130 0 l 0 -130 l 25 -30 z').attr({ 'stroke': 'black', 'stroke-width': '2' });
	}

	tank((x + 965), (y + 50));
	tank((x + 965), (y + 400));

	var inletG = paper.image("FlowSensor/images/svValveV2G.png", (x + 1090), (y + 349), 50, 40).attr({ 'transform': 'r' + 270 });
	var inletR = paper.image("FlowSensor/images/svValveV1R.png", (x + 1090), (y + 349), 50, 40).attr({ 'transform': 'r' + 270 });
	inletG.hide();

	function tankDefaultFitting(x, y) {
		paper.path('M' + (x + 1180) + ' ' + (y + 380) + 'l -155 0 l 0 80').attr({ 'stroke': '#818080', 'stroke-width': '8' });
		paper.image("FlowSensor/images/tankInit.png", (x + 1050), (y + 330), 60, 100);
		inletR.toFront();
	}

	tankDefaultFitting(x, y);

	function platform(x, y) {
		paper.rect((x + 905), (y + 265), 200, 1).attr({ "stroke": "#000", "stroke-width": 5 });
		paper.path('M' + (x + 925) + ' ' + (y + 266) + 'l -10 10 l 20 0 z').attr({ "fill": "#000", "stroke": "#000", "stroke-width": 5 });
		paper.path('M' + (x + 1085) + ' ' + (y + 266) + 'l -10 10 l 20 0 z').attr({ "fill": "#000", "stroke": "#000", "stroke-width": 5 });
	}

	platform(x, y);
	platform(x, (y + 328));

	paper.path("M" + (x + 1005) + " " + (y + 240) + " l 0 160").attr({ "stroke-width": 20, "stroke": "#818080", "stroke-linejoin": "round" });

	paper.path("M" + (x + 1005) + " " + (y + 240) + " l 0 160").attr({ "stroke-width": 16, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.path("M" + (x + 940) + " " + (y + 578) + " l -155 0  l -750 0 l 0 -550 l 650 0 l 320 0 l 0 80").attr({ "stroke-width": 20, "stroke": "#818080", "stroke-linejoin": "round" });

	paper.path("M" + (x + 940) + " " + (y + 578) + " l -155 0  l -750 0 l 0 -550 l 650 0 l 320 0 l 0 80").attr({ "stroke-width": 16, "stroke": "#fff", "stroke-linejoin": "round" });

	paper.text((x + 860), (y + 220), "Tare Reset =>").attr({ 'font-size': 12, 'font-weight': 'bold' });
	var tareOn = paper.image("FlowSensor/images/green.png", (x + 900), (y + 207), 30, 30);
	var tareOff = paper.image("FlowSensor/images/red.png", (x + 900), (y + 207), 30, 30);

	paper.image("FlowSensor/images/loadcell.png", (x + 1025), (y + 227), 50, 50); //dummy load cell

	paper.image("FlowSensor/images/loadcell.png", (x + 935), (y + 227), 50, 50).transform("s-1,1"); //Reading load cell
	paper.text((x + 890), (y + 252), "WT(Load Cell)").attr({ 'font-size': 12, 'font-weight': 'bold' });

	//	Electricity and air flow indicators
	paper.rect((x + 150), (y + 200), 270, 95, 5);

	paper.text((x + 250), (y + 225), "Electricity Status : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var eleOn = paper.image("FlowSensor/images/on.png", (x + 345), (y + 210), 55, 35).hide();
	var eleOff = paper.image("FlowSensor/images/off.png", (x + 345), (y + 210), 55, 35);

	paper.text((x + 250), (y + 265), "Air Flow Status : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var airOn = paper.image("FlowSensor/images/on.png", (x + 345), (y + 250), 55, 35).hide();
	var airOff = paper.image("FlowSensor/images/off.png", (x + 345), (y + 250), 55, 35);

	paper.rect((x + 450), (y + 200), 270, 135, 5);

	paper.text((x + 550), (y + 225), "Start up phase : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var stOn = paper.image("FlowSensor/images/green.png", (x + 645), (y + 210), 40, 40);
	var stOff = paper.image("FlowSensor/images/red.png", (x + 645), (y + 210), 40, 40);

	paper.text((x + 550), (y + 265), "Running phase : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var rnOn = paper.image("FlowSensor/images/green.png", (x + 645), (y + 250), 40, 40);
	var rnOff = paper.image("FlowSensor/images/red.png", (x + 645), (y + 250), 40, 40);

	paper.text((x + 550), (y + 305), "Shutdown phase : ").attr({ 'font-size': 17, 'font-weight': 'bold' });
	var shOn = paper.image("FlowSensor/images/green.png", (x + 645), (y + 290), 40, 40);
	var shOff = paper.image("FlowSensor/images/red.png", (x + 645), (y + 290), 40, 40);

	//			All about top tank i.e. top tank
	var lhtIndicator = paper.image("FlowSensor/images/lhindicator.png", (x + 1046), (y + 125), 45, 20);
	paper.text((x + 1085), (y + 120), "LH1").attr({ 'font-size': 12, 'font-weight': 'bold' });
	var lhtgStrip = paper.image("FlowSensor/images/lblgreen.png", (x + 1100), (y + 125), 35, 22);
	var lhtrStrip = paper.image("FlowSensor/images/lblred.png", (x + 1100), (y + 125), 35, 22);

	var lltIndicator = paper.image("FlowSensor/images/llindicator.png", (x + 1042), (y + 200), 45, 20);
	paper.text((x + 1085), (y + 195), "LL1").attr({ 'font-size': 12, 'font-weight': 'bold' });
	var lltrStrip = paper.image("FlowSensor/images/lblred.png", (x + 1100), (y + 200), 35, 22);
	var lltgStrip = paper.image("FlowSensor/images/lblgreen.png", (x + 1100), (y + 200), 35, 22);

	//			All about lower tank i.e. bottom tank	

	var lhbIndicator = paper.image("FlowSensor/images/lhindicator.png", (x + 1046), (y + 475), 45, 20);
	paper.text((x + 1085), (y + 460), "LH").attr({ 'font-size': 12, 'font-weight': 'bold' });
	var lhbgStrip = paper.image("FlowSensor/images/lblgreen.png", (x + 1100), (y + 475), 35, 22);
	var lhbrStrip = paper.image("FlowSensor/images/lblred.png", (x + 1100), (y + 475), 35, 22);

	var llbIndicator = paper.image("FlowSensor/images/llindicator.png", (x + 1042), (y + 550), 45, 20);
	paper.text((x + 1085), (y + 545), "LL").attr({ 'font-size': 12, 'font-weight': 'bold' });
	var llbrStrip = paper.image("FlowSensor/images/lblred.png", (x + 1100), (y + 550), 35, 22);
	var llbgStrip = paper.image("FlowSensor/images/lblgreen.png", (x + 1100), (y + 550), 35, 22);

	//	Motor
	var motor_img = paper.image("FlowSensor/images/motor.png", (x + 780), (y + 510), 100, 100);  //motor

	//			On Off Buttons
	var onBtn = paper.image("FlowSensor/images/circle_green.png", (x + 816), (y + 553), 30, 30);

	var offBtn = paper.image("FlowSensor/images/circle_red.png", (x + 816), (y + 553), 30, 30);

	paper.text((x + 1105), (y + 615), "Drain Valve").attr({ 'font-size': 15, 'font-weight': 'bold' });
	paper.image("FlowSensor/images/svValveV1R.png", (x + 1030), (y + 589), 40, 40); //feed tank drain valve

	paper.text((x + 1040), (y + 295), "SV").attr({ 'font-size': 15, 'font-weight': 'bold' });
	var gvalve_sv1 = paper.image("FlowSensor/images/svValveV2G.png", (x + 976), (y + 280), 100, 80);   //tank connector vertical valve
	var rvalve_sv1 = paper.image("FlowSensor/images/svValveV1R.png", (x + 976), (y + 280), 100, 80);   //tank connector vertical valve

	var valve_cv = paper.image("FlowSensor/images/controlValve.png", (x + 530), (y + 486), 120, 120);

	var orifice = paper.image("FlowSensor/images/orifice.png", (x + 320), (y + 477), 180, 150);

	var venture = paper.image("FlowSensor/images/venturi.png", (x + 140), (y + 437), 100, 170);
	//	
	var pitot = paper.image("FlowSensor/images/pitot.png", (x + 140), (y - 65), 80, 100);
	//	
	var magnetic = paper.image("FlowSensor/images/turbine.png", (x + 740), (y - 58), 150, 120);
	//	
	var ultrasonic = paper.image("FlowSensor/images/ultrasonic.png", (x + 500), (y - 58), 200, 180);
	//	
	var turbine = paper.image("FlowSensor/images/magnetic.png", (x + 330), (y - 60), 100, 120);

	paper.text((x + 200), (y + 425), "FE2").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 405), (y + 485), "FE1").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 595), (y + 485), "CV").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 830), (y + 500), "MTR").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 175), (y + 65), "FE3").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 375), (y + 65), "FT1").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 610), (y + 65), "FT2").attr({ 'font-size': 15, 'font-weight': 'bold' });

	paper.text((x + 815), (y + 65), "FT3").attr({ 'font-size': 15, 'font-weight': 'bold' });

	function rectTextBoxes(x, y) {
		paper.rect((x + 130), (y + 85), 90, 28, 7).attr({ "fill": "#000", "stroke": "#9d9d9e", "stroke-width": 5 });
	}

	rectTextBoxes(x, y);
	var pitotVal = paper.text((x + 175), (y + 99), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 200), y);
	var magneticVal = paper.text((x + 375), (y + 99), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 430), y);
	var ultrasonicVal = paper.text((x + 605), (y + 99), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 635), y);
	var turbineVal = paper.text((x + 810), (y + 99), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 25), (y + 300));
	var venturiVal = paper.text((x + 200), (y + 399), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 230), (y + 360));
	var orificeVal = paper.text((x + 405), (y + 459), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 420), (y + 360));
	var cvVal = paper.text((x + 595), (y + 459), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 655), (y + 360));
	var motorVal = paper.text((x + 830), (y + 459), "0").attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	rectTextBoxes((x + 675), (y + 183));
	var loadcellVal = paper.text((x + 850), (y + 282), tareInit).attr({ "font-size": 18, "font-family": "digital-clock-font", "fill": txtColor, "font-weight": "bold" });

	lhtgStrip.toFront();
	lltrStrip.toFront();
	lhbgStrip.toFront();
	llbrStrip.toFront();

	initFill(x, y);


	function initFill(x, y) {
		a = [];
		a[0] = paper.path("M" + (x + 1005) + " " + (y + 238) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
		a[0].animate({ path: "M" + (x + 1005) + " " + (y + 238) + " l 0 43" }, (100), function() { })

		a[1] = paper.path("M" + (x + 1005) + " " + (y + 239) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '128' })
		a[1].animate({ path: "M" + (x + 1005) + " " + (y + 239) + " l 0 -20" }, (200), function() { })

		a[3] = paper.path("M" + (x + 1005) + " " + (y + 589) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '128' })
		a[3].animate({ path: "M" + (x + 1005) + " " + (y + 589) + " l 0 -20" }, (200), function() { })
	}

	//			var cntbLbl = paper.text((x + 980), (y + 535), 20).attr({ 'font-size': 15, 'font-weight': 'bold' });

	//			var cnttLbl = paper.text((x + 980), (y + 185), 20).attr({ 'font-size': 15, 'font-weight': 'bold' });
	s = [];

	//			 Drain top tank
	function emptyTopTankToBottom(x, y) {
		resetMeterToZero();
		r[0].hide();
		r[1].hide();
		r[2].hide();
		r[3].hide();
		gvalve_sv1.toFront();
		offBtn.toFront();

		s[0] = paper.path("M" + (x) + " " + (y + 137) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
		s[0].animate({ path: "M" + (x) + " " + (y + 137) + " l 0 213" }, (time), function() {
			decrementLoadCell();
			tank_emptyt((x), (y - 110));
			tank_fillb((x), (y + 350));



		});
	}

	//			Code for reverse counter of valve or motor for down trend of sensors start			
	function startReverseAnimationForMaxToMinFlow() {

		if (expCompleteFlg == false) {
			expCompleteFlg = true;

			setTimeout(() => {

				//					stOff.toFront();
				//					rnOn.toFront();
				loadcellVal.attr('text', "0");
				toastr.success("Tare weight reset to 0");
				setTimeout(() => {
					r = [];
					r[0] = paper.path("M" + (x + 940) + " " + (y + 578) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
					motor_img.toFront();
					onBtn.toFront();
					valve_cv.toFront();
					orifice.toFront();
					venture.toFront();
					r[0].animate({ path: "M" + (x + 940) + " " + (y + 578) + " l -912 0" }, (time), function() {
						tank_emptyRevb((x + 1005), (y + 460));
						r[1] = paper.path("M" + (x + 35) + " " + (y + 580) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
						r[1].animate({ path: "M" + (x + 35) + " " + (y + 582) + " l 0 -560" }, (time), function() {
							r[2] = paper.path("M" + (x + 30) + " " + (y + 28) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
							pitot.toFront();
							magnetic.toFront();
							ultrasonic.toFront();
							turbine.toFront();
							r[2].animate({ path: "M" + (x + 30) + " " + (y + 28) + " l 983 0" }, (time), function() {
								r[3] = paper.path("M" + (x + 1005) + " " + (y + 28) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
								r[3].animate({ path: "M" + (x + 1005) + " " + (y + 28) + " l 0 200" }, (time), function() {
									tank_fillRevt((x + 1005), (y + 220));

								})
							})
						})
					})

					setTimeout(() => {
						valueIteratorRev();
					}, time);
				}, time);

				tareOn.toFront();
			}, 5000)
		}
	}

	//			TODO decrement load cell function
	function decrementLoadCell() {

		ptDec = 1;
		var ptd1_interval = setInterval(function() {
			if (ptt > 0 && !(tankWt < 0)) {
				if (ptt % 5 == 0) {
					loadcellVal.attr('text', tankWt);
					$("#lcWtVal1").text(tankWt);

					if (expCompleteFlg == false) {
						dataArrDownwt.push(tankWt);
						data.downWt = dataArrDownwt;
					}
					tankWt = tankWt - wt;
				}
			} else {
				clearInterval(ptd1_interval);
				tareOff.toFront();

				if (expCompleteFlg == true) {
					data.upwt = dataArrUpwt;
					data.sensor = dataArrUp;
					dataArr.push(data);
					reading.reading = dataArr;
					globalArr.push(reading);
					//console.log(globalArr);

					//					console.log(globalArr[0].reading[0].sensor[20].tv);


				}

				if (expCompleteFlg == true) {
					rnOff.toFront();
					shOff.toFront();
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

					htm = ''
						+ '<div class="row titlePart"  style="border-style: unset;padding:7px;">'
						+ '<center><span >CHECK SENSORS</span></center>'
						+ '</div>'
						+ '<h6 style="background-color:skyblue; padding:5px;">Considering the FT3 sensor as the standard sensor, compare the readings of other sensors with it and reject and check those with more than &plusmn;2% inaccuracy</h6>'
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
						+ '  <td>FE1</td>'
						+ '  <td>' + dataArr[0].sensor[19].ov + '</td>'
						+ '  <td><input type="checkbox" name="FE1"></td>'
						+ '</tr>'
						+ '<tr>'
						+ '  <td>2</td>'
						+ '  <td>FE2</td>'
						+ '  <td>' + dataArr[0].sensor[19].vv + '</td>'
						+ '  <td><input type="checkbox" name="FE2"></td>'
						+ '</tr>'
						+ '<tr>'
						+ '  <td>3</td>'
						+ '  <td>FE3</td>'
						+ '  <td>' + dataArr[0].sensor[19].pv + '</td>'
						+ '  <td><input type="checkbox" name="FE3"></td>'
						+ '</tr>'
						+ '<tr>'
						+ '  <td>4</td>'
						+ '  <td>FT1</td>'
						+ '  <td>' + dataArr[0].sensor[19].mv + '</td>'
						+ '  <td><input type="checkbox" name="FT1"></td>'
						+ '</tr>'
						+ '<tr>'
						+ '  <td>5</td>'
						+ '  <td>FT2</td>'
						+ '  <td>' + dataArr[0].sensor[19].uv + '</td>'
						+ '  <td><input type="checkbox" name="FT2"></td>'
						+ '</tr>'
						+ '<tr>'
						+ '  <td>6</td>'
						+ '  <td>FT3</td>'
						+ '  <td>' + dataArr[0].sensor[19].tv + '</td>'
						+ '  <td></td>'
						+ '</tr>'
						+ '</tbody>'
						+ '</table>'
						+ '<div class="col-sm-12 mt-4">'
						+ '<button type="button" class="btn btn-info" id="btnResult" style="margin-bottom:100px;width:100%" >Submit</button>'
						+ '</div>';
					$("#Selection").html(htm);

					$(document).on('click', '#btnResult', function() {
//						let flowsensorData = [];

						$("#checkTable tbody tr").each(function() {
							let srNo = $(this).find("td").eq(0).text(); // Sr No
							let sensorName = $(this).find("td").eq(1).text(); // Sensor Name
							let count = parseFloat($(this).find("td").eq(2).text()); // Convert Count to number
							let isChecked = $(this).find("input[type='checkbox']").is(":checked"); // Checked or not

							let status = "N/A"; // Default for S1

							if (sensorName === "FT3") {
								// Skip validation and highlight differently for reference sensor
								$(this).find("input[type='checkbox']").prop("disabled", true); // Disable checkbox
								$(this).css("background-color", "#e2e3e5"); // Grey background
							} else {
								// Check if count is within 1274 to 1326
								let isWithinRange = count >= 5390 && count <= 5610;

								// Apply logic
								status = (isWithinRange && !isChecked) || (!isWithinRange && isChecked) ? 'Correct' : 'Wrong';

								if (status === "Correct") {
									$(this).css('background-color', '#d4edda'); // light green
								} else {
									$(this).css('background-color', '#f8d7da'); // light red
								}
							}
 
							flowsensorData.push({
								srNo: srNo,
								sensorName: sensorName,
								count: count,
								isChecked: isChecked,
								status: status
							});
							
						});

						// Show result
						
                        
//                        finResult();
                        
                        if(hookUpPhase<5){
							$("#hookUpSelect").prop("disabled", false);
						$("#btnResult").prop("hidden", true);
						
						$("#checkTable").css("margin-bottom", "100px");
						//console.log(flowsensorData);
						
						Swal.fire({
//							title: 'Information',
//							html: '<pre>' + JSON.stringify(flowsensorData, null, 2) + '</pre>',
							html: '<pre>Select Another Sensor</pre>',
							width: 300,
							icon: 'info'
						});
						
						}else{
							finResult();
						}
                        
						
					});



					$("#startBtn").prop("disabled", false);
					$("#flowSensorNextLvlBtn").prop("disabled", false);
					$("#datasheetBtn,#graph,#BtnResult").prop("disabled", false);
					$("#checkTable").prop("hidden", false);
					$("#countTable").prop("hidden", true);


				}

				startReverseAnimationForMaxToMinFlow(expCompleteFlg);
			}
		}, time / 5);
	}

	function tank_fillb(x, y) {
		if (initFlg == false) {
			inletR.hide();
			inletG.show().toFront();
			a[2] = paper.path("M" + (x + 20) + " " + (y - 110) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '8' })
			a[2].animate({ path: "M" + (x + 20) + " " + (y - 110) + " l 0 110" }, (200), function() { })
		}

		initFlg = true;
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x) + " " + (y) + "  l 0  " + (htb) + "", 'stroke-width': '128', 'stroke': color,
			opacity: 1
		}, time * 20);

		intFact = 1;
		var pinterval = setInterval(function() {
			llbIndicator.toFront();
			lhbIndicator.toFront();
			if (ptb < 100) {
				if (ptb == 25) {
					llbgStrip.toFront();
				}
				if (ptb == 80) {
					lhbrStrip.toFront();
				}
				ptb = ptb + intFact;
				//						cntbLbl.attr('text', Math.round(ptb));
				//						cntbLbl.toFront();
			} else {
				clearInterval(pinterval);
				inletR.show().toFront();
				if (strtBtnFlg == false) {
					$("#startBtn").prop("disabled", false);

					strtBtnFlg = true;
				}
			}
		}, time / 4);
	};


	function tank_emptyb(x, y) {
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': emptyColor, 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x) + " " + (y) + "  l 0  " + (htb1) + "", 'stroke-width': '128', 'stroke': emptyColor,
			opacity: 1
		}, time * 23);

		ptDec = 1;
		var ptd_interval3 = setInterval(function() {
			llbIndicator.toFront();
			lhbIndicator.toFront();
			if (ptb > 20) {
				if (ptb == 25) {
					llbrStrip.toFront();
					//							offBtn.toFront();
				}
				if (ptb == 80) {
					lhbgStrip.toFront();
				}
				ptb = ptb - ptDec;
				//						cntbLbl.attr('text', Math.round(ptb));
				//						cntbLbl.toFront();
			} else {
				clearInterval(ptd_interval3);
			}
		}, time / 3.5);
	};

	function tank_emptyRevb(x, y) {
		//				$("#startBtn").prop("disabled", true);
		//				$("#datasheetBtn,#graph").prop("disabled", true);
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': emptyColor, 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x) + " " + (y) + "  l 0  " + (htb1) + "", 'stroke-width': '128', 'stroke': emptyColor,
			opacity: 1
		}, time * 23);

		ptDec = 1;
		var ptd_interval3 = setInterval(function() {
			llbIndicator.toFront();
			lhbIndicator.toFront();
			if (ptb > 20) {
				if (ptb == 25) {
					llbrStrip.toFront();
					//							offBtn.toFront();
				}
				if (ptb == 80) {
					lhbgStrip.toFront();
				}
				ptb = ptb - ptDec;
				//						cntbLbl.attr('text', Math.round(ptb));
				//						cntbLbl.toFront();
			} else {
				//						toastr.info("Tank empty");
				clearInterval(ptd_interval3);
			}
		}, time / 3.5);
	};


	function tank_fillt(x, y) {
		//				dataArrUp = [];
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x) + " " + (y) + "  l 0  " + (htt) + "", 'stroke-width': '128', 'stroke': color,
			opacity: 1
		}, time * 20);

		intFact = 1;
		var pinterval = setInterval(function() {
			lltIndicator.toFront();
			lhtIndicator.toFront();
			if (ptt < 100) {
				if (ptt == 25) {
					lltgStrip.toFront();
				}
				if (ptt == 80) {
					lhtrStrip.toFront();
				}
				ptt = ptt + intFact;
				//						cnttLbl.attr('text', Math.round(ptt));
				//						cnttLbl.toFront();
			} else {
				clearInterval(pinterval);
				toastr.info("Tank filled. Wait for a while to drain the tank");
				setTimeout(function() { emptyTopTankToBottom(x, y); }, 5000);
			}
		}, time / 4);
	};


	function tank_fillRevt(x, y) {
		//				dataArrUp = [];
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': color, 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x) + " " + (y) + "  l 0  " + (htt) + "", 'stroke-width': '128', 'stroke': color,
			opacity: 1
		}, time * 20);

		intFact = 1;
		var pinterval = setInterval(function() {
			lltIndicator.toFront();
			lhtIndicator.toFront();
			if (ptt < 100) {
				if (ptt == 25) {
					lltgStrip.toFront();
				}
				if (ptt == 80) {
					lhtrStrip.toFront();
				}
				ptt = ptt + intFact;
				//						cnttLbl.attr('text', Math.round(ptt));
				//						cnttLbl.toFront();
			} else {
				rnOff.toFront();
				shOn.toFront();
				clearInterval(pinterval);
				toastr.info("Tank filled. Wait for a while to drain the tank");
				setTimeout(function() { emptyTopTankToBottom(x, y); }, 5000);
			}
		}, time / 4);
	};

	function tank_emptyt(x, y) {
		dataArrDownwt = [];
		var b = paper.path('M' + (x) + ' ' + (y) + 'l 0 0').attr({ 'stroke': emptyColor, 'stroke-width': '128' });
		level = b.animate({
			path: "M" + (x) + " " + (y) + "  l 0  " + (htt1) + "", 'stroke-width': '128', 'stroke': emptyColor,
			opacity: 1
		}, time * 20);

		ptDec = 1;
		var ptd_interval2 = setInterval(function() {
			lltIndicator.toFront();
			lhtIndicator.toFront();
			if (ptt > 20) {
				if (ptt == 25) {
					lltrStrip.toFront();
				}
				if (ptt == 80) {
					lhtgStrip.toFront();
				}

				ptt = ptt - ptDec;
				//						cnttLbl.attr('text', Math.round(ptt));
				//						cnttLbl.toFront();
			} else {
				clearInterval(ptd_interval2);
				if (s.length != 0) {
					rvalve_sv1.toFront();
					s[0].hide();
				}
			}
		}, time / 4);
	};

	function resetMeterToZero() {
		//				rnOff.toFront();
		//				shOn.toFront();
		pitotVal.attr('text', "0");
		magneticVal.attr('text', "0");
		ultrasonicVal.attr('text', "0");
		turbineVal.attr('text', "0");
		venturiVal.attr('text', "0");
		orificeVal.attr('text', "0");
		cvVal.attr('text', "0 %");
		motorVal.attr('text', "0 %");

		$("#turbineVal1").text("0");
		$("#venturiVal1").text("0");
		$("#eleMagneticVal1").text("0");
		$("#pitotVal1").text("0");
		$("#ultrasonicVal1").text("0");
		$("#orificeVal1").text("0");
		$("#cvVal1").text("0");
		$("#motorVal1").text("0");
		$("#lcWtVal1").text("0");

	}

	//			TODO: fill tank button
	//		    click event listener for fill tank button
	document.getElementById("fillTankBtn").addEventListener("click", function() {
		$("#runModeM1,#runModeCV").prop("disabled", true);
		stOn.toFront();
		tank_fillb((x + 1005), (y + 570));
		$("#fillTankBtn").prop("disabled", true);

		setTimeout(function() {
			eleOff.hide();
			airOff.hide();
			eleOn.show();
			airOn.show();
		}, 3000);
	});

	//			TODO: start btn
	//			Click event listener for start button 
	document.getElementById("startBtn").addEventListener("click", function() {
		startCount++;
		$("#datasheetBtn,#graph,#BtnResult").prop("disabled", true);
		$("#startBtn").prop("disabled", true);

		expCompleteFlg = false;
		$("#flowSensorNextLvlBtn").prop("disabled", true);

		tankWt = 0;
		data = {};
		stOff.toFront();
		rnOn.toFront();
		loadcellVal.attr('text', "0");
		toastr.success("Tare weight reset to 0");
		setTimeout(() => {
			r = [];
			r[0] = paper.path("M" + (x + 940) + " " + (y + 578) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
			motor_img.toFront();
			onBtn.toFront();
			valve_cv.toFront();
			orifice.toFront();
			venture.toFront();
			r[0].animate({ path: "M" + (x + 940) + " " + (y + 578) + " l -912 0" }, (time), function() {
				tank_emptyb((x + 1005), (y + 460));
				r[1] = paper.path("M" + (x + 35) + " " + (y + 580) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
				r[1].animate({ path: "M" + (x + 35) + " " + (y + 582) + " l 0 -560" }, (time), function() {
					r[2] = paper.path("M" + (x + 30) + " " + (y + 28) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
					pitot.toFront();
					magnetic.toFront();
					ultrasonic.toFront();
					turbine.toFront();
					r[2].animate({ path: "M" + (x + 30) + " " + (y + 28) + " l 983 0" }, (time), function() {
						r[3] = paper.path("M" + (x + 1005) + " " + (y + 28) + " l 0 0").attr({ 'stroke': color, 'stroke-width': '15' })
						r[3].animate({ path: "M" + (x + 1005) + " " + (y + 28) + " l 0 200" }, (time), function() {
							tank_fillt((x + 1005), (y + 220));

						})
					})
				})
			})

			setTimeout(() => {
				valueIterator();
			}, time);
		}, time);

		tareOn.toFront();
	});


	function evaluate(v, ve, max, min) {
		v = v + 275;
		ve = diff = Math.random() * (max - min) + min;
		//		perv = (275 / 100) * ve;
		perv = (v / 100) * ve;
		randomSign = Math.random() < 0.5 ? -1 : 1;
		perv = randomSign * perv;
		return v + perv;
	}

	function valueIterator() {

		var pv = 0, mv = 0, uv = 0, vv = 0, ov = 0, tv = 0;
		var pve = 0, mve = 0, uve = 0, vve = 0, ove = 0;

		//		let vmin = 0.25;
		//		let vmax = 2;
		//
		//		let omin = 0;
		//		let omax = 2.5;
		//
		//		let pmin = 0;
		//		let pmax = 1;
		//
		//		let umin = 0;
		//		let umax = 2;
		//
		//		let mmin = 0;
		//		let mmax = 0.5;

		let vmin = 1;
		let vmax = 2.5;

		let omin = 1;
		let omax = 2.5;

		let pmin = 1;
		let pmax = 2.5;

		let umin = 1;
		let umax = 2.5;

		let mmin = 1;
		let mmax = 2.5;

		let cnt = 0;

		flaag = false;
		dataArrUp = [];
		dataArrUpwt = [];

		for (i = 0; i < 20; i++) {

			setTimeout(() => {
				round = {};
				cnt = cnt + 5;


				vv = evaluate(tv, vve, vmax, vmin);
				pv = evaluate(tv, pve, pmax, pmin);
				mv = evaluate(tv, mve, mmax, mmin);
				uv = evaluate(tv, uve, umax, umin);
				ov = evaluate(tv, ove, omax, omin);

				tv = tv + 275;

				//				if(vv < 0){vv = 0};
				//				if(pv < 0){pv = 0};
				//				if(mv < 0){mv = 0};
				//				if(uv < 0){uv = 0};
				//				if(ov < 0){ov = 0};

				$("#turbineVal1").text(tv.toFixed(2));
				$("#venturiVal1").text(vv.toFixed(2));
				$("#eleMagneticVal1").text(mv.toFixed(2));
				$("#pitotVal1").text(pv.toFixed(2));
				$("#ultrasonicVal1").text(uv.toFixed(2));
				$("#orificeVal1").text(ov.toFixed(2));

				round.tv = tv.toFixed(2);
				round.vv = vv.toFixed(2);
				round.mv = mv.toFixed(2);
				round.pv = pv.toFixed(2);
				round.uv = uv.toFixed(2);
				round.ov = ov.toFixed(2);

				if (runMode == "m1") {
					cvVal.attr('text', "100 %");
					$("#cvVal1").text("100");
					motorVal.attr('text', cnt + " %");
					$("#motorVal1").text(cnt);
					round.contv = "100";
					round.motor = cnt;
				} else if (runMode == "cv") {
					motorVal.attr('text', "100 %");
					$("#motorVal1").text("100");
					cvVal.attr('text', cnt + " %");
					$("#cvVal1").text(cnt);
					round.contv = cnt;
					round.motor = "100";
				}

				dataArrUp.push(round);

				setTimeout(() => {
					orificeVal.attr('text', ov.toFixed(2));
					setTimeout(() => {
						venturiVal.attr('text', vv.toFixed(2));
						setTimeout(() => {
							pitotVal.attr('text', pv.toFixed(2));
							setTimeout(() => {
								magneticVal.attr('text', mv.toFixed(2));
								setTimeout(() => {
									ultrasonicVal.attr('text', uv.toFixed(2));
									setTimeout(() => {
										turbineVal.attr('text', tv.toFixed(2));
										setTimeout(() => {
											tankWt = tankWt + wt;
											loadcellVal.attr('text', tankWt);
											$("#lcWtVal1").text(tankWt);
											dataArrUpwt.push(tankWt);
										}, time);
									}, time / 4);
								}, time / 4);
							}, time / 4);
						}, time);
					}, time / 4);

				}, time / 4);
			}, i * (time * 1.2));
		}
	}

	function evaluateRev(v, ve, max, min) {
		v = v - 275;
		ve = diff = Math.random() * (max - min) + min;
		//		perv = (275 / 100) * ve;
		perv = (v / 100) * ve;
		randomSign = Math.random() < 0.5 ? -1 : 1;
		perv = randomSign * perv;
		return v + perv;
	}

	function valueIteratorRev() {
		tankWt = 0;
		var pv = 5499.90, mv = 5505.02, uv = 5497.84, vv = 5504.60, ov = 5491.76, tv = 5500;
		var pve = 0, mve = 0, uve = 0, vve = 0, ove = 0;

		//		let vmin = 0.25;
		//		let vmax = 2;
		//
		//		let omin = 0;
		//		let omax = 2.5;
		//
		//		let pmin = 0;
		//		let pmax = 1;
		//
		//		let umin = 0;
		//		let umax = 2;
		//
		//		let mmin = 0;
		//		let mmax = 0.5;

		let vmin = 1;
		let vmax = 2.5;

		let omin = 1;
		let omax = 2.5;

		let pmin = 1;
		let pmax = 2.5;

		let umin = 1;
		let umax = 2.5;

		let mmin = 1;
		let mmax = 2.5;

		let cnt = 100;

		flaag = false;
		//				dataArrUp = [];
		//				dataArrUpwt = [];

		for (i = 0; i < 20; i++) {

			setTimeout(() => {
				round = {};

				round.tv = tv.toFixed(2);
				round.vv = vv.toFixed(2);
				round.mv = mv.toFixed(2);
				round.pv = pv.toFixed(2);
				round.uv = uv.toFixed(2);
				round.ov = ov.toFixed(2);

				cnt = cnt - 5;


				vv = evaluateRev(tv, vve, vmax, vmin);
				pv = evaluateRev(tv, pve, pmax, pmin);
				mv = evaluateRev(tv, mve, mmax, mmin);
				uv = evaluateRev(tv, uve, umax, umin);
				ov = evaluateRev(tv, ove, omax, omin);

				tv = tv - 275;

				if (vv < 0) { vv = 0 };
				if (pv < 0) { pv = 0 };
				if (mv < 0) { mv = 0 };
				if (uv < 0) { uv = 0 };
				if (ov < 0) { ov = 0 };

				$("#turbineVal1").text(tv.toFixed(2));
				$("#venturiVal1").text(vv.toFixed(2));
				$("#eleMagneticVal1").text(mv.toFixed(2));
				$("#pitotVal1").text(pv.toFixed(2));
				$("#ultrasonicVal1").text(uv.toFixed(2));
				$("#orificeVal1").text(ov.toFixed(2));

				if (runMode == "m1") {
					cvVal.attr('text', "100 %");
					$("#cvVal1").text("100");
					motorVal.attr('text', cnt + " %");
					$("#motorVal1").text(cnt);
					round.contv = "100";
					round.motor = cnt;
				} else if (runMode == "cv") {
					motorVal.attr('text', "100 %");
					$("#motorVal1").text("100");
					cvVal.attr('text', cnt + " %");
					$("#cvVal1").text(cnt);
					round.contv = cnt;
					round.motor = "100";
				}

				dataArrUp.push(round);

				setTimeout(() => {
					orificeVal.attr('text', ov.toFixed(2));
					setTimeout(() => {
						venturiVal.attr('text', vv.toFixed(2));
						setTimeout(() => {
							pitotVal.attr('text', pv.toFixed(2));
							setTimeout(() => {
								magneticVal.attr('text', mv.toFixed(2));
								setTimeout(() => {
									ultrasonicVal.attr('text', uv.toFixed(2));
									setTimeout(() => {
										turbineVal.attr('text', tv.toFixed(2));
										setTimeout(() => {
											tankWt = tankWt + wt;
											loadcellVal.attr('text', tankWt);
											$("#lcWtVal1").text(tankWt);
											dataArrUpwt.push(tankWt);
										}, time);
									}, time / 4);
								}, time / 4);
							}, time / 4);
						}, time);
					}, time / 4);

				}, time / 4);
			}, i * (time * 1.2));
		}
	}





}