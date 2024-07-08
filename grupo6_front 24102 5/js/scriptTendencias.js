document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded ha sido disparado.');

    const apiKey = '7b94ceafc0295f47cca954c37cb13894';

    const isLogged = localStorage.getItem("user");
    var user;
    if (isLogged) { user = JSON.parse(isLogged) };
        console.log(user);
        
    const sessionButton = document.getElementById('sesion');

    const handleSessionButton = () => {
        if (user) {
            sessionButton.textContent = 'Logout';
            sessionButton.addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem('user');
                alert('Has cerrado sesión.');
                window.location.href = 'index.html';
            });
        } else {
            sessionButton.textContent = 'Iniciar Sesión';
            sessionButton.href = 'sesion.html';
        }
    };

    handleSessionButton();

    const loadTrendingMovies = () => {
        console.log('Cargando películas tendencias...');
        const btnAnterior = document.getElementById("btnAnterior");
        const btnSiguiente = document.getElementById("btnSiguiente");
        const contenedor = document.getElementById("contenedor");

        let pagina = 1;

        btnAnterior.addEventListener("click", () => {
            if (pagina > 1) {
                pagina -= 1;
                cargarPeliculas();
            }
        });

        btnSiguiente.addEventListener("click", () => {
            if (pagina <= 1000) {
                pagina += 1;
                cargarPeliculas();
            }
        });

        const cargarPeliculas = async () => {
            console.log('Cargando películas...');
            try {
                const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=${pagina}`);

                if (respuesta.status === 200) {
                    const datos = await respuesta.json();
                    let peliculas = '';

                    datos.results.forEach(pelicula => {
                        peliculas += `
                            <div class="tendencias__movies"> 
                                <a href="#" class="movie-link" data-id="${pelicula.id}">
                                    <img
                                        src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"
                                        alt="${pelicula.title}"
                                    />
                                </a>
                                <h5>${pelicula.title}</h5>
                            </div>
                        `;
                    });

                    contenedor.innerHTML = peliculas;

                    document.querySelectorAll('.movie-link').forEach(link => {
                        link.addEventListener('click', (event) => {
                            event.preventDefault();
                            if (user) {
                                window.location.href = `movies.html?id=${link.dataset.id}`;
                            } else {
                                alert('Por favor, inicie sesión primero.');
                            }
                        });
                    });

                } else {
                    console.log(`Error al cargar las películas: ${respuesta.status}`);
                }
            } catch (error) {
                console.log(`Error en el fetch: ${error.message}`);
            }
        }

        cargarPeliculas();
    };

    const loadMovieDetails = async (movieId) => {
        console.log('Cargando detalles de la película...');
        const movieDetailsContainer = document.getElementById('movie-details');
        const mainElement = document.getElementById('main');

        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-MX&append_to_response=videos`);
            const movie = await response.json();

            const trailer = movie.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

            movieDetailsContainer.innerHTML = `
                <h1>${movie.title}</h1>
                
                ${trailer ? `<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : '<p>Trailer no disponible</p>'}
                
                <p>${movie.overview}</p>
            `;

            if (movie.backdrop_path) {
                mainElement.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`;
                mainElement.style.backgroundSize = 'cover';
                mainElement.style.backgroundPosition = 'center';
            }
        } catch (error) {
            console.error('Error loading movie details:', error);
            movieDetailsContainer.innerHTML = '<p>Error al cargar los detalles de la película. Por favor, intenta nuevamente más tarde.</p>';
        }
    };

    const isMovieDetailsPage = window.location.pathname.includes('movies.html');
    if (isMovieDetailsPage) {
        console.log('Es la página de detalles de la película.');
        const getMovieIdFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            return params.get('id');
        };

        const movieId = getMovieIdFromUrl();
        if (movieId) {
            loadMovieDetails(movieId);
        } else {
            document.getElementById('movie-details').innerHTML = '<p>ID de la película no encontrado.</p>';
        }
    } else {
        loadTrendingMovies();
    }
});

