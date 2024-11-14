document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert(`¡Gracias por registrarte, ${name}! Te contactaremos pronto.`);
        // Aquí podrías agregar el código para enviar el formulario a un servidor.
    }
});
