(function () {
	'use strict'; 
	if (!confirm('Удалить все ВИДЕОЗАПИСИ?')) return; 
	let deletePostLink = document.body.querySelectorAll('div.video_thumb_action_delete'); 
	for (let i = 0; i < deletePostLink.length; i++) { 
		deletePostLink[i].click(); 
	}alert(deletePostLink.length + ' posts deleted'); 
}());