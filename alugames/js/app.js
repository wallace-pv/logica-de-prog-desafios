function alterarStatus(id){
    
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //let texto= gameClicado.querySelector('a');
    console.log(nomeJogo.textContent);
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        //texto.innerHTML = ('Alugar');
        botao.textContent = 'Alugar';
    }else { 
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        //texto.innerHTML = ('Devolver');
        botao.textContent = 'Devolver';
    }
//solução com operador Ternario
//imagem.classList.contains('dashboard__item__img--rented') ? (imagem.classList.remove('dashboard__item__img--rented'), botao.classList.remove('dashboard__item__button--return'), botao.textContent = 'Alugar') : (imagem.classList.add('dashboard__item__img--rented'), botao.classList.add('dashboard__item__button--return'), botao.textContent = 'Devolver');

}

