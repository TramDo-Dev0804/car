document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 150) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            // document.getElementById('fix')
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
document.querySelector(".search-icon").addEventListener('click', function () {
    document.querySelector(".search-screen").classList.add("active");
});
document.querySelector(".close-icon").addEventListener('click', function () {
    document.querySelector(".search-screen").classList.remove("active");
});
