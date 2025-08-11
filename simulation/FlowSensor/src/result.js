function result(){
	timerMasterJson.mimic=$("#counter").text();
	console.log(timerMasterJson);
	
	$("#simDemo,#procedure,#counter,#tagDetail1").prop("hidden",true);
	$("#report").prop("hidden",false);
	$("#Header").html("<center><span >FLOW SENSOR</span></center>");
	
	htm=''
	+'<div class="container-fluid">'
	  
	+' <!-- Title -->'

//	+'  <h3 class="text-center heading">Spray Drying Pilot Plant</h3>'

	+' <!-- Competency Table -->'
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
	+'      <tr>'
	+'       <td><b>Configuration in Piping Diagram</b></td>'
	+'        <td id="piping">'
	
	+'		</td>'
	+'        <td id="pipingTimer">'
	
	+'       </td>'
	+'     </tr>'
	+'      <tr>'
	+'        <td> <b>Configuration in Instruments Diagram</b></td>'
	+'        <td id="instr">'

	+'		</td>'
    +'        <td id="instrTimer">'
	
	+'       </td>'
	+'      </tr>'
	+'     <tr>'
	+'        <td><b>Sequence of Activities</b></td>'
	+'        <td id="squ">'

	+'		</td>'
	  +'        <td id="squTimer">'
		
		+'       </td>'
	+'      </tr>'
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
    +'   <!-- First Row -->'
    +'  <div class="row">'
    +'   <div class="col-md-4" >'
    +'     <div class="box">'
    +'      <h5 class="section-title sectionStyle" >Configuration in Piping Diagram</h5>'
    +'       <div class="table-container">'
    +'        <table style="border-style: solid;">'
    +'           <tr class="trStyle">'
    +'            <th>Expected</th>'
    +'             <th>Actual</th>'
    +'          </tr>'
    +'           <tr>'
    +'           <td><b> <center><strong class="correct">1</strong> </center></b></td>'
	+'           <td><b> <center><strong class="wrong">'+resultJson.piping+'</strong> </center></b></td>'
	  +'         </table>'
    +'      </div>'
    +'    </div>'
    +'   </div>'
    +'  <div class="col-md-4" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Configuration in Instruments Diagram</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">1</b></td>'
	    +'                       <td><b class="wrong">'+resultJson.instrument+'</b></td>'
	  	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	+'   <div class="col-md-4">'
	+'    <div class="box">'
	+'     <h5 class="section-title sectionStyle" >Sequence of Activities</h5>'
	+'      <div class="table-container">'
	+'        <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'           <th>Actual</th>'
	+'         </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">1</b></td>'
	    +'                       <td><b class="wrong">'+resultJson.seqActivites+'</b></td>'
	  	+'         </tr>'
	+'        </table>'
	+'     </div>'
	+'   </div>'
	+' </div>'
	+'</div>'
	+' <!-- First Row -->'
	+'<!-- <div class="row">'
	+'  <div class="col-md-3">'
	+'  </div>'
	+' <div class="col-md-6">'
	+'   <div class="box">'
	+'     <h5 class="section-title sectionStyle" >Sequence of Activities</h5>'
	+'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'         <tr class="trStyle">'
	+'           <th>Expected</th>'
	+'           <th>Actual</th>'
	+'         </tr>'
	+'         <tr>'
	 +'						  <td><b class="correct">1</b></td>'
 +'                       <td><b class="wrong">'+resultJson.animationStart+'</b></td>'
 +'         </tr>'
	+'       </table>'
	+'     </div>'
	+'   </div>'
	+' </div>'
	+'  <div class="col-md-3">'
	+'  </div>'
	+' </div> -->'

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
    +'						  <td><b class="correct">3</b></td>'
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
    +'				  <td><b class="correct">3</b></td>'
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
    +'				  <td><b class="correct">3</b></td>'
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
    $("#mainDiv").html(htm);
	
	var piping=parseFloat((1/resultJson.piping)*100);
	var instr=parseFloat((1/resultJson.instrument)*100);
	var squ=parseFloat((1/resultJson.seqActivites)*100);
	var startPer=parseFloat((resultJson.animationStart/3)*100);
	var datasheetPer=parseFloat((resultJson.datasheet/3)*100);
	var trendsPer=parseFloat((resultJson.trends/3)*100);
	
	var simuAdd=resultJson.animationStart+resultJson.datasheet+resultJson.trends;
	var simulation1=parseFloat((simuAdd/9)*100);
//	console.log(" piping "+piping);
//	console.log(" instr "+instr);
//	console.log(" squ "+squ);
//	console.log(" simuAdd "+simuAdd);
	
//	console.log(" startPer "+startPer);
//	console.log(" datasheetPer "+datasheetPer);
//	console.log(" trendsPer "+trendsPer);
//	console.log(" simulation1 "+simulation1);
	if(piping>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
	 $("#piping").html(str);
		 var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.piping+'</strong> </center>'
	+'     		 </div>'
	 $("#pipingTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#piping").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.piping+'</strong> </center>'
				+'     		 </div>'
							     $("#pipingTimer").html(str1); 
		 
		 
		}
	if(instr>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.instr+'</strong> </center>'
				+'     		 </div>'
							     $("#instrTimer").html(str1); 
		 	 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.instr+'</strong> </center>'
				+'     		 </div>'
							     $("#instrTimer").html(str1); 
		}
	if(squ>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#squ").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.squences+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#squ").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.squences+'</strong> </center>'
				+'     		 </div>'
							     $("#squTimer").html(str1); 
		}
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
	            { name: 'PIPING', y: piping },
	            { name: 'INSTRUMENTS', y: instr },
	            { name: 'SEQUENCE OF ACTIVITIES', y: squ },
	            { name: 'SIMULATION', y: simulation1 },
	            { name: 'DATASHEET', y: 100 },
	            { name: 'TRENDS', y: 100 }
	          
	        ]
	    }]
	});

}
