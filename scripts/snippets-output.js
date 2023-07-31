
     
    document.getElementById("downloadJSON").addEventListener( 'click', function(event) {
      let snippetsJSON = JSON.stringify(snippets)
      saveTextAsFile(snippetsJSON)
    })
    
      //FILE SAVING
  function saveTextAsFile(contents){      
    var textToWrite = contents;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = `snippets.json`; //name file here

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = `bookmarksMerged`;//<--custom change, find out meaning

    window.URL = window.URL || window.webkitURL;

    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  function destroyClickedElement(event){
    document.body.removeChild(event.target);
  }
