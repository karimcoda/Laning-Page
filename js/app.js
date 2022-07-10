const button = document.getElementById('btn');
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

let items = '';
// Generate navbar from sections id names
function generateNavbar(){
    sections.forEach((x) => {
        items += `<li> <a class="link" href="#${x.id}" id="navli">
        ${x.dataset.nav}</a></li>`;
    });
    navbarList.innerHTML = items;
}

generateNavbar();

// Add class 'active' to section
function addClassActive(x){
    const id = x.getAttribute('id');
    document.querySelector(`#${id}`).querySelector('.container').classList.add('your-active-class');
}
//Removing the active class from the section
function removeClassActive(x) {
    const id = x.getAttribute('id');
    document.querySelector(`#${id}`).querySelector('.container').classList.remove('your-active-class');
}

function activeSection(){
    sections.forEach((x) => {
        //getBoundingClientRect()  returned value is a DOMRect (left, top, right, bottom, x, y, width, and height)
        let elementOffset = x.getBoundingClientRect();
        if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
            addClassActive(x);
        } else {
            removeClassActive(x);
        }
    });
};

document.addEventListener('scroll', activeSection);

// add class to li when clicked
let nav = document.getElementById('navbar').querySelectorAll('li');

nav.forEach((item) => {
    item.addEventListener('click', function (e) {
        nav.forEach((item) => {
        
            item.classList.remove('link__clicked');
            });
            
            item.classList.add('link__clicked');
    });
});

//button to scroll go to top
window.onscroll = function () {
    scrollToTop();
};
function scrollToTop(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        button.style.display = 'block';
    }else{
        button.style.display = 'none';
    }
};
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    nav.forEach((x) =>{ 
        x.classList.remove('link__clicked');
    });
}
button.addEventListener('click', topFunction);

// scrolling smooth
const links = document.querySelectorAll("#navbar ul a");
links.forEach((x)=>{
    x.addEventListener("click", clickHandler);
})

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}



