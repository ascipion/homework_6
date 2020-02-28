var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 + "%";
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() { 
    video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
    video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
    video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime +60 > video.duration){
		video.currentTime = 0;
		video.pause();
		video.playbackRate = 1;
	}
	else
		video.currentTime += 60;

	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	console.log("")
	var z = document.getElementById("mute");
  	if (video.muted){
		z.innerHTML = "Mute";
		video.muted = false;
		console.log("Unmuted")
	}
  	else{
		z.innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted")
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	console.log("Volume is " + video.volume *100 + "%");
}

function gray() { 
	console.log("In grayscale")
	video.classList.add("grayscale")
}

function color() {
	console.log("In color")
	video.classList.remove("grayscale")
}
