let snippets; //card and snippet Obj
let sidebarObj;
let currentCard; // access within function also in snippets snippet
let currentSidebar;
let hiddenFields = ["title", "description", "author", "source", "codeText",] // for hidden fields when clicking checkboxes
let shownFields = ["tags", "lang",]
let snippetFields = ["title", "description", "author", "source", "lang", "tags",] //used when which fields are loaded into snippet box, can maybe use ObjKey()
let safeSnippets; //obj for storing content during update, allows for switching between cards with persistence and canceling without effecting snippets Obj

let cardBox = document.getElementById("cardBox")

snippets = [
{
title: "Spinner",
author: ["bondsasx",],
lang: ["javascript", "orca"],
date: "12/34/51",
codeText: "asdfas as fas fas fas fas d\'\' \" \n\n\n\n\sdgsdfgsdfgsf",
description: "helps define lettering schememn in porthemusoiassdaf asd",
tags: ["Spinner","asfasdf","sdf","uioy","srte",],
folders: ["rhythm", "devsand", "download",],
source: "www.leo-nard.com",
related: "letter broawn",
dependency: "lette lib",
type: ["function"],
},
]

