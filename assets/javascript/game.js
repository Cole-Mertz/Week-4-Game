$(document).ready(function () {
	var randomCrystal= Math.floor(Math.random() *101+19)
	//selects number for the start of the game

	$("#randomNumber").text(randomCrystal);

	var number1= Math.floor(Math.random()*11+1)
	var number2= Math.floor(Math.random()*11+1)
	var number3= Math.floor(Math.random()*11+1)
	var number4= Math.floor(Math.random()*11+1)

	var userTotal= 0;
	var wins= 0;
	var losses= 0;

	$("#wins").text(wins);
	$("#losses").text(losses);

	//reset game
	function reset(){
		randomCrystal=Math.floor(Math.random()*101+19);
		console.log(randomCrystal)
		$("randomNumber").text(randomCrystal);
		number1= Math.floor(Math.random() * 11+1);
		number2= Math.floor(Math.random() * 11+1);
		number3= Math.floor(Math.random() * 11+1);
		number4= Math.floor(Math.random() * 11+1);
		userTotal= 0;
		$("#finalTotal").text(userTotal);
	}

	//adds wins
	function yay() {
		alert("You Win!");
		wins++;
		$("#wins").text(wins);
		reset();
	}

	function loser() {
		alert("You Lose!");
		losses++;
		$("#losses").text(losses);
		reset();
	}

	$("#one").on("click", function() {
		userTotal = userTotal + number1;
		console.log("New userTotal= " + userTotal);
		$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				yay();
			}
			else  if (userTotal > randomCrystal){
				loser();
			}
	});

	$("#two").on("click", function() {
		userTotal = userTotal + number2;
		console.log("New userTotal= " + userTotal);
		$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				yay();
			}
			else if (userTotal > randomCrystal){
				loser();
			}
	});

	$("#three").on("click", function() {
		userTotal = userTotal + number3;
		console.log("New userTotal= " + userTotal);
		$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				yay();
			}
			else if (userTotal > randomCrystal){
				loser();
			}
	});

	$("#four").on("click", function() {
		userTotal = userTotal + number4;
		console.log("New userTotal= " + userTotal);
		$("#finalTotal").text(userTotal);

			if (userTotal === randomCrystal){
				yay();
			}
			else if (userTotal > randomCrystal){
				loser();
			}
	});
});