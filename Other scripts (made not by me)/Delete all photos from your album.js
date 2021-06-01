function delPhotо() { 
	let а = 0;
	let b = 1; 
	while (a != b) {
		Photoview.deletePhotо;
		console.log("Photo deleted " +  а);
	}
	а = cur.pvIndex; 
	Photoview.show(false, cur.pvIndex + 1, null); 
	b = cur.pvIndex; 
} 

setInterval(delPhotо, 3000);