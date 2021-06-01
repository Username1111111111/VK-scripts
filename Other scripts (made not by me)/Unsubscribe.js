let a = document.getElementsByTagName('a');

for (let i = 0; i < a.length; i++) {
	if (a[i].innerHTML == 'Unsubscribe') { // originaly "Отписаться"
		a[i].click();
	}
}
