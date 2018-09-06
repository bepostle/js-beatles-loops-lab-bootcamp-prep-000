// add solution here
function theBeatlesPlay (musicians, instruments) {
  
  var newArray = [];
 
  for (let i = 0; i < musicians.length; i++) {
   
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArray;
}

function johnLennonFacts (facts) {
  facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]
  let i = 0;
  while (i <= facts.length) {
    facts[i] = (facts[i] + '!!!');
    i ++;
  }
  return facts;
}

