function showFooterOnScroll()
{
    var footer = document.querySelector('.footer');
    var windowHeight = window.innerHeight;
    var footerTop = footer.getBoundingClientRect().top;

    if(footerTop<windowHeight)
    {
        footer.classList.add('footer-visible');
    }
}

window.addEventListener('scroll',showFooterOnScroll);
