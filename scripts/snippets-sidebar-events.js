


// SETTING EVENTS FOR SIDEBAR MASTER
  function setEventSidebar(){

    document.querySelectorAll('.sidebarBoxes > div').forEach((el) => {
      el.addEventListener( 'click', function(event) {
        document.querySelectorAll('.sidebarBoxes > div').forEach(el2 => el2.style.backgroundColor = "#eaeaea")
        event.currentTarget.style.backgroundColor = "orange"
        currentSidebar = event.currentTarget.id

			event.currentTarget.id == "main"
          ? document.querySelectorAll('.card').forEach(el2 => el2.style.display = "block")
          : document.querySelectorAll('.card').forEach(el2 => el2.style.display = "none")

//filters cards
        for (const key in sidebarObj){
          if(event.currentTarget.id == key){
          sidebarObj[key].forEach(el2 => document.getElementById(el2).style.display = "block")}
        }

      })
    })
  }




/*
 //change function name to verb
  function sidebarGroupHTML(objKey, objVal){
  
      let sidebarGroup = `
<div class="cardGroupTitle">${objKey}</div>
<div class="sidebarBoxes" id="${objKey}Group">
`  
    let sidebarGroupValues = []
    for (const value of objVal){
      let valueHTML = `
<div>
${value}
  </div>
`      
      sidebarGroupValues.push(valueHTML)
    }
    
    return sidebarGroup 
    + sidebarGroupValues.join("") 
    + "</div>"
  }
  */
  
  

  
  
  
  