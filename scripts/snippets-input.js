
    let fileInput = document.getElementById("fileInput")


    fileInput.addEventListener('change', async function(){ 
    
    //IMPORT JS FUNCTION LIBRARY
      let txtStr = await handleFiles(fileInput)
      let txtArr = txtStr.split("\n\n\n")
      txtArr.forEach(el => {
      let snippet =     {
		title: "undefined",
		author: ["undefined",],
		lang: ["javascript",],
		date: "undefined",
		codeText: el.trim(),
		description: "undefined",
		tags: ["undefined",],
		folders: ["undefined",],
		source: "undefined",
		related: "undefined",
		dependency: "undefined",
		type: ["function"],
		}
      let titleCheck = el.split("\n")
      for (title of titleCheck){
          if(title.includes("function") && !title.includes("//")){
          let regex = /function\s+(\w+)\(.*\)/
          let clean = title.match(regex)
          snippet.title = clean[1]
          break
          }
      }
      
            for (title of titleCheck){
                if(title.includes("//")){
                let clean = title.replace("//", "").toLowerCase().trim()
          snippet.description = firstLetterUppercase(clean)
          break
          }
      }
      

     
      snippets.push(snippet)
      /*        

             */
             })
             
                           updateAll()
       })

/*
          let JSONStr = await handleFiles(fileInput)
       snippets = JSON.parse(JSONStr)
              updateAll()
*/

// FILE HANDLE
    async function handleFiles(input) {

      let mergedFiles;
      let reader = new FileReader()
      reader.readAsText(input.files[0])
      mergedFiles = await new Promise((resolve,reject)=>{
        reader.addEventListener('load', (e)=>{
          resolve(e.target.result);
        });
      });
      return mergedFiles
    }
    
    
    
         //CONVERTER FUNCTIONS
function firstLetterUppercase(str){
let firstLetter = str[0].toUpperCase()
let restOfString = str.slice(1)
let stringFinal = `${firstLetter}${restOfString}`
return stringFinal
}


/*
    //FILE CONVERSION
    function fileConverter(csvFile){

      //breaking down CSV
      //splitting page content to lines

      let arr1 = csvFile.split("\n")
      console.log(arr1)

      //splitting line content to items
      let arr2 = []
      arr1.forEach((el) => {

        arr2.push(el.split("\t"))
      })
      console.log(arr2)


      //building up JS Object
      csvData = []
      //title headings are in 0, so start on 1
      for (let i = 1; i < arr2.length; i++) {

        let musicObj = {}
        for (let j = 0; j < arr2[i].length; j++) {
          //headings are in 0, ex."artist" and "song"
          musicObj[arr2[0][j]] = arr2[i][j]
        }


        csvData.push(musicObj)
      }

      console.log(csvData)
      return csvData
    }
    
    
        //GETTING CSV FILES
    
    let fileCSV = document.getElementById("fileCSV")
    let fileInput = document.getElementById("fileInput")

    fileCSV.addEventListener('click', async function(){ 
      let csvStr = await handleFiles(fileInput)
      let snippets = fileConverter(csvStr)
}
*/
    
    
        /*
             on click 
             update snippets
             updateall 
             
             if checked
             codetext and title display none
             push to current to value
             do not reset value
      */
    
    
    
    
    
    
    
    
    
    
    
 
 