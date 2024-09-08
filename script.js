function showsidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'flex';
}
function closesidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'none';
}









document.addEventListener('scroll', function () {
    var element = document.querySelector('.left-balloon');
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.animationPlayState = 'running';
    }
});
document.addEventListener('scroll', function () {
    var element = document.querySelector('.right-balloon');
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.animationPlayState = 'running';
    }
});
document.addEventListener('scroll', function () {
    var element = document.querySelector('.left-balloon02');
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.animationPlayState = 'running';
    }
});
document.addEventListener('scroll', function () {
    var element = document.querySelector('.right-balloon02');
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.animationPlayState = 'running';
    }
});
document.getElementById('tooglebutton').addEventListener('click',function() {
    var box = document.getElementById('boxview');
    if(box.style.display==='none') {
        box.style.display='flex';
    }
    else {
        box.style.display='none';
    }
});
// Function to apply a glow effect
function applyGlow(className, color) {
    var glow = document.querySelector(className);
    if (glow) {
        glow.style.backgroundColor = color;
    }
}

// Function to turn off the glow effect
function removeGlow(className) {
    var glow = document.querySelector(className);
    if (glow) {
        glow.style.backgroundColor = 'white';
    }
}
function glowing() {
    applyGlow('.circle02', '#41B3A2');
}

function offglowing() {
    removeGlow('.circle02');
}

function glow01() {
    applyGlow('.circle03', 'rgba(255, 0, 0, 0.9)');
}

function offglow01() {
    removeGlow('.circle03');
}

function glow02() {
    applyGlow('.circle2', '#41B3A2');
}

function offglow02() {
    removeGlow('.circle2');
}

function glow03() {
    applyGlow('.circle3', 'rgba(255, 0, 0, 0.9)');
}

function offglow03() {
    removeGlow('.circle3');
}

function glow04() {
    applyGlow('.circle4', '#41B3A2');
}

function offglow04() {
    removeGlow('.circle4');
}

function headglow() {
    applyGlow('.circle01', 'yellow');
}

function offheadglow() {
    removeGlow('.circle01');
}

function headglow01() {
    applyGlow('.circle1', 'yellow');
}

function offheadglow01() {
    removeGlow('.circle1');
}
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.list-items li');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 200); // Delay each item by 200ms
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutSection);
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = document.querySelector('.about-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutContent);
});

document.addEventListener('scroll', function () {
    var el = document.querySelector('.about-content');
    var positions = el.getBoundingClientRect();
    if (positions.top < window.innerHeight && positions.bottom >= 0) {
        el.style.animationPlayState = 'running';
    }
});
