let container = document.querySelector('.senha');
let input = document.querySelector('.inputsenha');
let icon = document.querySelector('.inputimg');

icon.addEventListener('click', function() {
    container.classList.toggle('visible');                                                                                                               
    if(container.classList.contains('visible')) {
        icon.src = '../imagens/assets/eye.svg'; 
        input.type = 'text';
    } else {
        icon.src = '../imagens/assets/eye-off.svg'; 
        input.type = 'password';
        
    }
});
