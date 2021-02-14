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
        
        showSection()
        
    }
    
    
});

document.querySelector('.back-button').onclick =_=> {
    
    document.body.classList = '';
    
    showSection()
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

window.addEventListener('load',_=> {
    
    document.getElementById('loading').style.zIndex = '-2';
    
    document.getElementById('loading').style.opacity = '0';
    
    showSection()
    
});

function showSection() {
    

    if (document.body.classList.contains('to-gallery')) {
        
        setTimeout(_=>{
            
            document.querySelector('.me-screen').classList.remove('show');
            
            document.querySelector('.services-screen').classList.remove('show');
            
        }, 1000)
        
        document.querySelector('.gallery-screen').classList.add('show')
        
    } else if (document.body.classList.contains('to-services')) {
        
        setTimeout(_ => {
        
            document.querySelector('.me-screen').classList.remove('show');
        
            document.querySelector('.gallery-screen').classList.remove('show');
        
        }, 1000)
        
        document.querySelector('.services-screen').classList.add('show')
        
    } else {
        
        setTimeout(_ => {
        
            document.querySelector('.gallery-screen').classList.remove('show');
        
            document.querySelector('.services-screen').classList.remove('show');
        
        }, 1000)
        
        document.querySelector('.me-screen').classList.add('show')
        
    }
    
}
