let message = 'Spam text';
let timeout = 3500;

function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
} 

let h = document.getElementsByClassName('reply_fakebox');
for (let n = 0; n < h.length; n++) {
	h[n].click();
	sleep(10);
}

let a = document.getElementsByTagName('a');
for (let i = 0; i < a.length; i++) {
	if(a[i].innerHTML == 'Comment') { // originaly "Комментировать"
		a[i].click();
		sleep(10);
	}
}

let g = document.getElementsByClassName('reply_box clear_fix');
for (let i = 0; i < g.length; i++) {
	g[i].getElementsByClassName('fl_l reply_field')[0].innerHTML = message;
	g[i].getElementsByClassName('flat_button')[0].click();
	sleep(timeout);
}