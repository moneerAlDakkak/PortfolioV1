//main screen functions :

document.querySelectorAll('nav ul li').forEach(sectionShow)

function sectionShow(theSection) {
    
    'use strict';
    
    theSection.onclick = function () {
        document.body.classList = [this.getAttribute('id')];
    }
    
    
}




// back button function :


document.querySelector('.back-button').onclick = function () {
    
    'use strict';

    document.body.classList = [];

}


// Theme changer :


document.querySelector('.logo').ondblclick = function () {

    if (document.body.getAttribute('id') == 'light-mode') {

        document.body.setAttribute('id', 'dark-mode');

    } else if (document.body.getAttribute('id') == 'dark-mode') {

        document.body.setAttribute('id', 'light-mode');

    }

}

function loading() {

  'use strict';

  document.getElementById('loading').style.zIndex = '-2';

  document.getElementById('loading').style.opacity = '0';

}

setTimeout(loading, 2000);
