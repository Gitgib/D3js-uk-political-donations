
function callTheSound()
{
	var audio = new Audio('sounds/button.mp3');
	audio.play();
}

function goTo(strDonor)
{
	window.open(
		  "https://www.google.gr/search?q="+strDonor,
		  '_blank' // <- This is what makes it open in a new window.
	);
}



function helpHear(obj)
{
	var actionFlager = window.localStorage.getItem("actionFlag");
	if(actionFlager == 0)
	{
		window.localStorage.setItem('actionFlag', 1);
		
		var theText = obj.donor;
		var msg = new SpeechSynthesisUtterance(theText);
		window.speechSynthesis.speak(msg);
		theText = obj.amount;
		msg = new SpeechSynthesisUtterance(theText);
		window.speechSynthesis.speak(msg);
		setTimeout(function(){
			window.localStorage.setItem('actionFlag', 0);
		}, 3500);
		
	}
	
}
