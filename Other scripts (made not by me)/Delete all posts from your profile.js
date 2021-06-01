(function () { 
	'use strict'; 
	if (!confirm('Удалить все записи со стены?')) return; 
	let deletePostLink = document.body.querySelectorAll('a.ui_actions_menu_item[onclick^="wall.deletePost"]'); 
	for (let i = 0; i < deletePostLink.length; i++) { 
		deletePostLink[i].click(); 
	} 
	alert(deletePostLink.length + ' posts deleted'); 
}());