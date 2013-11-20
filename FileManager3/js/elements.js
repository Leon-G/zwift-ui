document.addEventListener("DOMContentLoaded", function(){
	"use strict";

	var content = document.getElementById("content");

	if(!window.FileManager){
		window.FileManager = {}
	}
	window.FileManager.elements = {
		itemsContainer: content,
		get itemsWrapperEl(){return content.firstElementChild}
	}
});