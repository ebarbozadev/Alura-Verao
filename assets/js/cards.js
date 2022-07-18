class Cards {
    constructor(){
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.card1 = document.querySelector('.card1');
        this.card2 = document.querySelector('.card2');
    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll(){
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 436){
            this.card1.style.transform = `translate(${((-posicao) + 436)/20}%)`;
            this.card2.style.transform = `translate(${(posicao - 436)/20}%)`;
        }
    }
}

// export { Cards }