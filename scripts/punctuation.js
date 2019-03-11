var ranking = [];




function printRanking(){
  if (ranking.length > 0){
    var bestRanking = ranking.sort(function compare(a, b){
      var a = a.score 
      var b = b.score
      return b-a
    });
    var ul = document.getElementById('rankings');
       
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

  // li.appendChild(document.createTextNode(ranking[0].name + " " + ranking[0].score))
  // ul.appendChild(li);
    for (i = 0; i < bestRanking.length; i++) { 
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(bestRanking[i].name + " " + bestRanking[i].score));  
      ul.appendChild(li);
      }
    }
}

printRanking()
