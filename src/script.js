function navigate(url) {
    window.location = url;
}

function navigateNewTab(url) {
    window.open(url, '_blank');
}

navbarExpanded = false;
function expandNavbar() {
    menu = document.getElementById('menu');
    menu.classList.add('open');
    navbarExpanded = true;
}

function collapseNavbar() {
    menu = document.getElementById('menu');
    menu.classList.remove('open');
    navbarExpanded = false;
}

function toggleNavbar() {
    navbarExpanded ? collapseNavbar() : expandNavbar();
}

