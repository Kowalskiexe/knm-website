function navigate(url) {
    window.location = url;
    console.log(url);
}

function navigateNewTab(url) {
    window.open(url, '_blank');
}

navbarExpanded = false;
function expandNavbar() {
    menu = document.getElementById('menu');
    console.log('expand');
    console.log(menu);
    menu.classList.add('open');
    navbarExpanded = true;
}

function collapseNavbar() {
    menu = document.getElementById('menu');
    console.log('collapse');
    console.log(menu);
    menu.classList.remove('open');
    navbarExpanded = false;
}

function toggleNavbar() {
    console.log('toggling');
    navbarExpanded ? collapseNavbar() : expandNavbar();
}