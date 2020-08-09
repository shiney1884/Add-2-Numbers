
var num1 = document.getElementById('firstnum');
let num2 = document.getElementById('secondnum');
let addbtn = document.querySelector('button');
let finalResult = document.getElementById('result');

addbtn.addEventListener('click', function() {
    finalResult.innerHTML = (+num1.value + +num2.value);
});
