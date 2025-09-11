document.querySelector('.loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const userPadrao = "leo";
    const senhaPadrao = "123";

    if (user === userPadrao && pass === senhaPadrao) {
        alert('Login bem-sucedido!');
        window.location.href = 'pagePrincipal.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});