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
  "He hated the sound of his own voice"];
  var i = 0;
  var hypeFacts = [];
  while (i < facts.length) {
    hypeFacts.push(facts[i] + '!!!');
    i ++;
  }
  return hypeFacts;
}

