

window.onscroll =() => {
    let header = document.querySelector('headera');

    header.classList.toggle('sticky', window.scrollY > 100);
}