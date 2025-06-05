function runSecretMessage() {

    let firstWord = "boy"
    let secondWord = "child"

    let secret = firstWord + secondWord ;
    let shout = secret.toUpperCase();
    let whisper = secret.toLocaleLowerCase();
    let revealed = firstWord + "the" + secondWord;


    console.log("secret word:" , secret);
    console.log("shouting it:" , shout);
    console.log("whispering it:" , whisper);
    console.log("revealing it:" , revealed);
} 
runSecretMessage();


