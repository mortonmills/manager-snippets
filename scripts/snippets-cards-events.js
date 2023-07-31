  //INITIALIZATION


  //SETTING EVENTS FOR CARDS MASTER
  function setEventCards(){
                stopCheckBox()
                multiBox()
safeSnippets = structuredClone(snippets)//happens during updateAll()
    document.querySelectorAll('.card').forEach((el) => {
      el.addEventListener( 'click', function(event) {
      
              document.querySelectorAll(".deleteCard").forEach(el => el.addEventListener( 'click', deleteCard))
              
                if (isBoxChecked()){
                        currentCard = event.currentTarget.id //need this line for global use
        }
                else if (document.getElementById("editSnippet").innerText == "Update"){
        updateSnippets(safeSnippets)  //udpate snippets object, allows for editing multiple card during update session, important to keep first
        document.querySelectorAll('.card').forEach(el2 => el2.style.backgroundColor = "white")
        event.currentTarget.style.backgroundColor = "#eeeeee"
        currentCard = event.currentTarget.id //need this line for global use
                  loadSnippet(currentCard, safeSnippets)
                          setAddField()//for adding value to arr fields
          editSwitch("Update", true, "inline") // are title and descriptiona and source editable
          document.getElementById("title").focus()

        }
//dry clicking, non-editable
        else{
        //updateSnippets(snippets) 
        document.querySelectorAll('.card').forEach(el2 => el2.style.backgroundColor = "white")
        event.currentTarget.style.backgroundColor = "#eeeeee"
        currentCard = event.currentTarget.id //need this line for global use
                loadSnippet(currentCard, snippets)
        setAddField()//for adding value to arr fields
        }
      });
    });
  }


  //POPULATING SNIPPET FIELDS
  function loadSnippet(currentCard, snippets){
    for (const snippet of snippets){
      if(currentCard == snippet.cardID){

        snippetFields.forEach(el => {
          if(Array.isArray(snippet[el])){
            let keyListHTML = []  
            // will ned to fix for just languages, is adding class to other array fields
            // have lang listed as class allows language icons to be displayed 
            el == "lang"
            ? snippet[el].forEach(el2 => keyListHTML.push(` <span class="${el}List ${el2}">${el2}</span> `))
            : snippet[el].forEach(el2 => keyListHTML.push(` <span class="${el}List">${el2}</span> `))
            document.getElementById(el).innerHTML = keyListHTML.join("") + ` <button id="${el}Add" style="display:none">+</button> `
          } 
          else{ 
            document.getElementById(el).innerText = snippet[el]             
          }
        })

        document.getElementById("codeText").value = snippet.codeText
      }
    }
  }
  
  



