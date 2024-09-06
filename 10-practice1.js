function button1(selector) {
    const button = document.querySelector(selector);
    if(!button.classList.contains('is-toggled')){
        turnOffPreviousButton();
        button.classList.add('is-toggled')
    }else{     
        button.classList.remove('is-toggled');
    }
}
function turnOffPreviousButton(){
    PreviousButton = document.querySelector('.is-toggled');
    if(PreviousButton){
        PreviousButton.classList.remove('is-toggled');
    }
}



