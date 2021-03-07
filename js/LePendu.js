alert("Salut à toi Aventurier !");
alert("Bon.. comment dire... ");
alert("Lors de notre dernière rencontre tu as tout simplement écrasé notre champion sur le jeu du Chifoumi..");
alert("Mais ne crois pas que tu es le plus fort loin de là !!");
alert("Nous allons dès maintenant te proposer un défi contre notre champion du Pendu et tu ne t'en sortiras pas aussi facilement");

let lifepoint = 7; 
let restOfMyWord = 0;
const MySecretWord = [
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

function choiceRandomWord(){
    let randomWordInMyConst = Math.floor(Math.random() * Math.floor(MySecretWord.length));
    return MySecretWord[randomWordInMyConst];
};

function splitRandomWordInArray(randomWordInMyConst) {
    let arrayWord = randomWordInMyConst.split("");
    return arrayWord;
};

function showHiddenLetter (randomWordInMyConst) {
    let hiddenLetter = [];
    for (let i =0; i < randomWordInMyConst.length; i++){
        hiddenLetter[i] = " _ ";
    }
    return hiddenLetter;
};

function noCheatOneLetter (oneLetter){
    while(oneLetter.length > 1) {
        oneletter = prompt("Bah oui bien sûr !! C'est pas parce que je suis un Développeur Web Junior que tu dois commencer à tricher...Choisis une lettre merci !");
    }
    return oneLetter
};
