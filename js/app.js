/* eslint-env browser */
var adventuringParty = {};

document.getElementById("submitName").addEventListener('click', saveDmName);
document.getElementById("clearName").addEventListener('click', clearDmName);
document.getElementById("addCharacter").addEventListener('click', addCharacter);

//store a user's info and party members
if (!localStorage.getItem('adventuringParty') || 
    (JSON.parse(localStorage.getItem('adventuringParty'))['dmName'] == "") 
){
    document.getElementById('dmNameField').value == "";
    adventuringParty = {dmName:"", party:[], settings:[]};
    document.getElementById('dmNameField').hidden = false;
    document.getElementById('submitName').hidden = false;
    document.getElementById('clearName').hidden = true;
} else {
    adventuringParty = JSON.parse(localStorage.getItem('adventuringParty')); 
    console.log(adventuringParty);   
    document.getElementById('returningDmHeader').innerHTML = `Welcome Back ${adventuringParty['dmName']}`;
    document.getElementById('dmNameField').hidden = true;
    document.getElementById('submitName').hidden = true;
    document.getElementById('clearName').hidden = false;
}

function saveDmName(){
    var dmName = document.getElementById("dmNameField").value;
    console.log('dmname:' + dmName);
    adventuringParty['dmName'] = dmName;
    if (dmName != ""){
        localStorage.setItem('adventuringParty', JSON.stringify(adventuringParty));
    }
    let test = localStorage.getItem('adventuringParty');
    console.log(test);
}

function clearDmName(){
    adventuringParty["dmName"] = "";
    localStorage.setItem('adventuringParty', JSON.stringify(adventuringParty));
    location.reload();

}

//constructor to add party member to list
function addCharacter() {    
    const level = document.getElementById('pcLevel').value;
    const pcName = document.getElementById('pcName').value;
    const newNode = document.createElement('li');
    newNode.className = 'character';
    newNode.innerHTML = `${pcName} is level ${level}`;
    
    var charCount = document.getElementsByClassName('character');
    console.log(charCount);
    if (charCount.length < 11){
        document.getElementById('characterList').appendChild(newNode);
    } else if (charCount.length > 10) {
        alert('I think 10 players is enough you madman');
    }
}







//constructor to remove party member from list

//acquire resource files and build data structures

//compute the xp level of the party

//generate monsters based on the party

//name monsters from name library and facilitate adding more
