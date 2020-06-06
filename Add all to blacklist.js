let addToBlackListButton = document.querySelector('button[onclick="Settings.addToBlacklist();"]');
// showBox("al_settings.php", {act: "blacklist_box"}, {params: {dark: !0} })

let firstBlockButton;
let stopper = false;
let counter = 0;
let clickTimer = 300;

function clickAddToBlackList() {
	return new Promise( (resolve) => {
		addToBlackListButton.click();
		goNext = false;
		console.log("Clicked!");
		resolve();
	});	
}

function findButton() {
	return new Promise( (resolve) => {
		setTimeout( () => {
			firstBlockButton = document.querySelector('button.flat_button.button_small');
			// console.log(firstBlockButton);
			if (typeof(firstBlockButton) != 'undefined' && firstBlockButton != null) {
				console.log('Button have found!');
				resolve();
			}
		}, clickTimer);
	});	
}

function clickFirstBlock() {
	return new Promise( (resolve) => {
		setTimeout( () => {
			firstBlockButton.click();
			console.log("Trying to click [add to blacklist] button.");
			// console.log(firstBlockButton);
			if (typeof(firstBlockButton) != 'undefined' && firstBlockButton != null) {
				console.log('Blocked!\n')
				resolve();
			}
		}, clickTimer);
	});
}

setInterval( () => {
	clickAddToBlackList();
}, 3000);

//-----------------------------------------------------------
const observer = new MutationObserver( function(mutations) {
	mutations.forEach( function (mutation) {
		if (mutation.addedNodes.length) {
			console.log("Mutation have happened");
			findButton().then( clickFirstBlock );
		}
	})
});

const boxLoader = document.querySelector('div#box_layer');

observer.observe(boxLoader, {
	childList: true
});
//-----------------------------------------------------------

