// add solution here
function theBeatlesPlay (musicians, instruments) {
  
  var newArray = [];
 
  for (let i = 0; i < musicians.length; i++) {
   
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArray;
}

function johnLennonFacts (facts) {
  let facts = []
  let i = 0;
  while (i <= facts.length) {
    facts[i] = (facts[i] + '!!!');
    i ++;
  }
  return facts;
}

