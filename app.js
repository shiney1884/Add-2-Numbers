
var num1 = document.getElementById("firstnum");
let num2 = document.getElementById('secondnum');
let addbtn = document.querySelector('button');
let finalResult = document.getElementById('result').value;

addbtn.addEventListener('click', function() {
    finalResult = (+num1.value + +num2.value);
    console.log(finalResult)
});
