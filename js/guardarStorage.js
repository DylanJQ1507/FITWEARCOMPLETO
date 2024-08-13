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

        const idproducto = clothe._id
        const name = clothe.name
        const img = clothe.imgprincipalUrl
        const price = clothe.price
        const cantidad = document.getElementById("Cantidad").value
        const tamaño = document.getElementById("tallas").value
        const cantf = parseInt(cantidad, 10)
        //Contacto
        const producto = {
            idproducto,
            name,
            img,
            price,
            cantf,
            tamaño,
        };

        //Guardar
        saveContactLocalStorage(producto);
        // saveContactSessionStorage(contact);
        //Mostrar
        //displayContactsLocalStorage();
        //displayContactsSessionStorage();
        alert("AGREGADO AL CARRITO")
    });
    const saveContactLocalStorage = (producto) => {
        let productos = JSON.parse(localStorage.getItem("productos")) || [];
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
    };

});