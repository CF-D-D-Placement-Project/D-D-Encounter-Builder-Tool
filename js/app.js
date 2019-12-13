/* eslint-env browser */

//store a user's info and party members
if (!localStorage.getItem('AdventuringParty')) {
    document.getElementById('userName').value = null;
} else {
    const userData = JSON.parse(localStorage.AdventuringParty);
    document.getElementById('userName').value = userData.userName;
}

//constructor to add party member to list
document.getElementById('pcCreate').addEventListener('click', testFunc);

function testFunc() {    
    const level = document.getElementById('level').value;
    const name = document.getElementById('name').value;
    const newNode = document.createElement('li');
    newNode.innerHTML = `${name} is level ${level}`;
    
    document.getElementById('charList').appendChild(newNode);
}


//constructor to remove party member from list

//acquire resource files and build data structures

//compute the xp level of the party

//generate monsters based on the party

//name monsters from name library and facilitate adding more
