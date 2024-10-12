var characterDisplay = "";
var oprStore = "";

function number(num){
    characterDisplay += num;
    document.getElementById("result").value = characterDisplay; 
}

function opr(opr){
    if(!isNaN(characterDisplay[0])){

    if(isNaN(characterDisplay.slice(-2))){
        characterDisplay = characterDisplay.slice(0, -2)
    }
    characterDisplay += " " + opr + " ";
    document.getElementById("result").value = characterDisplay; 
}else{
    alert('first enter any numaric value')
}
}

function outputCalcu() {
    charArray = characterDisplay.split(" ")
    
    for(var i = 0; i < charArray.length; i++){
        var opr = charArray[i];
        var beforeChar = +charArray[i-1];
        var afterChar = +charArray[i+1] 

        switch(opr){
                case "/":
                var result  = (beforeChar/afterChar).toString();
                charArray.splice(i-1,3);
                charArray.splice(i-1,0,result)
                break
                
                case "*":
                    var result  = (beforeChar*afterChar).toString();
                    charArray.splice(i-1,3);
                    charArray.splice(i-1,0,result)
                    break

                }
            }
            console.log(charArray);
}


function clearSingleChar(){
    characterDisplay = characterDisplay.slice(0, -1)
document.getElementById("result").value = characterDisplay; 
}

function clearHoleCal(){
     characterDisplay = "";
document.getElementById("result").value = characterDisplay; 
}