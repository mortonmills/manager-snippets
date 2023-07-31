//SIDEBAR HTML GENERATION
let sidebarBox = document.getElementById(`sidebarBox`)
// sidebarBox is id of DOM element
  function setHTMLSidebar(sidebarBox){
    sidebarObj = {}
    let sidebarValues = []
    let sidebarHTML = []
    let sidebarKeys = ["folders", "lang", "tags", "author", "type",]
    //total values of group types, eg all tags
    sidebarKeys.forEach(el => sidebarValues.push(totalVal(el, snippets)))
    //parallel to keys
    sidebarKeys.forEach((el, i) => sidebarHTML.push(sidebarGroupHTML(el, sidebarValues[i]), snippets))
    
    
    let allSnippets = `  
<div class="cardGroupTitle">Main</div>
<div class="sidebarBoxes" >
<div id="main">All Snippets</div>
  </div>
`
sidebarBox.innerHTML = allSnippets + sidebarHTML.join("")
  }




  //CREATES ARRAY OF TOTAL VALUES IN OBJECT KEYS, show input and show output examples
  function totalVal(objKey, snippets){
    let valArr = []
    for (const snippet of snippets){
      snippet[objKey].forEach((el) =>{
        if (!valArr.includes(el)){valArr.push(el)}
      })
    }
    return valArr
  }


  //change function name to verb
  function sidebarGroupHTML(objKey, objVal, snippets){
  
    let idCounter = 0 // must remain top level in function, can remove
    let sidebarGroupValues = []
    for (const value of objVal){
    
      let sidebarVal = []
      for (const snippet of snippets){
        if(snippet[objKey].includes(value)){
          sidebarVal.push(snippet.cardID)
        }
      }

      //WIRING sidebarObj up to snippets Obj
      sidebarObj[`${objKey}${idCounter}`] = sidebarVal
      
      
      let valueHTML = `
<div id=${objKey}${idCounter}>
${value}  ${sidebarVal.length}
  </div>
`      
      sidebarGroupValues.push(valueHTML)
      idCounter++
    }

    // HTML SIDEBAR CONTENT    
    return `
<div class="cardGroupTitle">${objKey}</div>
<div class="sidebarBoxes" id="${objKey}Group">
${sidebarGroupValues.join("")} 
  </div>
`
  }
