let message = 'Spam text';
let count = 10;
let timeout = 3000;

function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
}

for (let i = 0; i < count; i++) {
	document.getElementById('post_field').value = message;
	wall.sendPost();
	sleep(timeout);
}