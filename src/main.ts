import './style.css';
document.addEventListener('DOMContentLoaded', () => {

const screen = document.getElementById('screen') as HTMLDivElement;
const zero = document.getElementById('digit-zero') as HTMLDivElement;
const one = document.getElementById('digit-one') as HTMLDivElement;
const two = document.getElementById('digit-two') as HTMLDivElement;
const three = document.getElementById('digit-three') as HTMLDivElement;
const four = document.getElementById('digit-four') as HTMLDivElement;
const five = document.getElementById('digit-five') as HTMLDivElement;
const six = document.getElementById('digit-six') as HTMLDivElement;
const seven = document.getElementById('digit-seven') as HTMLDivElement;
const height = document.getElementById('digit-height') as HTMLDivElement;
const nine = document.getElementById('digit-nine') as HTMLDivElement;
const equal = document.getElementById('equal') as HTMLDivElement;
const minus = document.getElementById('minus') as HTMLDivElement;
const add = document.getElementById('add') as HTMLDivElement;
const mul = document.getElementById('mul') as HTMLDivElement;
const reset = document.getElementById('reset') as HTMLDivElement;

let box = '';
let box1 = '';
let boxSign = '';
let boxResult = 0;
let boxIntOne = 0;
let boxIntTwo = 0;
zero.addEventListener('click', () => {
    box = box + '0';
    screen.innerText = box
})
one.addEventListener('click', () => {
    box += '1' ;
    screen.innerText = box
})
two.addEventListener('click', () => {
    box += '2' ;
    screen.innerText = box
})
three.addEventListener('click', () => {
    box += '3'
    screen.innerText = box
})
four.addEventListener('click', () => {
    box += '4'
    screen.innerText = box
})
five.addEventListener('click', () => {
    box += '5'
    screen.innerText = box
})
six.addEventListener('click', () => {
    box += '6'
    screen.innerText = box
})
seven.addEventListener('click', () => {
    box += '7'
    screen.innerText = box
})
height.addEventListener('click', () => {
    box += '8'
    screen.innerText = box
})
nine.addEventListener('click', () => {
    box += '9'
    screen.innerText = box
})

reset.addEventListener('click', () => {
    window.location.reload()
})
add.addEventListener('click', () => {
    adder()
})
minus.addEventListener('click', () => {
    minuser()
})
mul.addEventListener('click', () => {
    muliser()
})

equal.addEventListener('click', () => {
    equalShow()
})

function adder(){
    if(boxResult != 0){
        box1 = boxResult.toString()
    }else{
        box1 = box;
    }
    boxSign = 'add'
    box = '';
}
function minuser(){
    if(boxResult != 0){
        box1 = boxResult.toString()
    }else{
        box1 = box;
    }
    boxSign = 'minus';
    box = '';
}
function muliser(){
    if(boxResult != 0){
        box1 = boxResult.toString()
    }else{
        box1 = box;
    }
    boxSign = 'mul';
    box = '';
}

function equalShow(){
    boxIntOne = parseInt(box1);
    if(boxSign == 'add'){
        boxIntTwo = parseInt(box);
        boxResult = boxIntOne + boxIntTwo;
    }else if(boxSign == 'minus'){
        boxIntTwo = parseInt(box);
        boxResult = boxIntOne - boxIntTwo;
    }else if(boxSign = 'mul'){
        boxIntTwo = parseInt(box);
        boxResult = boxIntOne * boxIntTwo;
    }
    show()
}


function show(){
    screen.innerText = boxResult.toString()
}

})