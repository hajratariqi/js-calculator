var characterDisplay = "";
var oprStore = "";

function number(num){
    characterDisplay += num;
    document.getElementById("result").value = characterDisplay; 
}

function opr(opr){
    if(isNaN(characterDisplay.slice(-1))){
        characterDisplay = characterDisplay.slice(0, -1)
        
    }
    characterDisplay += opr;
    document.getElementById("result").value = characterDisplay; 
}

function outputCalcu() {
    if (characterDisplay !== "") {
        var result =  eval(characterDisplay)
        document.getElementById("result").value = result; 
    }
}
// document.getElementById("result").value = ""; 

function clearSingleChar(){
    characterDisplay = characterDisplay.slice(0, -1)
document.getElementById("result").value = characterDisplay; 
}

function clearHoleCal(){
document.getElementById("result").value = "0"; 
}