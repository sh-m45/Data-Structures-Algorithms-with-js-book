var collectionWords = ["Hello", "Javascript", "In", "World"];
let sentence = "";
let reverseSentence = ""
for(let i=0; i<collectionWords.length; i++){
    sentence += collectionWords[i];
}
console.log(sentence);

for(let i=collectionWords.length-1 ; i>=0 ; i--){
    reverseSentence += collectionWords[i];
}
console.log(reverseSentence);