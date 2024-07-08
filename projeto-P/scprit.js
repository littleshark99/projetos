// Se precisar de scripts específicos, você pode adicionar aqui
// Por exemplo, validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Validar o formulário aqui (exemplo simples)
    var name = document.getElementById('contact-form').name.value;
    var email = document.getElementById('contact-form').email.value;
    var message = document.getElementById('contact-form').message.value;

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos!');
        event.preventDefault(); // Evitar que o formulário seja enviado
    }
});