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

function getPixelsToBottom() {
    return document.body.offsetHeight - window.innerHeight - window.scrollY;
}

function timestampToString(timestamp) {
    const timeDiff = Date.now() - timestamp;
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);

    if (seconds < 60)
        return `${seconds} s temu`;
    if (minutes < 60)
        return `${minutes} min temu`;
    if (hours < 24)
        return `${hours} h temu`;
    if (days < 7)
        return `${days} dni temu`;
    if (weeks < 4)
        return `${weeks} tygodni temu`;
    if (months == 1)
        return `${months} miesięc temu`;
    if (months <= 4)
        return `${months} miesiące temu`;
    if (months < 12)
        return `${months} miesięcy temu`;
    return new Date(timestamp).toLocaleString();
}

serverURL = 'https://40.113.33.134';
async function fetchPost(notNewerThan) {
    const res = await fetch(`${serverURL}/${notNewerThan}`);
    const postData = await res.json();
    return postData;
}
function loadPost(postData) {
    const contentDiv = document.querySelector('.content.posts');
    contentDiv.innerHTML += `
        <div class="post${postData.shared ? " shared" : ""}">

            <p class="post-date" title="${new Date(postData.timestamp).toLocaleString()}">
                ${postData.shared ? "Udostępniono" : "Opublikowano"}
                ${timestampToString(postData.timestamp)}
            </p>

            ${postData.text ? 
                `<p>${postData.text}</p>` : ''
            }

            ${postData.picture_url ?
                `<img src="${postData.picture_url}" />` : ''
            }

            <a class="original-post-link" href="${postData.permalink_url}" target="_blank">Otwórz oryginalny post</a>
        </div>
        <hr>`;
    return postData;
}

latestTimestamp = Date.now();
let isLoading = false;
async function loadPosts() {
    if (isLoading)
        return;
    isLoading = true;
    if (document.querySelector('.posts') == undefined)
        return;
    while (getPixelsToBottom() < 500) {
        const post = await fetchPost(latestTimestamp);
        if (post.message == 'post not found')
            break;
        loadPost(post);
        latestTimestamp = post.timestamp;
    }
    isLoading = false;
}
window.addEventListener('load', loadPosts);
window.addEventListener('scroll', loadPosts);