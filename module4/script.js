(function () {
	var name = ["ali","johan","jari","sonali","aman","jonny"];
	for (var i = 0; i < names.length; i++) {
		var firstletter = name[i].charAt(0).toLowerCase();
	if (firstletter === 'j') {
		byespeaker.speak(name[i]);
	} else{
		hellospeaker.speak(name[i]);
	}
});