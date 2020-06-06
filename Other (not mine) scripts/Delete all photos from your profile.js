(function () { 
	'use strict'; 
	if (!confirm('Удалить все ФОТОГРАФИИ?')) return; 
	let deletePostLink = document.body.querySelectorAll('a#pv_delete[onclick^="Photoview.deletePhoto()"]'); 
	for (let i = 0; i < deletePostLink.length; i++) { 
		deletePostLink[i].click(); 
	} 
	alert(deletePostLink.length + ' photos deleted'); 
}()); 