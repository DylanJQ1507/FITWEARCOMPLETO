document.getElementById('botonPagar').addEventListener('click', function () {
    let bin = document.getElementById('numeroTarjeta').value;


    if (bin.length > 6) {
        bin = bin.substring(0, 6);
    }

    if (bin.length === 6) {
        fetch(`https://data.handyapi.com/bin/${bin}`)
            .then(response => response.json())
            .then(data => {
                let logo = '';
                if (data.Scheme.toLowerCase() === 'visa') {
                    logo = '<img src="./img/visaredonda.png" alt="Visa" />';
                } else if (data.Scheme.toLowerCase() === 'mastercard') {
                    logo = '<img src="./img/logomastercard.png" alt="MasterCard" />';
                }

                document.getElementById('resultado').innerHTML = `
                    <p class="title"> Tarjeta</p><p> ${logo}</p>
                    <p class="title">Tipo</p><p>${data.Type}</p>
                    <p class="title">Banco</p><p>${data.Issuer}</p>
                    
                `;


                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Pago realizado con éxito , gracias por confiar en nosotros",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                document.getElementById('resultado').innerHTML = `<p>Error al cargar los datos: ${error}</p>`;
            });
    } else {
        Swal.fire({
            position: "top-center",
            icon: "warning",
            title: "Por favor ponga al menos los primeros 6 dígitos de su Tarjeta.",
            showConfirmButton: false,
            timer: 1500
        });
    }
});
