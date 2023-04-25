
function letters (){
    this.collectSingleWord = collectSingleWord;
}
function collectSingleWord(newLetters){
    for(const item in newLetters){
        let singleWord = newLetters[item];
        let collectWorld = "" ;
        for(let i=0; i<newLetters[item].length; i++){
          collectWorld += singleWord[i]
            }
        console.log(collectWorld);
    }
}
var newSingleWord = new letters();
newSingleWord.collectSingleWord({"letters": ["S", "h", "r", "o", "u", "k", " ", "M", "a", "m", "d", "o", "h" ]});
