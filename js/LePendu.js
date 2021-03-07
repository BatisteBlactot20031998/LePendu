// Creat alert for introduction of my game
alert("Salut à toi Aventurier !");
alert("Bon.. comment dire... ");
alert("Lors de notre dernière rencontre tu as tout simplement écrasé notre champion sur le jeu du Chifoumi..");
alert("Mais ne crois pas que tu es le plus fort loin de là !!");
alert("Nous allons dès maintenant te proposer un défi contre notre champion du Pendu et tu ne t'en sortiras pas aussi facilement");

//Create main let/var for my game
let lifePoint = 7; 
let restOfMyWord = 0;
const mySecretWord = [
    "heineken",
    "grimbergen",
    "1664",
    "affligem",
    "pelforth",
    "goudale",
    "desperados",
    "leffe",
    "kronenbourg",
    "superbock"
];

//Create functions for to have a short and clean code; and return for an easy comprehension

//This function choose random word in my const mySecretWord
function choiceRandomWord(){
    let randomWordInMyConst = Math.floor(Math.random() * Math.floor(mySecretWord.length));
    return mySecretWord[randomWordInMyConst];
};

//Convert my random word with function SPLIT in a array
function splitRandomWordInArray(randomWordInMyConst) {
    let arrayWord = randomWordInMyConst.split("");
    return arrayWord;
};

//Convert my word at underscore
function showHiddenLetter (randomWordInMyConst) {
    let hiddenLetter = [];
    for (let i =0; i < randomWordInMyConst.length; i++){
        hiddenLetter[i] = " _ ";
    }
    return hiddenLetter;
};

//Creat anti-cheat for bad player !!! 
function noCheatOneLetter (oneLetter){
    while(oneLetter.length > 1) {
        oneletter = prompt("Bah oui bien sûr !! C'est pas parce que je suis un Développeur Web Junior que tu dois commencer à tricher...Choisis une lettre merci !");
    }
    return oneLetter
};

//Create let/var (they are in functions)
let randomWordInMyConst = choiceRandomWord(mySecretWord);
let arrayWord = splitRandomWordInArray(randomWordInMyConst);
let hiddenLetter = showHiddenLetter(randomWordInMyConst);

//Create alert for start game and help user
alert("Le jeu va donc commencer");
alert("Mais je vais être gentil et te donner des indices..");
alert("Sans ça vous ne pouvez être un véritable viking");
alert("Tu ne retrouveras ton chemin si tu en abuses...");
alert("Quoi de mieux en fin de semain devant la TV...");
alert("Bon courage" + hiddenLetter);

//Create a loop with condition for playing game
while(lifePoint > 0){
    let userChoice = noCheatOneLetter(prompt("Points restants : " + lifePoint + "\n\n" + hiddenLetter + "\n\n" + "Saisis une lettre !"));
    if (arrayWord.includes(userChoice)) {
        for (let i = 0; i < arrayWord.length; i++) {
            if (userChoice.toLowerCase() === arrayWord[i]) {
                hiddenLetter[i] = userChoice.toLowerCase();
                restOfMyWord ++;
            }
        }
    }
    else {
        lifePoint --;
    }
    if(restOfMyWord === arrayWord.length) {
        alert("Et bah.. tu as encore battu notre champion.. mais ne sois pas fière pour autant boire de la bière ne t'apportera que malheur...");
        break;
    }
    else if(lifePoint === 0) {
        alert("Perdu.. Comment oses-tu te prétendre champion ...");
    }
}

