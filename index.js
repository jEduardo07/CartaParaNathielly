$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const startButton = document.getElementById('start-music');

    // Tenta reproduzir a música automaticamente
    backgroundMusic.play()
        .then(() => {
            console.log('Música iniciada automaticamente.');
        })
        .catch((error) => {
            console.log('Reprodução automática bloqueada. Exibindo botão.');
            startButton.style.display = 'block'; // Mostra o botão
        });

    // Inicia a música manualmente se o usuário clicar no botão
    startButton.addEventListener('click', function() {
        backgroundMusic.play();
        this.style.display = 'none'; // Oculta o botão após clicar
    });
});