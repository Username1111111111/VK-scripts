(function() {
	let a = document.getElementsByClassName("audio"); 
	i=0;
	inter = setInterval( 
	function() {
		Audio.deleteAudio(a[i++].childNodes[1].name);
		if(i > a.length) clearInterval(inter)
	},
500); 
})();