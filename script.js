const cards = document.querySelectorAll('.container-work-content')
const modal = document.getElementById('modal')
const modalImagem = document.querySelector('#modal-image')
const description = document.querySelector('#description')
const fechar = document.getElementById('fechar');

cards.forEach(card => {
    card.addEventListener('click', function() {

        let corte = this.querySelector('h2');

        console.log(corte);

        modal.classList.add('ativo');

        let img = this.querySelector('img');

        description.textContent = corte.textContent;

        modalImagem.src = img.src;
    })
})

fechar.addEventListener('click', (e) => {
    if (e.target == fechar){
        modal.classList.remove('ativo');
    }
})

modal.addEventListener('click', (e) => {
    if (e.target == modal){
        modal.classList.remove('ativo');
    }
})