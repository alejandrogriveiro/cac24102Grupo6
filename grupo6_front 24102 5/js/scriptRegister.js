document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var pais = document.getElementById('pais').value;
    var checkbox = document.getElementById('checkbox').checked;

    // Validar que todos los campos estén completos
    if (!nombre || !apellido || !email || !password || !fechaNacimiento || !pais || !checkbox) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validar que el email contenga un '@'
    if (!email.includes('@')) {
        alert('Por favor, ingrese un email válido.');
        return;
    }

    // Crear un objeto con los datos del formulario
    var userData = {
        firstName: nombre,
        lastName: apellido,
        email: email,
        password: password,
        country: pais,
    };

    console.log('Datos del usuario:', JSON.stringify(userData)); // Imprime el JSON en la consola

    // Enviar los datos al backend usando fetch
    fetch('http://localhost:8080/api/users', {  // Asegúrate de que la URL incluye el contexto '/api'
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Registro exitoso');
        document.getElementById('registerForm').reset(); // Limpiar el formulario después del registro exitoso
        // Redirigir al usuario a otra página, si es necesario
        // window.location.href = 'index.html';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error en el registro. Por favor, inténtelo de nuevo.');
    });
});

// Prevención del borrado del campo de contraseña al perder el foco
const passwordInput = document.getElementById('password');
let previousPasswordValue = '';

passwordInput.addEventListener('focus', function() {
    previousPasswordValue = passwordInput.value;
});

passwordInput.addEventListener('blur', function() {
    if (passwordInput.value === '') {
        passwordInput.value = previousPasswordValue;
    }
});
