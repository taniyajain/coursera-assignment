(function(window) {
	var byespeaker = new object();
	var speakworld = "goodbye";
	byespeaker.speak = function speak(name) {
		console.log(speakworld+ "" + name);
	};
	window.byespeaker = byespeaker;
}(window);
