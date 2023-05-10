'use strict'

function calc() {
   
    const buttonsValue = this.innerText;
    
    const resPlace = document.querySelector("#res")

    if( buttonsValue === 'C'){
        resPlace.value = '';
    } else if(buttonsValue === '='){
            resPlace.value = eval(resPlace.value);
    } else {
        resPlace.value += buttonsValue;
    }

}
const buttons = document.querySelectorAll('button')

buttons.forEach(element => {

    element.addEventListener('click', calc )

})