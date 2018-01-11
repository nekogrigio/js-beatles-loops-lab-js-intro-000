function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray;
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  let newArray = [];
  let i = 0;
  while (i.length < facts.length) {
    newArray.push(facts[i] + "!!!")
    i++
  }
  return newArray;
}
