function getSubpage(address) {
    let slashIdx = -1;
    let hashIdx = -1;
    for (let i = address.length - 1; i >= 0; i--) {
        if (address[i] === '#')
            hashIdx = i;
        if (address[i] === '/') {
            slashIdx = i;
            break;
        }
    }
    if (hashIdx !== -1)
        return address.substr(slashIdx + 1, hashIdx);
    else
        return address.substr(slashIdx + 1);
}

function getNavbarLinks() {
    const links = document.querySelectorAll('.subsite-link');
    const linksMap = new Map();
    for (const link of links)
        linksMap.set(link.dataset.target, link);
    return linksMap;
}

function highlightLink(target) {
    const links = getNavbarLinks();
    links.get(target).classList.add('active');
}

const target = getSubpage(window.location.href);
highlightLink(target);
