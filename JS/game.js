
window.onload = function() {
	// $("#quiz").css("display", "none");
	$("#restart").on("click", function(){
		 window.location.reload(true);
	});//ends restart function

// Run function does all the calculations of the quiz
	var run = function(){
		var empty = 0;
		
		var one = $("input[type='radio'][name='1']:checked");
		var oneVal =  one.val();

		if (oneVal == undefined) {
			empty++;
		}
		else if (oneVal !== "Shane") {
			losses++;
		} else {
			wins++
		}

		var two = $("input[type='radio'][name='2']:checked");
		var twoVal = two.val();
		if (twoVal == undefined) {
			empty++;
		}
		else if (twoVal !== "Shane") {
			losses++;
		} else{
			wins++;
		}
		var three = $("input[type='radio'][name='3']:checked");
		var threeVal = three.val();
		if (threeVal == undefined) {
			empty++;
		}
		else if (threeVal !== "Her boyfriend and her friend") {
			losses++;
		} else {
			wins++
		}
		var four = $("input[type='radio'][name='4']:checked");
		var fourVal = four.val();
		if (fourVal == undefined) {
			empty++;
		}
		else if (fourVal !== "A deer") {
			losses++;
		} else {
			wins++
		}
		var five = $("input[type='radio'][name='5']:checked");
		var fiveVal =five.val();
		if (fiveVal == undefined) {
			empty++;
		}
		else if (fiveVal !== "Clear") {
			losses++;
		} else {
			wins++
		}
		var six = $("input[type='radio'][name='6']:checked");
		var sixVal =six.val();
		if (sixVal == undefined) {
			empty++;
		}
		else if (sixVal !== "Penny") {
			losses++;
		} else {
			wins++
		}
		var seven = $("input[type='radio'][name='7']:checked");
		var sevenVal = seven.val();
		if (sevenVal == undefined) {
			empty++;
		}
		else if (sevenVal !== "Eugene") {
			losses++;
		} else {
			wins++
		}
		var eight = $("input[type='radio'][name='8']:checked");
		var eightVal =eight.val();
		if (eightVal == undefined) {
			empty++;
		}
		else if (eightVal !== "Pregnancy Test") {
			losses++;
		} else {
			wins++
		}
		var nine = $("input[type='radio'][name='9']:checked");
		var nineVal = nine.val();
		if (nineVal == undefined) {
			empty++;
		}
		else if (nineVal !== "Maggie") {
			losses++;
		} else {
			wins++
		}
		var ten = $("input[type='radio'][name='10']:checked");
		var tenVal = ten.val()
		if (tenVal == undefined) {
			empty++;
		}
		else if (tenVal !== "Baseball Bat") {
			losses++;
		} else {
			wins++
		}
		// Shows and hides appropriate divs and buttons
		$("#begin").css("display", "none");
		$(".submit").css("display", "none");
		$("html,body").scrollTop(0);
		$("#quiz").css("display", "none");
		// Displays appropriate Quiz results and new background
		$("#end").html("Wins: " + wins + "<br>Losses: " + losses + "<br>UnAnswered: " + empty);
		$("#box").css("background", "url(../TriviaGame/images/glenn.jpeg)");
		$("#box").css("background-size", "100%");

	}//ends run Function

	// The submit Click to run results of quiz
	$(".submit").click(function(){
		run();
	});//ends submit click function


	// Start button click to begin game
	document.getElementById("begin").addEventListener("click", myFunction);
	var wins = 0;
	var losses = 0;
	function myFunction() {
	    $("#quiz").css("display", "inline-block");//show quiz 
	    load();//start timer
	};//ends myFunction

	var intervalId;


	var clockRunning = false;		

	var timer = {

		time: 10,

		reset: function() {
			    timer.time = 10;

    	$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
		},

  		count: function() {

    	timer.time--;

    	if (timer.time <= 0) {
    		run();
    	};
  
    	var newtime = timer.time;
   
		$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
  		},

	}	

//Load function starts timer
	var load = function(){
		$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
		    	intervalId = setInterval(timer.count, 1000);
		    	clockRunning = true
	}//end of load function
}//end of window load


















