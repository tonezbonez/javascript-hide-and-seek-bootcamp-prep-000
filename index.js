function getFirstSelector(selector){
  var firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget(){
  const nestedTarget = document.querySelector('#nested .target')
  return nestedTarget
}

function deepestChild(){
  const childSearch = document.getElementById('grand-node').querySelectorAll('div')
   
  for (let i = 0; i < childSearch.length; i++) {
    if (childSearch[i].innerHTML = "boo!"){
    return childSearch[i]
  }
  else{
    childSearch.push(childSearch[i])
  }
}