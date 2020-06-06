let deletedCounter = 0;
let photoToChoose = document.body.querySelectorAll('div.photos_row>a');
let photoToDelete;
let photoToClose;
let openTimer = 150; //ms
let deleteTimer = 10; //ms
let closeTimer = 150; //ms
console.log(photoToChoose.length + ' photo detected');

function openPhotoViewer(numberOfPhoto) {	
	return new Promise( (resolve) => {
		setTimeout( () => {
			photoToChoose[numberOfPhoto].click();
			resolve();
		}, openTimer);
	});	
}

function deletePhoto() {
	return new Promise((resolve) => {
		setTimeout( () => {
			photoToDelete = document.body.querySelector('a#pv_delete[onclick="Photoview.deletePhoto()"]');
			if (typeof(photoToDelete) != 'undefined' && photoToDelete != null) {
				photoToDelete.click();		
				deletedCounter++;
				resolve();
			} 
	 	}, deleteTimer); 
	});
}

function closePhotoViewer() {
	return new Promise((resolve) => {
		setTimeout( () => {
			photoToClose = document.body.querySelector('div[onclick="Photoview.hide(0)"]');
			photoToClose.click();
			resolve();
		}, closeTimer); 
	});
}

async function loopOfAllPhotos(array) {
  let i = 5000; //Стартовый
  for (const item of array) {
  	await console.log(i + " / " + photoToChoose.length);
  	await openPhotoViewer(i).then(deletePhoto()).then(closePhotoViewer());
		await i++;
		await console.log(deletedCounter + ' photo deleted');
		if (i % 500 == 0) {
			console.clear();
		}
		if (i == (array.length - 1) || i > array.length) {
			Photoview.hide(0);
			break;
		}
  }
  
}

loopOfAllPhotos(photoToChoose);