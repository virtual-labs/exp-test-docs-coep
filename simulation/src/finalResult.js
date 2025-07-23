
function finResult() { 
	 const now = new Date();
      const formatted = now.toLocaleString();
	$("#hookUpSelect").prop("hidden",true);
	$("#hookUpSelectLabel").prop("hidden",true);
	$("#download").prop("hidden",false);
	$("#landingPage").prop("hidden", false);
	$("#mainDiv").prop("hidden", true);
	
  
  // Prepare HTML with properly closed tags and no duplicate IDs
 tableHTML = `
<div class="row" id="divMis" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter Name.:</span>
    <input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">
     
<label id="dateTime1" style="color:#fff;">`+formatted+`</label>

  </div>
</div>
<div class="row titlePart" id="" ><center><span >FAT</span></center></div>
  <div class="table-row">
    <table id="flowSensorTable" class="sensor-table">
      <thead>
        <tr><th colspan="5" style="text-align:center; font-size:20px; font-weight:bold;">Flow Sensor</th></tr>
        <tr><th>Sr No</th><th>Sensor Name</th><th>Count</th><th>Checked</th><th>Status</th></tr>
      </thead>
      <tbody></tbody>
    </table>

    <table id="levelSensorTable" class="sensor-table">
      <thead>
        <tr><th colspan="5" style="text-align:center; font-size:20px; font-weight:bold;">Level Sensor</th></tr>
        <tr><th>Sr No</th><th>Sensor Name</th><th>Count</th><th>Checked</th><th>Status</th></tr>
      </thead>
      <tbody></tbody>
    </table>

    <table id="pressureSensorTable" class="sensor-table">
      <thead>
        <tr><th colspan="5" style="text-align:center; font-size:20px; font-weight:bold;">Pressure Sensor</th></tr>
        <tr><th>Sr No</th><th>Sensor Name</th><th>Count</th><th>Checked</th><th>Status</th></tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>

  <div class="table-row">
    <table id="vacuumSensorTable" class="sensor-table">
      <thead>
        <tr><th colspan="5" style="text-align:center; font-size:20px; font-weight:bold;">Vacuum Sensor</th></tr>
        <tr><th>Sr No</th><th>Sensor Name</th><th>Count</th><th>Checked</th><th>Status</th></tr>
      </thead>
      <tbody></tbody>
    </table>

    <table id="hotTempSensorTable" class="sensor-table">
      <thead>
        <tr><th colspan="5" style="text-align:center; font-size:20px; font-weight:bold;">Hot Temperature Sensors</th></tr>
        <tr><th>Sr No</th><th>Sensor Name</th><th>Count</th><th>Checked</th><th>Status</th></tr>
      </thead>
      <tbody></tbody>
    </table>

    <table id="coldTempSensorTable" class="sensor-table">
      <thead>
        <tr><th colspan="5" style="text-align:center; font-size:20px; font-weight:bold;">Cold Temperature Sensors</th></tr>
        <tr><th>Sr No</th><th>Sensor Name</th><th>Count</th><th>Checked</th><th>Status</th></tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
`;

// Inject into DOM, replacing previous content cleanly
$("#landingPage").empty().html(tableHTML);

// Filter hot/cold sensors if needed
 hotSensors = tempsensorData.filter(item => item.type === "Hot");
 coldSensors = tempsensorData.filter(item => item.type === "Cold");
 
 
// Append Flow Sensor Data
flowsensorData.forEach((item, index) => {
  $("#flowSensorTable tbody").append(`
    <tr>
      <td>${index + 1}</td>
      <td>${item.sensorName}</td>
      <td>${item.count}</td>
      <td>${item.isChecked ? "Yes" : "No"}</td>
      <td>${item.status}</td>
    </tr>
  `);
});

// Append Level Sensor Data
levelsensorData.forEach((item, index) => {
  $("#levelSensorTable tbody").append(`
    <tr>
      <td>${index + 1}</td>
      <td>${item.sensorName}</td>
      <td>${item.count}</td>
      <td>${item.isChecked ? "Yes" : "No"}</td>
      <td>${item.status}</td>
    </tr>
  `);
});

// Append Pressure Sensor Data
pressuresensorData.forEach((item, index) => {
  $("#pressureSensorTable tbody").append(`
    <tr>
      <td>${index + 1}</td>
      <td>${item.sensorName}</td>
      <td>${item.count}</td>
      <td>${item.isChecked ? "Yes" : "No"}</td>
      <td>${item.status}</td>
    </tr>
  `);
});

// Append Vacuum Sensor Data
vacuumsensorData.forEach((item, index) => {
  $("#vacuumSensorTable tbody").append(`
    <tr>
      <td>${index + 1}</td>
      <td>${item.sensorName}</td>
      <td>${item.count}</td>
      <td>${item.isChecked ? "Yes" : "No"}</td>
      <td>${item.status}</td>
    </tr>
  `);
});

// Append Hot Temp Sensor Data
hotSensors.forEach((item, index) => {
  $("#hotTempSensorTable tbody").append(`
    <tr>
      <td>${index + 1}</td>
      <td>${item.sensorName}</td>
      <td>${item.count}</td>
      <td>${item.isChecked ? "Yes" : "No"}</td>
      <td>${item.status}</td>
    </tr>
  `);
});

// Append Cold Temp Sensor Data
coldSensors.forEach((item, index) => {
  $("#coldTempSensorTable tbody").append(`
    <tr>
      <td>${index + 1}</td>
      <td>${item.sensorName}</td>
      <td>${item.count}</td>
      <td>${item.isChecked ? "Yes" : "No"}</td>
      <td>${item.status}</td>
    </tr>
  `);
});

// Auto-scroll to landingPage
$('html, body').animate({
  scrollTop: $("#landingPage").offset().top
}, 500);

  
}



$("#download").click(function() {
		tmp = $("#nameInput").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#landingPage"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'FAT.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
				$("#landingPage").prop("hidden", true);
				$("#mainDiv").prop("hidden", false);
				$("#download").prop("hidden",true);
				
				Swal.fire({
					title: 'Information',
					html: '<p>Now the accurate sensors are selected and placed to a boiler plant. Observe the boiler plant process.</p>',
					width: 600,
					icon: 'info',
					confirmButtonText: 'OK',
					allowOutsideClick: false,
					allowEscapeKey: false,
					willClose: () => {
						BoilerHeatExchangerMimic();
					}
				});
								
//				$("#btnNext").prop("hidden", false);
			}).catch(err => {
				console.error("Screenshot failed:", err);
			}).finally(() => {
				button.hidden = true;
			});
			$("#divMis").prop("hidden",true);
			
			}else{
				alert("Enter Name");
			}
	});

//$("#download").click(function(){
////	downloadLandingPageAsImage();
//
//		tmp = $("#nameInput").val();
//		if(tmp != ""){
//			
//			  // Restore value from localStorage when page loads
//			  const savedName = localStorage.getItem("username");
//			  if (savedName) {
//			    $('#nameInput').val(savedName);
//			  }
// 
//			  // Save input on change
//			  $('#nameInput').on('input', function() {
//			    localStorage.setItem("username", $(this).val());
//			  });
//			
// 
//			const button = document.getElementById("report");
//			button.hidden = true;
// 
//			html2canvas(document.querySelector("#main-div"), {
//				useCORS: true,
//				allowTaint: false,
//				backgroundColor: null
//			}).then(canvas => {
//				let link = document.createElement('a');
//				link.download = 'Instr_Index_sheet.png';
//				link.href = canvas.toDataURL("image/png");
//				link.click();
////				$("#btnNext").prop("hidden", false);
//			}).catch(err => {
//				console.error("Screenshot failed:", err);
//			}).finally(() => {
//				button.hidden = true;
//			});
//			$("#mis").prop("disabled",true);
//			$("#nameInput").prop("disabled",true);
//			$("#nameInput").css("background" , "#ffffff");
//			downloadLandingPageAsImage();
//			
//			$("#landingPage").prop("hidden", true);
//			$("#mainDiv").prop("hidden", false);
//			$("#download").prop("hidden",true);
//			BoilerHeatExchangerMimic();
//			}else{
//				alert("Enter MIS Number");
//			}
//	});


//function downloadLandingPageAsImage() {
//  const element = document.getElementById("landingPage");
//
//  html2canvas(element, {
//    scrollY: -window.scrollY, // capture everything regardless of scroll
//    useCORS: true // if you have images with cross-origin URLs
//  }).then(function(canvas) {
//    const link = document.createElement("a");
//    link.download = "result.png";
//    link.href = canvas.toDataURL("image/png");
//    link.click();
//    
//  });
  
  
//  htm=` <div class="row">
//	  			  <div class="col-sm-3" id="Selection" style=" border-style: double; margin-bottom: 25px;">
//	      	</div>
//	    	<div class="col-sm-9" id="diagram" style=" border-style: double;margin-bottom: 18px;">
//			<!--      <img src="images/dryer12.png" class="img-fluid" style="margin-top:10px;"> -->
//	    	</div>
//	  	 </div>`;
//	  	 $("#main-div").html(htm);
  
  
//}

//function finResult(){
////	alert("Dhanashree");
//   
// 
//
//
//  var data = [
//      { "srNo": "1", "sensorName": "FE1", "count": 5621.08, "isChecked": false, "status": "Wrong", "name": "Flow Sensor" },
//      { "srNo": "2", "sensorName": "FE2", "count": 5631.25, "isChecked": true, "status": "Correct", "name": "Flow Sensor" },
//      { "srNo": "3", "sensorName": "FE3", "count": 5414.65, "isChecked": true, "status": "Wrong", "name": "Flow Sensor" },
//      { "srNo": "4", "sensorName": "FT1", "count": 5589.9, "isChecked": false, "status": "Correct", "name": "Flow Sensor" },
//      { "srNo": "5", "sensorName": "FT2", "count": 5376.13, "isChecked": false, "status": "Wrong", "name": "Flow Sensor" },
//      { "srNo": "6", "sensorName": "FT3", "count": 5500, "isChecked": false, "status": "N/A", "name": "Flow Sensor" }
//    ];
//    
//    var row;
//    $.each(data, function (index, item) {
//       row = '<tr>' +
//        '<td>' + item.srNo + '</td>' +
//        '<td>' + item.sensorName + '</td>' +
//        '<td>' + item.count + '</td>' +
//        '<td>' + (item.isChecked ? "Yes" : "No") + '</td>' +
//        '<td>' + item.status + '</td>' +
//        '<td>' + item.name + '</td>' +
//        '</tr>';
////      $('#sensorTable tbody').append(row);
//    });
//  
//    
// +`
//</div>`
//
//$("#landingPage").html(row);
//
//
//
////var htm = `<div class="table-row">
////  <table id="sensorTable">
////    <tr><th></th></tr>
////    <tr><td>`+SrNoFlowSensor+`</td><td>Row 2</td></tr>
////    <tr><td>Row 2</td><td>Row 2</td></tr>
////  </table>
//
////  <table>
////    <tr><th>Table 1</th><th>Table 2</th></tr>
////    <tr><td>Row 1</td><td>Row 2</td></tr>
////    <tr><td>Row 2</td><td>Row 2</td></tr>
////  </table>
////
////  <table>
////    <tr><th>Table 1</th><th>Table 3</th></tr>
////    <tr><td>Row 1</td><td>Row 2</td></tr>
////    <tr><td>Row 2</td><td>Row 2</td></tr>
////  </table>
//
//
////$("#landingPage").html(htm);
//}