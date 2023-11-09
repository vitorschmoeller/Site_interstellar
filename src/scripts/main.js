document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for(let i = 0;i < buttons.length;i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton; //pegando especificamente o nome dentro do atributo data-tab-button
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`) //selecionando o id pela variavel abaAlvo que ira ser alterada ou removida
            escondeTodasAbas();
            remove();
            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for(let i = 0; i < questions.length;i++){
        questions[i].addEventListener('click', abreOuFechaResposta)

        
    }

    function togglePlay() {
        var audio = document.getElementById("myAudio");
        var playButton = document.getElementById("playButton");
    
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = `<i class="fa-solid fa-pause"></i>Pause`;
        } else {
            audio.pause();
            playButton.innerHTML = `<i class="fa-solid fa-play"></i>Play`;
        }
    }
    var playButton = document.getElementById("playButton");
    playButton.addEventListener("click", togglePlay);
    

})

function remove(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i =0; i < buttons.length ; i++){
        
        buttons[i].classList.remove('shows__tabs__button--is-active');
        
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0 ; i < tabsContainer.length ; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}
