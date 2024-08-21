$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clotheid = urlParams.get("id");

    if (clotheid) {
        // Lógica para mostrar los detalles del libro
        console.log(`Detalles del libro con ID: ${clotheid}`);
        const clothe = clothes.find((b) => b._id == clotheid)
        if (clothe) {
            console.table(clothe)
            $("#titulo").text(clothe.name)
            $("#valoracion").text(clothe.valoracion)
            if (clothe.pricepromo) {
                $("#precio").html("&cent;" + clothe.pricepromo)
            } else {
                $("#precio").html("&cent;" + clothe.price)
            }
            var select = $('#tallas')
            var selectenvio = $('#envios')
            $.each(clothe.talla, function (index, size) {
                select.append(`<option value="${size}"> ${size} </option>`)
            })
            $("#disponibilidad").text("Disponibilidad " + clothe.stock)
            $("#descripcion").text((clothe.description ? clothe.description : 'No description'))
            $("#image1").attr("src", clothe.imgprincipalUrl)
            if (clothe.imgsecundary) {
                $("#image2").attr("src", clothe.imgsecundary)
            }
            $("#image3").attr("src", clothe.imgter)
            //Autores
            $("#tiempo").text("Tiempo de entrega: " + clothe.tiempoEntrega)
            $('#envio').html("Costo de envio " + '<br>' + "&cent;" + clothe.gastoenvio)

            $("#garantia").text("Garantia: " + clothe.garantia)
            var button = ' <button type="submit" id=compraa style="margin-top:10px;" class="btn text-end btn-lg btn-outline-primary "  data-id="${clothes._id}" ><i class="bi bi-cart">Comprar</button>'
            $("#comprar").append(button)
            //Categorías
            clothe.categories.forEach(categoria => {
                //Crear un badge para cada categoría
                const categoriaItem = document.createElement("span")
                categoriaItem.classList.add("badge", "text-bg-secondary")
                //categoriaItem.classList.add("text-bg-secondary")
                categoriaItem.textContent = categoria
                categoriaItem.style.marginRight = '10px'
                $("#categories").append(categoriaItem)
            });
            clothe.envio.forEach(enviop => {
                //Crear un badge para cada categoría
                const envioitem = document.createElement("span")
                envioitem.classList.add("badge", "text-bg-secondary")
                //categoriaItem.classList.add("text-bg-secondary")
                envioitem.textContent = enviop
                envioitem.style.marginRight = '10px'
                $("#tipoenvio").append(envioitem)
            });
            $("#texto1").html(clothe.text[0])
            $("#texto2").html(clothe.text[1])
            $("#texto3").html(clothe.text[2])

            $("#nombre1").html(clothe.names[0])
            $("#nombre2").html(clothe.names[1])
            $("#nombre3").html(clothe.names[2])

            
            $("#ocupacion1").html(clothe.ocupation[0])
            $("#ocupacion2").html(clothe.ocupation[1])
            $("#ocupacion3").html(clothe.ocupation[2])


        }

    }
});