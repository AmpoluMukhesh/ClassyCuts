const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementsByClassName("navbar")[0];

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


// to automatically move the images in the main section
let count = 1;
setInterval(function() {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 5) {
        count = 1;
    }
}, 4000);


// To change the appeared images in the new arrival section
const outside = document.getElementsByClassName("outside");
const inside = document.getElementsByClassName("inside");
window.onload = function() {
    for (let i = 0; i < outside.length; i++) {
        let image2 = outside[i];
        let image1 = inside[i];
    
        let width = image2.clientWidth;
        let height = image2.clientHeight;
    
        image1.style.width = width + 'px';
        image1.style.height = height + 'px';
    }
};
