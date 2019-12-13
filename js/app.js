document.getElementById('test').addEventListener('click', testFunc);

function testFunc() {
    console.log('hellow wolrd');
    const level = document.getElementById('level').nodeValue;
    const name = document.getElementById('name').nodeValue;
    const newNode = document.createElement('li');
    newNode.nodeValue = `${name} is level ${level}`;
    
    document.getElementById('charList').appendChild(newNode);
}
