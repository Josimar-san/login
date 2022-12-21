var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path', 
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});

document.querySelector