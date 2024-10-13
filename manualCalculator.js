var characterDisplay = "";

function number(num) {
    characterDisplay += num;
    document.getElementById("result").value = characterDisplay; 
}

function opr(opr) {
    if (!isNaN(characterDisplay[0])) {
        if (isNaN(characterDisplay.slice(-2, -1))) {
            characterDisplay = characterDisplay.slice(0, -3);
        }
        characterDisplay += " " + opr + " "; 
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
                resultDisplay = (Number(charArray[i-1]) / Number(charArray[i+1])).toFixed(1)
                charArray.splice(i-1, 3,resultDisplay.toString())
                i--
            }
            else if(charArray[i] === '*'){
                resultDisplay = (Number(charArray[i-1]) * Number(charArray[i+1])).toFixed(1)
                charArray.splice(i-1, 3,resultDisplay.toString())
                i--
        }       
    }
    
    for(var i = 0; i < charArray.length; i++){
        if(charArray[i] === '+'){
            resultDisplay = (Number(charArray[i-1]) + Number(charArray[i+1])).toFixed(1);
            charArray.splice(i-1, 3,resultDisplay.toString());
            i--; 
        } else if (charArray[i] === '-') {
            resultDisplay = (Number(charArray[i-1]) - Number(charArray[i+1])).toFixed(1);
            charArray.splice(i-1, 3,resultDisplay.toString());
            i--; 
    }
    console.log('this is final result:', charArray);
}
}

function clearSingleChar() {
    characterDisplay = characterDisplay.slice(0, -1);
    document.getElementById("result").value = characterDisplay; 
}

function clearWholeCal() {
    characterDisplay = "";
    document.getElementById("result").value = characterDisplay; 
}
