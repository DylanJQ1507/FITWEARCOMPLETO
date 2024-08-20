$(document).ready(function () {
    // Obtén la URL actual del navegador
    var url = window.location.href;

    // Crea un objeto URL para analizar la URL
    var urlObj = new URL(url);

    // Obtén el valor del parámetro 'id'
    var id = urlObj.searchParams.get('id');

    const clothe = clothes.find((b) => b._id == id);
    console.log(id);
    
    const comprarProducto = document.getElementById("compraa");
    comprarProducto.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Obtener detalles del producto
        const idproducto = clothe._id;
        const name = clothe.name;
        const img = clothe.imgprincipalUrl;
        const price = clothe.price;
        const pricepromo = clothe.pricepromo || price; // Usa el precio promocional si está disponible
        const cantidad = document.getElementById("Cantidad").value;
        const tamaño = document.getElementById("tallas").value;
        const cantf = parseInt(cantidad, 10);
        
        // Crear objeto producto
        const producto = {
            idproducto,
            name,
            img,
            price: pricepromo, 
            cantf,
            tamaño,
            pricepromo, 
        };

        
        saveclotheLocalStorage(producto);
        $.notify("Producto Agregado con Exito: " + name, "success");
    });

    const saveclotheLocalStorage = (producto) => {
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        
        const index = productos.findIndex(p => p.idproducto === producto.idproducto);
        
        if (index > -1) {
            productos[index].cantf += producto.cantf;
            
            productos[index].total = (productos[index].pricepromo || productos[index].price) * productos[index].cantf;
        } else {
            
            producto.total = (producto.pricepromo || producto.price) * producto.cantf;
            productos.push(producto);
        }
        
        localStorage.setItem("productos", JSON.stringify(productos));
    };
});
