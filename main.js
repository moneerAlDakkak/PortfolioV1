setTimeout(function () {
    
    'use strict';
    
    document.querySelector('.follow').style.right = '30px';
    
},2000);





document.querySelectorAll('nav ul li').forEach(screenChange);

function screenChange(wantedScreen) {
    
    'use strict';
    
    wantedScreen.onclick = function () {
        
        document.body.classList = [this.getAttribute('id')]
        
    }
    
};



document.querySelectorAll('.back-button').forEach(backFunction);


function backFunction(aButton) {
    
    'use strict';
    
    aButton.onclick = () => {
        document.body.classList = [];
    }
}


document.querySelector('.logo').ondblclick = function () {

    if (document.body.getAttribute('id') == 'light-mode') {

        document.body.setAttribute('id', 'dark-mode');

    } else if (document.body.getAttribute('id') == 'dark-mode') {

        document.body.setAttribute('id', 'light-mode');

    }

}
