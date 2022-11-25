var input = document.getElementById('input');
    button = document.querySelectorAll('.button-click');

var inputValue = '';    

for(item of button) {
    item.addEventListener('click', (e)=> {
        buttonText = e.target.innerText;
        console.log("Button Text Is: " + buttonText);
        if(buttonText == 'x') {
            buttonText = '*';
            inputValue += buttonText;
            input.value = inputValue;
        }
        else if(buttonText == 'C') {
            inputValue = "";
            input.value = inputValue;
        }
        else if(buttonText == '=') {
            input.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            input.value = inputValue;
        }
    })
}   