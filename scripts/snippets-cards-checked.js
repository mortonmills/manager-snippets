//CHECKBOX FUNCTIONS


document.getElementById("deleteSelected").addEventListener( 'click', deleteSelected)
document.getElementById("selectAll").addEventListener( 'click', selectAll)
document.getElementById("deselectAll").addEventListener( 'click', deselectAll)

function stopCheckBox(){
    document.querySelectorAll('.checkBox').forEach((el) => {
    el.addEventListener( 'click', function(event) {event.stopPropagation()})
    })
}

  //UPDATES SNIPPETS OBJECT
  function updateSafe(){

    for (const snippet of safeSnippets){
        snippetFields.forEach(el => {
          if (Array.isArray(snippet[el])){
          snippet[el].push(snippetList(el))
          }  
        })
    }
  }
  
  
    function selectAll(){
        document.querySelectorAll('.checkBox').forEach((el) => {
        if(el.checked == false){
        el.checked = true
        
        }

        })
    
    }
    
        function deselectAll(){
        document.querySelectorAll('.checkBox').forEach((el) => {
        if(el.checked == true){
        el.checked = false
        
        }

        })
    
    }
  
  
  
  function deleteSelected(){
    document.querySelectorAll('.checkBox').forEach((el) => {

      if(el.checked == true){

          let i;
for ( i = 0;  i < snippets.length; i++) {
if(snippets[i].cardID == el.parentNode.id){
snippets.splice(i,1)
break
	}
}


      }
    })
  updateAll()
  }


  function updateCheckBox(){
    document.querySelectorAll('.checkBox').forEach((el) => {

      if(el.checked == true){

        for (const snippet of snippets){
          //make you use snippet not snippets
          if(snippet.cardID == el.parentNode.id){

            let shownFields = ["lang", "tags",]

            shownFields.forEach((el2) => {
             let arrList = snippetList(el2)
              arrList.forEach((el3) => {
                snippet[el2].push(el3)
              })
            })
          }
        }
      }
    })
  }












function isBoxChecked(){
            let test = false
for(let check of document.querySelectorAll('.checkBox')){
if(check.checked == true){
test = true
}
}

return test
} 




function multiBox(){
    document.querySelectorAll('.checkBox').forEach((el) => {
      el.addEventListener( 'click', function(event) {
      
                                      currentCard = event.currentTarget.parentNode.id //need this line for global use
      
      

document.querySelectorAll('.checkBox').forEach((el2) => {
el2.checked == true
? el2.parentNode.style.backgroundColor = "#eeeeee"
: el2.parentNode.style.backgroundColor = "white"
})

      





for (let field of hiddenFields){

        if (isBoxChecked()){
        
        
        
        
                document.getElementById(field).style.visibility = "hidden";
                let shownFields = ["lang", "tags",]

for (let field of shownFields){
        let keyListHTML = []  
            // will ned to fix for just languages, is adding class to other array fields
           keyListHTML.push(` <span class="${field}List">valueForChecked</span> `)
           document.getElementById(field).innerHTML = keyListHTML.join("") + ` <button id="${field}Add" style="display:none">+</button> `
        }
                
                                            setAddField()//for adding value to arr fields
                                            
                                            if (document.getElementById("editSnippet").innerText == "Update"){
                                                            editSwitch("Update", true, "inline")
                                                            document.querySelector(".tagsList").focus()
                                            }

        }
        
        else {
        //reset when no checked boxes
        checkSnippet = {
lang: "undefined",
tags: "undefined",
}
                        loadSnippet(currentCard, snippets)
                                event.currentTarget.parentNode.style.backgroundColor = "#eeeeee"
                document.getElementById(field).style.visibility = "visible";
                
                
                if (document.getElementById("editSnippet").innerText == "Update"){
                          editSwitch("Update", true, "inline") // are title and descriptiona and source editable

                
                setAddField()
                         document.getElementById("title").focus()
                }
        }



}

      
      

      
      
      })
})



    
   // let hiddenFields = ["title", "description", "author", "source", "codeText",]
//document.querySelectorAll('.checkBox').some((el2) => {el2.checked == true})
//better way to write this



/*
  	if(test){
  	    hiddenFields.forEach(el2 => document.getElementById(el2).innerText = "")
	}
     
      	else{
  	    hiddenFields.forEach(el2 => document.getElementById(el2).style.backgroundColor = "white")
  	
	}
    
   
	parentNode.id == snippet.cardID
will need to push new values to array

    
    */
    //document.getElementById(currentCard).click() //updated cards may break order of id, counter
}