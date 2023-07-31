    //HTML GENERATION
    document.getElementById("addCard").addEventListener( 'click', addCard)
    
function addCard(){

let newCard =     {
title: "undefined",
author: ["undefined",],
lang: ["undefined",],
date: "undefined",
codeText: "undefined",
description: "undefined",
tags: ["undefined",],
folders: ["undefined",],
source: "undefined",
related: "undefined",
dependency: "undefined",
		type: ["function"],
}

 snippets.push(newCard)
      updateAll()
}


function deleteCard(event){
let i;
for ( i = 0;  i < snippets.length; i++) {
if(snippets[i].cardID == event.target.parentNode.id){
snippets.splice(i,1)
break
	}
}
updateAll()
}
