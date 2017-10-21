
$( document ).ready(function() {
	$("#restart").on("click", function(){
		 window.location.reload(true);
	});//ends restart function
	//answer button click
	$("#quizAnswers").on("click", function(){
		$("#answers").css("display", "inline-block");
	});// ends quizAnswer button click
// Run function does all the calculations of the quiz
	var run = function(){
		var empty = 0;
 // should probably try this in a loop or a function of sorts but I need to finish everything first
 // Question 1 check
		var one = $("input[type='radio'][name='1']:checked");
		var oneVal =  one.val();

		if (oneVal == undefined) {
			empty++;
		}
		else if (oneVal !== "Shane") {
			losses++;
		} else {
			wins++;
		}
// Question 2 check
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
// Question 3 check
		var three = $("input[type='radio'][name='3']:checked");
		var threeVal = three.val();
		if (threeVal == undefined) {
			empty++;
		}
		else if (threeVal !== "Her boyfriend and her friend") {
			losses++;
		} else {
			wins++;
		}
// Question 4 check
		var four = $("input[type='radio'][name='4']:checked");
		var fourVal = four.val();
		if (fourVal == undefined) {
			empty++;
		}
		else if (fourVal !== "A deer") {
			losses++;
		} else {
			wins++;
		}
// Question 5 check
		var five = $("input[type='radio'][name='5']:checked");
		var fiveVal =five.val();
		if (fiveVal == undefined) {
			empty++;
		}
		else if (fiveVal !== "Clear") {
			losses++;
		} else {
			wins++;
		}
// Question 6 check
		var six = $("input[type='radio'][name='6']:checked");
		var sixVal =six.val();
		if (sixVal == undefined) {
			empty++;
		}
		else if (sixVal !== "Penny") {
			losses++;
		} else {
			wins++;
		}
// Question 7 check
		var seven = $("input[type='radio'][name='7']:checked");
		var sevenVal = seven.val();
		if (sevenVal == undefined) {
			empty++;
		}
		else if (sevenVal !== "Eugene") {
			losses++;
		} else {
			wins++;
		}
// Question 8 check
		var eight = $("input[type='radio'][name='8']:checked");
		var eightVal =eight.val();
		if (eightVal == undefined) {
			empty++;
		}
		else if (eightVal !== "Pregnancy Test") {
			losses++;
		} else {
			wins++;
		}
// Question 9 check
		var nine = $("input[type='radio'][name='9']:checked");
		var nineVal = nine.val();
		if (nineVal == undefined) {
			empty++;
		}
		else if (nineVal !== "Maggie") {
			losses++;
		} else {
			wins++;
		}
// Question 10 check
		var ten = $("input[type='radio'][name='10']:checked");
		var tenVal = ten.val()
		if (tenVal == undefined) {
			empty++;
		}
		else if (tenVal !== "Baseball Bat") {
			losses++;
		} else {
			wins++;
		}
		
		// Shows and hides appropriate divs and buttons
		$("#begin").css("display", "none");
		$(".submit").css("display", "none");
		$("html,body").scrollTop(0);
		$("#quiz").css("display", "none");
		$("#quizAnswers").css("display", "inline-block");
		// Displays appropriate Quiz results and new background
		$("#end").html("Correct Answers: " + wins + "<br>Wrong Answers: " + losses + "<br>UnAnswered: " + empty);
		$("#box").css("background", "url(../TriviaGame/images/glenn.jpeg)");
		$("#box").css("background-size", "100%");

	}//ends run Function

	// The submit Click to run results of quiz
	$(".submit").click(function(){
		clockRunning= false;
	    clearInterval(intervalId);//stop timer
		run();
	});//ends submit click function


	// Start button click to begin game
	document.getElementById("begin").addEventListener("click", myFunction);
	var wins = 0;
	var losses = 0;
	var intervalId;


	var clockRunning = false;	

	function myFunction() {
		$(".btn").css("display", "inline-block");
	    $("#quiz").css("display", "inline-block");
	    $("#quizAnswers").css("display", "none")
	    //show quiz 
	    load();//start timer
	};//ends myFunction

	$(".questions").hover(function(){ //change background on hover to make it more readable
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "");
    });//ends hover function

// Timer Below
	var timer = {

		time: 60,

		reset: function() {
			    timer.time = 60;

    	$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
		},

  		count: function() {

    	timer.time--;

    	if (timer.time <= 0) {
    		run();
    		clockRunning= false; //stop timer
	    	clearInterval(intervalId);

    	};
  
    	// var newtime = timer.time;
   
		$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
  		},

	}	

//Load function starts timer
	var load = function(){
		$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
	    if(!clockRunning){
	    intervalId = setInterval(timer.count, 1000);
	    clockRunning=true;
	    }
	}//end of load function

})//end of Document ready


















