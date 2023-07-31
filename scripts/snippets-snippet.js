//MASTER FUNCTION

document.getElementById("editSnippet").addEventListener( 'click', editSnippet)
document.getElementById("cancelUpdate").addEventListener( 'click', cancelUpdate)

  function editSnippet(){//may not need event parameter

    if(document.getElementById("editSnippet").innerText == "Edit"){
      editSwitch("Update", true, "inline")
      
      document.getElementById("cancelUpdate").style.visibility = "visible"
      document.getElementById("title").focus()
    }
    else if(document.getElementById("editSnippet").innerText == "Update"){
      editSwitch("Edit", false, "none")
            document.getElementById("cancelUpdate").style.visibility = "hidden"
      
      if(isBoxChecked()){
updateCheckBox()
hiddenFields.forEach((el) => {document.getElementById(el).style.visibility = "visible";})
}
      else{
      
                    updateSnippets(safeSnippets)
snippets = structuredClone(safeSnippets)
      }




      updateAll()
    }
  }


  //TURN ON AND OFF EDITING
  function editSwitch(state, bool, show){

    document.getElementById("editSnippet").innerText = state // Update or Edit
    document.getElementById("codeText").disabled = !bool //true or false

    snippetFields.forEach(el => {
      if(Array.isArray(snippets[0][el])){
        document.querySelectorAll(`.${el}List`).forEach(el2 => el2.contentEditable = bool)//true or false
        document.getElementById(`${el}Add`).style.display = show //inline or none
      }
      else{document.getElementById(el).contentEditable = bool //true or false
          }
    })
  }
  
  function cancelUpdate(){
        editSwitch("Edit", false, "none")
         document.getElementById("cancelUpdate").style.visibility = "hidden"
         safeSnippets = structuredClone(snippets)
         
      if(isBoxChecked()){
hiddenFields.forEach((el) => {document.getElementById(el).style.visibility = "visible";})
}
         
         updateAll()
  }


  //REMOVES EMPTY FIELD VALUES
  function snippetList(key){
    let snippetArr = []
    document.querySelectorAll(`.${key}List`).forEach((el) => {
    //conditional removes blank values in fields
      if(el.innerText){snippetArr.push(el.innerText)}
    })
    return snippetArr
  }


  //UPDATES SNIPPETS OBJECT
  function updateSnippets(snippets){

    for (const snippet of snippets){

      if(snippet.cardID == currentCard){
        snippetFields.forEach(el => {
          Array.isArray(snippet[el])
            ? snippet[el] = snippetList(el)
          : snippet[el] = document.getElementById(el).innerText                
        })

        snippet.codeText = document.getElementById("codeText").value 


      }
    }
  }


  //UPDATES SIDEBAR AND CARDS
  function updateAll(){
    setHTMLCards(snippets, cardBox)
    setEventCards()
    setHTMLSidebar(sidebarBox)
    setEventSidebar()
    document.getElementById(currentCard).click() //updated cards may break order of id, counter
    document.getElementById(currentSidebar).click()   //updated sidebars may break order of id, counter
  }
  
  
  //INITIALIZATION
//order of event listeners effects code
/**/
setHTMLCards(snippets, cardBox)
setEventCards()
setHTMLSidebar(sidebarBox)
setEventSidebar()
setAddField()
