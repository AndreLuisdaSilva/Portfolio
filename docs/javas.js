const habilitesBtnns = document.querySelectorAll('.habilites .btnns');

habilitesBtnns.forEach((btnns) => {
    btnns.addEventListener('click', () => {
        const habilites = btnns.parentElement;
        const content = habilites.querySelector('.content');
        const bt = habilites.querySelector('.btnns');

        if (habilites.classList.contains('clickhover')) {
            // Remover clickhover e redefinir altura
            habilites.classList.remove('clickhover');
            habilites.style.height = bt.offsetHeight + 'px'; // Define a altura para o botão apenas
        } else {
            // Adicionar clickhover e ajustar a altura dinamicamente
            habilites.classList.add('clickhover');
            habilites.style.height = (content.scrollHeight + bt.offsetHeight) + 'px';
        }
    });
});

// Define a altura inicial das seções com base na altura do botão
habilitesBtnns.forEach((btnns) => {
    const habilites = btnns.parentElement;
    const bt = habilites.querySelector('.btnns');
    habilites.style.height = bt.offsetHeight + 'px';
});

habilitesBtnns.forEach((btnns) => {
window.addEventListener('resize', function() {
    const habilites = btnns.parentElement;
    const content = habilites.querySelector('.content');
    const bt = habilites.querySelector('.btnns');
    if (habilites.classList.contains('clickhover')) {
    habilites.style.height = (content.scrollHeight + bt.offsetHeight) + 'px';}
  });
});