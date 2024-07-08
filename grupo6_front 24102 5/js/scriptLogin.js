document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var emailField = document.getElementById('email');
  var passwordField = document.getElementById('password');

  // Obtener valores de los campos
  var email = emailField.value.trim();
  var password = passwordField.value.trim();

  // Validar que todos los campos estén completos
  if (!email || !password) {
      alert('Por favor, complete todos los campos.');
      return;
  }

  // Validar que el email contenga un '@'
  if (!email.includes('@')) {
      alert('Por favor, ingrese un email válido.');
      return;
  }

  async function login() {
      const url = 'http://localhost:8080/api/users/login';
      const data = { email, password };

      try {
          const response = await fetch(url, {
              method: 'POST', // Establecer el método HTTP a POST
              headers: {
                  'Content-Type': 'application/json' // Establecer el tipo de contenido para datos JSON
              },
              body: JSON.stringify(data) // Convertir el objeto de datos a una cadena JSON
          });

          const responseData = await response.json();
          if (response.ok) {
              // Almacenar los datos del usuario en el localStorage
              localStorage.setItem("user", JSON.stringify(responseData));

              // Mostrar alert de inicio de sesión exitoso
              alert('Ha iniciado sesión exitosamente');

              console.log('Login response:', responseData); // Manejar los datos de la respuesta
          } else {
              // Manejar el caso en que el inicio de sesión no sea exitoso
              console.log({error: responseData.message, status: 400});
              alert('Error al iniciar sesión, verifique los datos e intentelo nuevamente');
          }
      } catch (error) {
          console.error('Error al iniciar sesión:', error);navigator, 
          alert('Error al conectar con el servidor.');
      }
  }

  // Limpiar formulario
  login();
  emailField.value = "";
  passwordField.value = "";
});

