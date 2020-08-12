
let num1 = document.getElementById('firstnum');
let num2 = document.getElementById('secondnum');
let addbtn = document.getElementById('add');
let minusbtn = document.getElementById('minus');
let dividebtn = document.getElementById('divide');
let multiplybtn = document.getElementById('multiply');
let finalResult = document.getElementById('result');

addbtn.addEventListener('click', function() {
    finalResult.innerHTML = (+num1.value + +num2.value);
});

minusbtn.addEventListener('click', function() {
    finalResult.innerHTML = (+num1.value - +num2.value);
})

dividebtn.addEventListener('click', function() {
    finalResult.innerHTML = (+num1.value/+num2.value);
})

multiplybtn.addEventListener('click', function() {
    finalResult.innerHTML = (+num1.value*+num2.value);
})