const workspace = document.querySelector('.workspace');
const details = document.querySelectorAll('.project-detail');
const cards = document.querySelectorAll('.card');

function showProject() {
    const id = location.hash.slice(1);
    let found = false;

    details.forEach(d => {
        const match = d.id === id;
        d.hidden = !match;
        if (match) found = true;
    });

    workspace.classList.toggle('has-detail', found);
}

cards.forEach(card => {
    card.addEventListener('click', event => {
        if (card.getAttribute('href') === location.hash) {
            event.preventDefault();
            history.pushState(null, '', location.pathname + location.search);
            showProject();
        }
    });
});

window.addEventListener('hashchange', showProject);
showProject();