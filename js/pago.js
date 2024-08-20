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



function actualizarCarrito2() {
    $("#detallecarrito").html(''); 
    $("#subtotalcompra").text('₡0'); 
    $("#envioCosto").text('₡0');
    $("#totalcompra").text('₡0'); 
}



function mostrarFactura() {
    const facturaDetalle = $(".factura-items");
    facturaDetalle.html(''); 

    let totalGeneral = 0;
    let costoEnvio = parseFloat(localStorage.getItem("costoEnvio")) || 0; 

    $("#detallecarrito .row").each(function () {
        const nombreProducto = $(this).find("#nombreproducto").text();
        const cantidad = $(this).find(".Cantidad").val();
        const precioUnitario = $(this).find(".subtotal").val();
        const total = $(this).find(".total").val();

        totalGeneral += parseFloat(total);

        const facturaItem = `<div class="factura-item d-flex justify-content-between mb-2">
            <span class="factura-item-nombre"><strong>Producto:</strong> ${nombreProducto}</span>
            <span class="factura-item-cantidad"><strong>Cantidad:</strong> ${cantidad}</span>
            <span class="factura-item-precio"><strong>Precio Unitario:</strong> ¢${parseFloat(precioUnitario).toFixed(2)}</span>
            <span class="factura-item-total"><strong>Total:</strong> ¢${parseFloat(total).toFixed(2)}</span>
        </div>`;

        facturaDetalle.append(facturaItem);
    });

    if (costoEnvio > 0) {
        const envioItem = `<div class="factura-item d-flex justify-content-between mb-2">
            <span class="factura-item-nombre"><strong>Costo de Envío:</strong></span>
            <span class="factura-item-cantidad"></span>
            <span class="factura-item-precio"></span>
            <span class="factura-item-total">¢${costoEnvio.toFixed(2)}</span>
        </div>`;
        facturaDetalle.append(envioItem);
    }

    totalGeneral += costoEnvio; 

    $("#totalFactura").html(`<strong>¢${totalGeneral.toFixed(2)}</strong>`);
    $("#facturaSeccion").show(); 
}





$("#botonPagar").on("click", function () {
    mostrarFactura(); 
    localStorage.removeItem("productos"); 
    localStorage.removeItem("costoEnvio");  
    actualizarCarrito2();
    
});
