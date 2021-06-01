let deletedCounter = 0;
let clickTimer	= 1000;
let currentIndex = 0;
let videoToChooseFrom = [...document.body.querySelectorAll('div.video_item._video_item')].filter( elem => elem.childNodes[3].childNodes[3].firstChild.className == "mem_link"); 
let closeVideoButton = document.querySelector('div.mv_close_icon');
let deleteVideoButton = document.querySelector('a[onclick="Videoview._onDelete();"]');

function openVideo(numberOfVideo) {
	return new Promise( (resolve) => {
		setTimeout( () => {
			videoToChooseFrom[numberOfVideo].childNodes[1].childNodes[1].click();
			resolve();
		}, clickTimer);
	});	
}

function deleteVideo() {
	return new Promise( (resolve) => {
		setTimeout( () => {
			deleteVideoButton.click();
			console.log("Trying to click [Delete] button.");
			if (typeof(deleteVideoButton) != 'undefined' && deleteVideoButton != null) {
				console.log('Deleted!\n')
				deletedCounter++;
				resolve();
			}
		}, clickTimer);
	});
}

function closeVideoPlayer() {
	return new Promise((resolve) => {
		setTimeout( () => {
			closeVideoButton = document.querySelector('div[Videoview.hide();"]');
			closeVideoButton.click();
			resolve();
		}, clickTimer); 
	});
}

//-----------------------------------------------------------
// Observer

// function addObserverIfDesiredNodeAvailable() {
// 	let whatToObserve = document.querySelector('div#mv_layer');
// 	if(!whatToObserve) {
//     //The node we need does not exist yet. Wait 50ms and try again
//     window.setTimeout(addObserverIfDesiredNodeAvailable,10);
//     return;
//   }
//   const observer = new MutationObserver( function(mutations) {
//   	mutations.forEach( function (mutation) {
//   		if (mutation.addedNodes.length) {
//   			console.log("Mutation have happened");
// 				// deleteVideo().then( closeVideoPlayer() );
// 			}
// 		})
//   });
// 	let config = {childList: true};
//   observer.observe(whatToObserve,config);
// }
// addObserverIfDesiredNodeAvailable();

const observer = new MutationObserver( function(mutations) {
	mutations.forEach( function (mutation) {
		if (mutation.addedNodes.length) {
			console.log("Mutation have happened");
			deleteVideo().then( closeVideoPlayer() );
		}
	})
});

const whatToObserve = document.querySelector('div#mv_layer');
let config = {childList: true};
observer.observe(whatToObserve, config);

//----------------------------------------------------------

setInterval( () => {
	if (currentIndex < videoToChooseFrom.length) {
		console.log(currentIndex + " / " + videoToChooseFrom.length);
		openVideo(currentIndex);
		currentIndex++;
		console.log(deletedCounter + ' video deleted');
		if (currentIndex % 100 == 0) {
			console.clear();
		}
		if (currentIndex == (videoToChooseFrom.length - 1)) {
			Videoview.hide();
		}
	}
}, 6000);

