async function cargarDatos() {
    try {
        const respuesta = await fetch('./json/marcasGrafico.json'); // Asegúrate de que 'data.json' esté en la misma carpeta que tu HTML
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
        return null;
    }
}

// Función para crear el gráfico
async function crearGrafico() {
    const datos = await cargarDatos();

    if (datos) {
        // Ordenar los libros por ventas en orden descendente
        datos.sort((a, b) => b.productos - a.productos)

        // Obtener los 5 libros más vendidos
        const topLibros = datos.slice(0, 5)

        // Extraer los títulos y las ventas
        const titles = topLibros.map(book => book.marca);
        const sales = topLibros.map(book => book.productos);
        const ctx = document.getElementById('miGrafico').getContext('2d');
        const miGrafico = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: titles,
                datasets: [{
                    label: 'Productos ',
                    data: sales,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ], borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                    
                }]
            }
        })

    }
}

// Llamar a la función para crear el gráfico
crearGrafico();
