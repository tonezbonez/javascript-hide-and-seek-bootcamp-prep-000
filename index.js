function getFirstSelector(selector){
  var firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget(){
  const nestedTarget = document.querySelector('#nested .target')
  return nestedTarget
}

function deepestChild(){
    let current = document.getElementById('grand-node')
    let next = current.children[0]
    while (next) {
      current = next
      next= current.children[0]
       }
    return current
}
function increaseRankBy(n){
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = (parseInt(rank[i].innerHTML) + n).toString()
  }
}
