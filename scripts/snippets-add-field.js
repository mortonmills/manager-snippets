  //INITIALIZATION


  //ADD NEW FIELDS IN SNIPPET BOX 
  function setAddField(){
  //snippetFields is Global
    snippetFields.forEach(el => {
      if(Array.isArray(snippets[0][el])){
        document.getElementById(`${el}Add`).addEventListener( 'click', addFieldContent)
      }
    })
  }

  // ADD CONTENT TO MULTI-VALUE FIELDS, eg tags 
  function addFieldContent(event){
    let addItem = document.createElement("span");
    let itemText = document.createTextNode("blank");
    addItem.appendChild(itemText)
    addItem.setAttribute("class",`${event.currentTarget.id.replace("Add", "List")}`)
    addItem.setAttribute("contenteditable", "true")      
    document.getElementById(event.target.id).after(addItem)
  }

