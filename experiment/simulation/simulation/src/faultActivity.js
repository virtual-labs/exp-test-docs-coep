var faultCount=0;
var alarmflg = 0;
function faultActivity()
{
        timerMasterJson.mimic=$("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	//$("#footerModal").empty();
	$("#Header").html("	<center><span>EVENT</span></center>");
	 function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        // Shuffle statements
        let shuffledData = shuffleArray([...jsonData.statements]);

        // Append to table
//        let tableBody = $("#jsonTable tbody");
        
	var htm=''
//    +'<div class="col-sm-12 note" id="">'
//	+'<b style="font-size:18px;color:#f6f685;">NOTE - </b><span>You are required to arrange these activities as per the phase of the project like pre-engineering, post- Engineering,'
//	+'and Maintenance requirements of the project. These are 11 activities and you will have to number them in a chronological sequence. </span>'

	 +'<div class="row">'
	 +'<center><h5>Mark in chronological sequence of events occured during the fault</h5></center>'
	 +'<div class="col-sm-12 " id="">'
	+'<table>'
	+'<thead>'
	+'<tr>'
	+' <th>EVENT</th>'
	+' <th>SEQUENCE NUMBER</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody id="output">'
	shuffledData.forEach((item, index) => {
           htm+= '<tr>'
             +'<td>'+item.statement+'</td>'
//                +'<td><input type="number" class="stepInput" data-correct="'+item.step_no+'" /></td>'
              +'<td> <input type="number" class=" stepInput" data-min="1" data-max="10" data-correct="'+item.step_no+'"></td>'
           +' </tr>'
   
        });
	 htm+='</tbody>'
	+'</table>'
	+'<button id="verifyButton" class="btn btn-danger btn1" data-toggle="modal" data-target="#preReq">SUBMIT</button>'
	+'<div ></div>'
+'	<!-- 			    The Modal  ProStr -->'
+'	  <div class="modal fade " id="preReq">'
+'	    <div class="modal-dialog modal-md" >'
+'		      <div class="modal-content">'
+'<!-- 		        Modal Header -->'
+'		        <div class="modal-header">'
+'	          <h4 class="modal-title"><center>Message Box</center></h4>'
+'		          <button type="button" class="close" data-dismiss="modal">&times;</button>'
+'		        </div>'
+'<!-- 		        Modal body -->'
+'		        <div class="modal-body" id="modalMessage" style="color:red">'

+'		        </div>'
+'<!-- 			        Modal footer -->'
+'		        <div class="modal-footer">'
+'	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
+'		        </div>'
+'		      </div>'
+'		    </div>'
+'		  </div>'
+'<!-- 			  End Modal ProStr -->'
	$("#diagram").html(htm);
	var htm=''
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PANEL</span></center>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="refMimic" class="btn btn-danger" style="width:100%" data-toggle="modal" data-target="#refMimicModal" >Mimic</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="nextAlam" class="btn btn-danger" style="width:100%" disabled >Next level</button>'
		+'</div>'
		+'</div>'
		htm+=`<!-- 			    The Modal  ProStr -->
		  <div class="modal fade " id="refMimicModal">
		    <div class="modal-dialog modal-xl" >
			      <div class="modal-content">
<!-- 		        Modal Header -->
			        <div class="modal-header">
		          <h4 class="modal-title"><center></center></h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
<!-- 		        Modal body -->
			        <div class="modal-body" id="refMimicBody">
		
			        </div>
<!-- 			        Modal footer -->
			        <div class="modal-footer">
<!-- 		             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button> -->
			        </div>
			      </div>
			    </div>
			  </div>
<!-- 			  End Modal ProStr -->`;
		$("#Selection").html(htm);
// Shuffle function
	
	$("#refMimic").click(function () {
		var htm=`
		<center><video id="simVideo" width="90%" controls>
    <source src="simulation/images/boilerFaultalamVideo.mp4" type="video/mp4" >
    Your browser does not support the video tag.
</video></center>
		`;
		$("#refMimicBody").html(htm);
		var video = document.getElementById("simVideo");

	// Define the start and end skip times (in seconds)
	var skipStart = 5;  // Skip the first 5 seconds
	var skipEnd = 8;    // Skip the last 5 seconds

// 	video.onloadedmetadata = function() { 
	    // Get the duration of the video
	    var videoDuration = video.duration;

	    // Ensure the video plays between skipStart and (duration - skipEnd)
	    video.currentTime = skipStart;

	    // Event listener to pause the video when it reaches the end limit (video duration - skipEnd)
	    video.ontimeupdate = function() {
	        if (video.currentTime >= videoDuration - skipEnd) {
	            video.pause();
				video.currentTime = skipStart;
	        }
	    };

	    // Prevent seeking outside the allowed time range
	    video.addEventListener('seeking', function(event) {
	        // If seeking before the start time or after the allowed end time, reset the current time
	        if (video.currentTime < skipStart) {
	            video.currentTime = skipStart;
	        } else if (video.currentTime > videoDuration - skipEnd) {
	            //video.currentTime = videoDuration - skipEnd;
				video.currentTime = skipStart;
	        }
	    });
// 	};
	
	video.play();
		
	});
	$("#nextAlam").click(function(){
		
		resultJson.faultCount=faultCount;
		alamActivity();	
		});
	var attempts = 0;
	const maxAttempts = 4;
	var totalAccuracy = 0;

$(document).ready(function () {
    
    let attempts = 3; // Total attempts allowed
    const maxAttempts = 3; // Max attempts limit

    // Modal box logic
    var modal = $('#resultModal');
    var span = $('.close');

    function showModal(message) {
        $('#modalMessage').html(message);
        modal.css('display', 'block');
    }

    span.click(function () {
        modal.css('display', 'none');
    });

    $(window).click(function (event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });

    // Input validation on blur event
    $('.stepInput').on('blur', function () {
        let enteredValue = $(this).val().trim();
        let minLimit = 1;
        let maxLimit = 10;

        // Check if the input is empty or not a valid number
        if (enteredValue === "" || !/^\d+$/.test(enteredValue)) {
            toastr.error("This field cannot be empty. Please enter a valid number.");
            showModal("This field cannot be empty. Please enter a valid number.");
            $(this).val(''); // Clear invalid input
            return;
        }

       // Validate range
        let numberValue = parseInt(enteredValue);
        if (numberValue < minLimit || numberValue > maxLimit) {
            toastr.warning(`Please enter a value between ${minLimit} and ${maxLimit}.`);
             showModal(`Please enter a value between ${minLimit} and ${maxLimit}.`);
            $(this).val(''); // Clear invalid input
            return;
        }


        // Check for duplicate entries
        let allValues = $('.stepInput').map(function () {
            return $(this).val();
        }).get();

        if (allValues.filter(value => value === enteredValue).length > 1) {
            toastr.warning("Duplicate entry is not allowed.");
              showModal("Duplicate entry is not allowed.");
            $(this).val(''); // Clear invalid input
        }
    });

    // Verify button logic
    $('#verifyButton').click(function () {

		faultCount++;
        if (attempts <= 0) {
            showModal(" <strong style='color:#153f68;font-size: large;'>No attempts remaining.</strong>");
               toastr.error("No attempts remaining.");
               $("#nextAlam").prop("disabled", false);
            
        }

        // Validate all inputs before checking answers
        let isValid = true;
        $('.stepInput').each(function () {
            let value = $(this).val().trim();

            if (value === "" || !/^\d+$/.test(value)) {
                toastr.error("All fields must be filled with valid numbers.");
               //showModal("All fields must be filled with valid numbers.");
                isValid = false;
                return false; // Break loop
            }
        });

        if (!isValid) return; // Stop verification if validation fails

        // Check correctness of answers
        let correctCount = 0;
        $(".stepInput").each(function () {
            let userValue = $(this).val();
            let correctValue = $(this).data("correct");

            if (userValue == correctValue) {
                correctCount++;
            }
        });

        if (correctCount === jsonData.statements.length) {
            showModal(` <strong style="color:#153f68;font-size: large;"> All answers are correct. </strong>`);
            $("#verifyButton").prop("hidden", true);
			$("#nextAlam").prop("disabled", false);
          //  alarmflg = 1;

        } else {
            attempts--;
            $("#attempts").text(attempts);

            if (attempts === 0) {
					stdtable();
//                showModal(`<span class='error'> No attempts left.</span>`);
//                $(".stepInput").prop("disabled", true);
                $("#nextAlam").prop("disabled", false);
            } else {
                showModal(`
                <strong style="color:#153f68;font-size: large;">You still have <b style="color:red;">${attempts}</b> attempts to identify correctly.</strong>
	   			 `);
                
            }
        }
        

    });
    function stdtable(){

		var htm=`
		 <table class="table table-striped">
			    <thead>
			      <tr>
			        <th>SEQUENCE NUMBER</th>
			        <th>EVENTS</th>
			        
			      </tr>
			    </thead>
			    <tbody id="dataTable">
			     
			    </tbody>
			  </table>
					`;
				    $("#diagram").html(htm);	
					
					 var tableBody = $("#dataTable");
					 jsonData.statements.forEach(function (item) {
            var row = `<tr>
                <td>${item.step_no}</td>
                <td>${item.statement}</td>
            </tr>`;
            tableBody.append(row);
            
        });
        
       
	}

});

}
