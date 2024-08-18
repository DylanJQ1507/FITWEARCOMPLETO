$(document).ready(function () {
    // Obtén la URL actual del navegador
    var url = window.location.href;

    // Crea un objeto URL para analizar la URL
    var urlObj = new URL(url);

    // Obtén el valor del parámetro 'id'
    var id = urlObj.searchParams.get('id');

    const clothe = clothes.find((b) => b._id == id)
    console.log(id)
    const comprarProducto = document.getElementById("compraa");
    comprarProducto.addEventListener("click", (e) => {
        e.preventDefault();
        var pricepromo;
        const idproducto = clothe._id;
        const name = clothe.name;
        const img = clothe.imgprincipalUrl;
        const price = clothe.price;
        if (clothe.pricepromo) {
            pricepromo = clothe.pricepromo;
        }
        const cantidad = document.getElementById("Cantidad").value;
        const tamaño = document.getElementById("tallas").value;
        const cantf = parseInt(cantidad, 10);
        
        // Crear objeto producto
        const producto = {
            idproducto,
            name,
            img,
            price,
            cantf,
            tamaño,
            pricepromo,
        };

        // Guardar o actualizar producto en localStorage
        saveclotheLocalStorage(producto);
        $.notify("Producto Agregado con Exito: " + name, "success");
    });

    const saveclotheLocalStorage = (producto) => {
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        // Buscar si el producto ya existe
        const index = productos.findIndex(p => p.idproducto === producto.idproducto);
        
        if (index > -1) {
           
            productos[index].cantf += producto.cantf;
           
            productos[index].total = (productos[index].pricepromo || productos[index].price) * productos[index].cantf;
        } else {
            
            productos.push(producto);
        }
        
        localStorage.setItem("productos", JSON.stringify(productos));
    };

});
