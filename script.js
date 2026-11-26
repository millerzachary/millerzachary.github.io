const workspace = document.querySelector('.workspace');
const details = document.querySelectorAll('.project-detail');

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

window.addEventListener('hashchange', showProject);
showProject();