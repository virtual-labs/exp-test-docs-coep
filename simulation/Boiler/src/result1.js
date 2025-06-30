function updateDateTime() {
      const now = new Date();
      const formatted = now.toLocaleString(); // e.g. "5/5/2025, 10:23:45 AM"
      $('#dateTime').text(formatted);
    }

function result1(){
	
	timerMasterJson.mimic=$("#counter").text();
	$("#simDemo,#procedure,#counter,#tagDetails").prop("hidden",true);
	$("#report").prop("hidden",false);
	$("#Header").prop("hidden", true);
	
	htm2=''
	+`<div class="row" id="divMis" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter Name:</span>
    <input type="text" id="nameInput3" style="color: #000; padding: 5px; max-width: 200px;">
 <label id="dateTime" style="color:#fff;"></label>
  </div>
</div>`
	+'<div class="container-fluid">'
	 +' <div class="row titlePart" id="" ><center><span >CAT - BOILER HEAT EXCHANGER PLANT</span></center></div>' 
	  
	+' <div class="box">'
	+' <div class="row">'
	+'  <div class="col-sm-6">'
	+' <table class="table table-bordered status-table">'
	+'    <thead>'
	+'     <tr>'
	+'        <th>Competency </th>'
	+'        <th>Status</th>'
	+'        <th>Time</th>'
	+'      </tr>'
	+'    </thead>'
	+'   <tbody>'
//	+'      <tr>'
//	+'       <td><b>Configuration in Piping Diagram</b></td>'
//	+'        <td id="piping">'
//	
//	+'		</td>'
//	+'        <td id="pipingTimer">'
//	
//	+'       </td>'
//	+'     </tr>'
//	+'      <tr>'
//	+'        <td> <b>Configuration in Instruments Diagram</b></td>'
//	+'        <td id="instr">'
//
//	+'		</td>'
//    +'        <td id="instrTimer">'
//	
//	+'       </td>'
//	+'      </tr>'
//	+'     <tr>'
//	+'        <td><b>Sequence of Activities</b></td>'
//	+'        <td id="squ">'
//
//	+'		</td>'
//	  +'        <td id="squTimer">'
//		
//		+'       </td>'
//	+'      </tr>'
	+'       <tr>'
	+'        <td><b>Simulation</b></td>'
	+'        <td id="simulation">'
	
    +'		</td>'
  +'        <td id="simulationTimer">'
	
	+'       </td>'
    +'     </tr>'
          
    +'    </tbody>'
    +'  </table>'
    +' </div>'
    +' <div class="col-sm-6" id="graphDiv">'
	 
    +' </div>'
    +'</div>'
    +'</div>'
//    +'   <!-- First Row -->'
//    +'  <div class="row">'
//    +'   <div class="col-md-4" >'
//    +'     <div class="box">'
//    +'      <h5 class="section-title sectionStyle" >Configuration in Piping Diagram</h5>'
//    +'       <div class="table-container">'
//    +'        <table style="border-style: solid;">'
//    +'           <tr class="trStyle">'
//    +'            <th>Expected</th>'
//    +'             <th>Actual</th>'
//    +'          </tr>'
//    +'           <tr>'
//    +'           <td><b> <center><strong class="correct">1</strong> </center></b></td>'
//	+'           <td><b> <center><strong class="wrong">'+resultJson.piping+'</strong> </center></b></td>'
//	  +'         </table>'
//    +'      </div>'
//    +'    </div>'
//    +'   </div>'
//    +'  <div class="col-md-4" >'
//    +'    <div class="box">'
//    +'     <h5 class="section-title sectionStyle" >Configuration in Instruments Diagram</h5>'
//    +'     <div class="table-container">'
//	+'       <table style="border-style: solid;">'
//	+'          <tr class="trStyle">'
//	+'            <th>Expected</th>'
//	+'            <th>Actual</th>'
//	+'          </tr>'
//	+'          <tr>'
//	 +'						  <td><b class="correct">1</b></td>'
//	    +'                       <td><b class="wrong">'+resultJson.instrument+'</b></td>'
//	  	+'          </tr>'
//	+'        </table>'
//	+'      </div>'
//	+'     </div>'
//	+'   </div>'
//	+'   <div class="col-md-4">'
//	+'    <div class="box">'
//	+'     <h5 class="section-title sectionStyle" >Sequence of Activities</h5>'
//	+'      <div class="table-container">'
//	+'        <table style="border-style: solid;">'
//	+'          <tr class="trStyle">'
//	+'            <th>Expected</th>'
//	+'           <th>Actual</th>'
//	+'         </tr>'
//	+'          <tr>'
//	 +'						  <td><b class="correct">1</b></td>'
//	    +'                       <td><b class="wrong">'+resultJson.seqActivites+'</b></td>'
//	  	+'         </tr>'
//	+'        </table>'
//	+'     </div>'
//	+'   </div>'
//	+' </div>'
//	+'</div>'
//	+' <!-- First Row -->'
//	+'<!-- <div class="row">'
//	+'  <div class="col-md-3">'
//	+'  </div>'
//	+' <div class="col-md-6">'
//	+'   <div class="box">'
//	+'     <h5 class="section-title sectionStyle" >Sequence of Activities</h5>'
//	+'     <div class="table-container">'
//	+'       <table style="border-style: solid;">'
//	+'         <tr class="trStyle">'
//	+'           <th>Expected</th>'
//	+'           <th>Actual</th>'
//	+'         </tr>'
//	+'         <tr>'
//	 +'						  <td><b class="correct">1</b></td>'
// +'                       <td><b class="wrong">'+resultJson.animationStart+'</b></td>'
// +'         </tr>'
//	+'       </table>'
//	+'     </div>'
//	+'   </div>'
//	+' </div>'
//	+'  <div class="col-md-3">'
//	+'  </div>'
//	+' </div> -->'

	+'<!-- Graphs Section -->'
	+'<div class="row">'
    +'</div>'
    +'<!-- Pie Chart Section -->'
    +'<div class="row">'
      
    +'</div>'

    +'<!-- Animation Section -->'
    +'<div class="row">'
    +' <div class="col-md-12">'
    +'   <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Simulation</h5>'
    +'     <div class="animation-container">'
           
    +'           <div class="col-md-4">'
    +'				<div class="box">'
    +'				  <h5 class="section-title sectionStyle">Start</h5>'
    +'				  <div class="table-container">'
    +'					<table style="border-style: solid;" >'
    +'					  <tr class="trStyle">'
    +'						<th>Expected</th>'
    +'						<th>Actual</th>'
    +'					  </tr>'
    +'					  <tr>'
    +'						  <td><b class="correct">1</b></td>'
    +'                       <td><b class="wrong">'+resultJson.animationStart+'</b></td>'
    +'					  </tr>'
    +'					</table>'
    +'				  </div>'
    +'				</div>'
    +'			  </div>'
    +'         <div class="col-md-4">'
    +'		<div class="box">'
    +'		  <h5 class="section-title sectionStyle">View Datasheet</h5>'
    +'		  <div class="table-container">'
    +'			<table style="border-style: solid;">'
    +'			  <tr class="trStyle">'
    +'				<th>Expected</th>'
    +'			<th>Actual</th>'
    +'			  </tr>'
    +'			  <tr>'
    +'				  <td><b class="correct">1</b></td>'
    +'                <td><b class="wrong">'+resultJson.datasheet+'</b></td>'
    +'			  </tr>'
    +'			</table>'
    +'		  </div>'
    +'		</div>'
    +' </div>'
    +'       <div class="col-md-4">'
    +'		<div class="box">'
    +'		  <h5 class="section-title sectionStyle">Trends</h5>'
    +'		  <div class="table-container">'
    +'			<table style="border-style: solid;">'
    +'			  <tr class="trStyle">'
    +'				<th>Expected</th>'
    +'				<th>Actual</th>'
    +'			  </tr>'
    +'			  <tr>'
    +'				  <td><b class="correct">1</b></td>'
    +'            <td><b class="wrong">'+resultJson.trends+'</b></td>'
    +'			  </tr>'
    +'			</table>'
    +'		  </div>'
    +'		</div>'
    +' </div>'
          
    +'     </div>'
    +'   </div>'
    +' </div>'
    +'</div>'
    +'</div>'
    $("#mainDiv").empty().html(htm2);
	
	
	var startPer=parseFloat((resultJson.animationStart/1)*100);
	var datasheetPer=parseFloat((resultJson.datasheet/1)*100);
	var trendsPer=parseFloat((resultJson.trends/1)*100);
	
	var simuAdd=resultJson.animationStart+resultJson.datasheet+resultJson.trends;
	var simulation1=parseFloat((simuAdd/3)*100);


	if(startPer>=100 && datasheetPer>=100 && trendsPer>=100){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#simulation").html(str);
	var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
	+'     		 </div>'
	 $("#simulationTimer").html(str1); 
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#simulation").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
				+'     		 </div>'
							     $("#simulationTimer").html(str1); 
		}
	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        backgroundColor: '#f0f0f0'
	    },
		exporting: { enabled: false },
		credits: { enabled: false},
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	    	 enabled: false,
        style: {
            fontFamily: 'Arial, sans-serif', // Set tooltip font family
            fontSize: '12px',                    // Set tooltip font size
            color: '#000',                    // Set tooltip text color
            fontWeight: 'bold',                  // Optional: bold text
            backgroundColor: '#000'           // Optional: tooltip background color
        },
        formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y}%`;
        }
    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                style: {
	                    color: '#000',
//	                font-family: 'Arial, sans-serif',
	                fontSize: '14px',
	                /* font-weight: bold; */
	                fill: '#000',
	                },
	                formatter: function () {
	                    return `<span>${this.point.name}: ${this.percentage.toFixed(2)}%</span>`;
	                }
	            }
	        }
	    },

	    series: [{
	        name: '',
	        data: [
	            { name: 'PIPING', y: startPer },
	            { name: 'INSTRUMENTS', y: datasheetPer },
	            { name: 'SEQUENCE OF ACTIVITIES', y: trendsPer }
	            
	          
	        ]
	    }]
	});
	
	updateDateTime();
	
$("#report").click(function() {
		tmp = $("#nameInput3").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput3').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput3').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#mainDiv"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'CAT.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
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
}
