  //CARD HTML GENERATION
  // add parameters snippets cardBox
  // to remove global variables and pure function
  // input is snippets obj, and out in to cardBox
  function setHTMLCards(snippets, cardBox){

    let snippetArr = []
    let counter = 0
    for (const snippet of snippets){

      let langHTML = []
      if (snippet.lang) {snippet.lang.forEach(el => langHTML.push(` <span class="lang">${el}</span>`))}
       
       //can create a random number to reduce performance costs, 
       //also can use to check all cards maximum safety, no mixing
  if(!snippet.cardID){
  let tempCount = 0
  let tempID = `card${tempCount}`
    while(snippets.some(el => el.cardID == tempID)){
       tempID = `card${++tempCount}`
    }
    snippet.cardID = tempID 
  }
  /**/
  
  //snippet.cardID = `card${counter++}`.replace(/\s+/g, "") //old setup, test for breaks in ids, 16 8 4 2 1

      let card = `
<div class="card" id="${snippet.cardID}">
<span class="titleCard">${snippet.title}</span>
<br>
<input class="checkBox" type="checkbox">
<br>
${langHTML.join("")}
<span class="date">${snippet.date}</span>
<button class="deleteCard">x</button>

  </div>
`
      snippetArr.push(card)
    }

    document.getElementById("cardBox").innerHTML = snippetArr.join("")
  }
