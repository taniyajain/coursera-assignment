(function(window) {
	var hellospeaker = new object();
	var speakworld = "hello";
	hellospeaker.speak = function speak(name) {
		console.log(speakworld+ "" + name);
	};
	window.hellopeaker = hellospeaker;
}(window);
