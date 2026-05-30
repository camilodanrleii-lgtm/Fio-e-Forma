// ======================
// ANIMAÇÕES AO ROLAR
// ======================

const elementos = document.querySelectorAll(
    '.card, .diferencial, .depoimento'
);

function revelarElementos() {

    const alturaTela = window.innerHeight * 0.85;

    elementos.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < alturaTela) {

            elemento.classList.add('ativo');

        }

    });

}

window.addEventListener(
    'scroll',
    revelarElementos
);

revelarElementos();


// ======================
// MENU MOBILE
// ======================

const menuToggle =
    document.querySelector('.menu-toggle');

const menu =
    document.querySelector('.menu');

if (menuToggle) {

    menuToggle.addEventListener('click', () => {

        menu.classList.toggle('active');

    });

}


// ======================
// FECHAR MENU AO CLICAR
// ======================

const linksMenu =
    document.querySelectorAll('.menu a');

linksMenu.forEach(link => {

    link.addEventListener('click', () => {

        menu.classList.remove('active');

    });

});


// ======================
// BOTÃO VOLTAR AO TOPO
// ======================

const topo =
    document.getElementById('topo');

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {

        topo.style.display = 'block';

    } else {

        topo.style.display = 'none';

    }

});

topo.addEventListener('click', () => {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

});


// ======================
// LIGHTBOX DA GALERIA
// ======================

const imagens =
    document.querySelectorAll('.galeria-grid img');

const lightbox =
    document.querySelector('.lightbox');

const imagemGrande =
    document.querySelector('.lightbox img');

imagens.forEach(imagem => {

    imagem.addEventListener('click', () => {

        imagemGrande.src = imagem.src;

        lightbox.classList.add('active');

    });

});

lightbox.addEventListener('click', () => {

    lightbox.classList.remove('active');

});


// ======================
// PREVENÇÃO DE ERROS
// ======================

window.addEventListener('load', () => {

    console.log('Fio & Forma carregado com sucesso.');

});