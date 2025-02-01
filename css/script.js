function translateText() {
    const sourceLang = document.getElementById("source-lang").value;
    const targetLang = document.getElementById("target-lang").value;
    const sourceText = document.getElementById("source-text").value;
    const output = document.getElementById("output");
  
    if (!sourceText.trim()) {
      output.textContent = "Please enter some text to translate.";
      return;
    }
  
   
    
    fetch(`https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLang}|${targetLang}`)
      .then(response => response.json())
      .then(data => {
        output.textContent = data.responseData.translatedText || "Translation failed. Please try again.";
      })
      .catch(error => {
        output.textContent = "Error translating text. Please try again later.";
      });
  }
  