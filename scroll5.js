const span = document.querySelector('span');
span.innerHTML = new Date().getFullYear();

const button = document.querySelector('button');
const linksContainer = document.querySelector('.links-container');
const nav = document.querySelector('nav');

const navHeight = nav.getBoundingClientRect().height;
const topLink = document.querySelector('.home');

const links = document.querySelectorAll('.links')
const containerHeight = linksContainer.getBoundingClientRect().height;
// console.log(containerHeight);


button.addEventListener('click', function(){
if(!linksContainer.classList.contains('show-links')){
    linksContainer.classList.add('show-links');
    
}
else{
    linksContainer.classList.remove('show-links');
    
}


})

window.addEventListener('scroll', function(){
    let scrollHeight = window.scrollY;

    if(scrollHeight > navHeight){
        nav.classList.add('fixed');
    }
    else{
        nav.classList.remove('fixed');
    }

    if(scrollHeight > 700){
        topLink.classList.add('display-top-link');
    }
    else{
        topLink.classList.remove('display-top-link');
    }
    
})

links.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();

        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - navHeight;
        
        window.scrollTo({
            left:0,
            top:position,
        })
       linksContainer.classList.remove('show-links');
    })
})
