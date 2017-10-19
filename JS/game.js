// $(document).ready(function(){
	


window.onload = function() {
	// $("#quiz").css("display", "none");
	$("#restart").on("click", function(){
		 window.location.reload(true);
	});
	// $("#start").click($("#wrapper").show());
	$("#submit").click(function(){
		
		var one = $("input[type='radio'][name='1']:checked");
		var oneVal =  one.val();
		if (oneVal !== "Shane") {
			losses++;
		} else {
			wins++
		}

		var two = $("input[type='radio'][name='2']:checked");
		var twoVal = two.val();
		if (twoVal !== "Shane") {
			losses++;
		} else{
			wins++;
		}
		var three = $("input[type='radio'][name='3']:checked");
		var threeVal = three.val();
		if (threeVal !== "Her boyfriend and her friend") {
			losses++;
		} else {
			wins++
		}
		var four = $("input[type='radio'][name='4']:checked");
		var fourVal = four.val();
		if (fourVal !== "A deer") {
			losses++;
		} else {
			wins++
		}
		var five = $("input[type='radio'][name='5']:checked");
		var fiveVal =five.val();
		if (fiveVal !== "Clear") {
			losses++;
		} else {
			wins++
		}
		var six = $("input[type='radio'][name='6']:checked");
		var sixVal =six.val();
		if (sixVal !== "Penny") {
			losses++;
		} else {
			wins++
		}
		var seven = $("input[type='radio'][name='7']:checked");
		var sevenVal = seven.val();
		if (sevenVal !== "Eugene") {
			losses++;
		} else {
			wins++
		}
		var eight = $("input[type='radio'][name='8']:checked");
		var eightVal =eight.val();
		if (eightVal !== "Pregnancy Test") {
			losses++;
		} else {
			wins++
		}
		var nine = $("input[type='radio'][name='9']:checked");
		var nineVal = nine.val();
		if (nineVal !== "Maggie") {
			losses++;
		} else {
			wins++
		}
		var ten = $("input[type='radio'][name='10']:checked");
		var tenVal = ten.val()
		if (tenVal !== "Baseball Bat") {
			losses++;
		} else {
			wins++
		}
		console.log(losses);
		console.log(wins);
		$("#begin").css("display", "none");
		$("#submit").css("display", "none");
		$("#quiz").css("display", "none");
		$("#end").html("Wins: " + wins + "<br>Losses: " + losses);
		$("#box").css("background", "url(../TriviaGame/images/glenn.jpeg)");
		$("#box").css("background-size", "100%");


// "<div id ='Buttons'><button id='submit'>Submit</button><button id='restart'>Restart</button></div>")
// 		$("#end").text("Wins: " + wins);
// 		$("#end").text("Losses: " + losses);
	});
}
document.getElementById("begin").addEventListener("click", myFunction);
var wins = 0;
var losses = 0;
var empty = 0;
function myFunction() {
    $("#quiz").css("display", "inline-block");
    load();
};



// var checkAnswers = function(){
// 	var wins = 0;
// 	if(document.getElementById('yes1').checked){
// 		console.log("winning")
// 	}
// 	var losses = 0;
// 	var empty = 0;
// }
	// $("#begin").click($("#quiz").css("display:", "inline-block"));
	//  Variable that will hold our setInterval that runs the stopwatch
	var intervalId;

//prevents the clock from being sped up unnecessarily
	var clockRunning = false;		

	var timer = {

		time: 30,

		reset: function() {
			    timer.time = 30;

    	$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
		},

		run: function(){
			if(!clockRunning){}
    	intervalId = setInterval(timer.count, 1000);
    	clockRunning = true

  		},

  		count: function() {

    	timer.time--;
  
    	var newtime = timer.time;
   
		$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
  		},

  		 stop: function() {
   		 clockRunning= false;
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
     	 clearInterval(intervalId);
    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.

  		},
	}	


var load = function(){
	$("#displayTimer").html("Time Remaining: " + timer.time + " seconds")
	// $("#shane1").html("<h3>1. Who let all the walkers out of the Greene's barn?</h3><form><input type='radio' name='answer' value='Hershal' checked>Hershal<input type='radio' name='answer' value='Carol'>Carol<input type='radio' name='answer' value='Rick'>Rick<input type='radio' name='answer' value='Shane'>Shane</form>")
		if(!clockRunning){}
    	intervalId = setInterval(timer.count, 1000);
    	clockRunning = true
}



















