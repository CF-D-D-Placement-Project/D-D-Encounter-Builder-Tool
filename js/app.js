/* eslint-env browser */
document.getElementById('test').addEventListener('click', testFunc);

function testFunc() {
    console.log('hellow wolrd');
    const level = document.getElementById('level').value;
    const name = document.getElementById('name').value;
    const newNode = document.createElement('li');
    newNode.innerHTML = `${name} is level ${level}`;
    
    document.getElementById('charList').appendChild(newNode);
}
