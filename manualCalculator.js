var characterDisplay = "";
var oprStore = "";

function number(num) {
    characterDisplay += num;
    document.getElementById("result").value = characterDisplay; 
}

function opr(opr) {
    if (!isNaN(characterDisplay[0])) {
        if (isNaN(characterDisplay.slice(-1))) {
            characterDisplay = characterDisplay.slice(0, -1); // Remove last operator if present
        }
        characterDisplay += " " + opr + " "; // Add spaces around operator
        oprStore += opr; // Store operator
        document.getElementById("result").value = characterDisplay; 
    } else {
        alert('first enter any numeric value');
    }
}

function outputCalcu() {
    var charArray = characterDisplay.split(" ");
    var resultDisplay = ""
    
    for(var i = 0; i < charArray.length; i++){
            if(charArray[i] === '/'){
                resultDisplay = (charArray[i-1] / charArray[i+1]).toFixed()
                charArray.splice(i-1, 3,resultDisplay.toString())

            }
    }
    
    for(var i = 0; i < charArray.length; i++){
        if(charArray[i] === '*'){
            resultDisplay = (charArray[i-1]*charArray[i+1]).toFixed()
            charArray.splice(i-1, 3,resultDisplay.toString())
    }
}
    console.log('this is final result:', charArray);
}

function clearSingleChar() {
    characterDisplay = characterDisplay.slice(0, -1);
    document.getElementById("result").value = characterDisplay; 
}

function clearWholeCal() {
    characterDisplay = "";
    document.getElementById("result").value = characterDisplay; 
}
