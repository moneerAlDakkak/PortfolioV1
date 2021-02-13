document.getElementById('theme').onclick =_=> {

    if (document.body.getAttribute('id') === 'light-mode') {

        document.body.setAttribute('id', 'dark-mode')

    } else if (document.body.getAttribute('id') === 'dark-mode') {

        document.body.setAttribute('id', 'light-mode')

    }


}

document.querySelectorAll('nav ul li').forEach(function (f) {
    
    f.onclick = function () {
        
        document.querySelector('body').classList.add('to-' + this.getAttribute('id'));
        
        document.querySelector('.container').style.height = document.getElementById(this.getAttribute('id') + '-screen').style.height
        
    }
    
    
});

document.querySelector('.back-button').onclick =_=> {
    document.body.classList = ''
};

document.querySelectorAll('article div button').forEach((s) => {
    s.onclick = function () {
        this.parentElement.style.transform = 'translateX(-100%)'
    }
});

document.querySelectorAll('.back-iframe').forEach((l)=>{
    l.onclick = function () {
        this.parentElement.lastElementChild.style.transform = 'translateX(0)'
    }
});
