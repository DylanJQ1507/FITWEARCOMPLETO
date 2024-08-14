const loadCartFromLocalStorage = () => {
    var cartData = localStorage.getItem('productos');
    if (cartData) {
        let cartArray = JSON.parse(cartData);
        cargarcarritocompra(cartArray)
    }
};
function cargarcarritocompra(data) {
    $("#detallecarrito").html('')
    data.forEach((clothes) => {
        const total = clothes.price * clothes.cantf
        var price = 0
        if (clothes.pricepromo) {
            price = clothes.pricepromo
        } else {
            price = clothes.price
        }
        const rowproducts = `<div class="row " data-id="${clothes.idproducto}">
                        <div class="col-md-2  border-end">
                            <img src="${clothes.img ? clothes.img : 'img/image-not-found.jpg'}" class="img-fluid" id="imgproducto"
                                style="width:150px;height: 150px;">
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5">Nombre <br><span class="fs-6" id="nombreproducto">${clothes.name}</span></p>
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5" style="margin-bottom: 0;">Cantidad</p>
                            <input type="number" class="form-control Cantidad" oninput="updateCalculos(this)"   value="${clothes.cantf}">
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5" style="margin-bottom: 0;">Subtotal &cent;</p>
                            <input type="text" class="form-control subtotal"  value="${price}">
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5" style="margin-bottom: 0;">Total &cent;</p>
                            <input type="text" class="form-control total" name=total[] value="${total}">
                        </div>
                        <div class="col-md-2  border-bottom">
                            <button class="btn btn-outline-primary " onclick="deleteRow(this)">
                                <i class="bi bi-trash3"> </i>
                        </div>
                    </div>`
        $("#detallecarrito").append(rowproducts)
    }
    )

}
$(document).ready(function () {
    loadCartFromLocalStorage()
    actualizarcompra()

});
function updateCalculos(cantidadInput) {

    const fila = cantidadInput.closest('.row');

    const cantidad = parseInt(cantidadInput.value);
    const subtotalInput = fila.querySelector('.subtotal');
    const totalInput = fila.querySelector('.total');
    // Obtener el valor del subtotal (asumimos que es un precio fijo por unidad)
    const subtotal = parseInt(subtotalInput.value);

    // Calcular el total
    const total = cantidad * subtotal;

    // Actualizar el campo total
    totalInput.value = total;
    actualizarcompra()
    if (cantidad == 0) {
        eliminar0(parseInt(fila.dataset.id))
        fila.remove()

    }
}

actualizarcompra = () => {
    const totales = document.querySelectorAll(".total")
    let sumatotal = 0
    totales.forEach(element => {
        sumatotal += parseInt(element.value)
    })
    console.log(sumatotal)
    const totalcompra = document.querySelector(".totalcompra")
    const totalsubtotal = document.querySelector(".subtotalcompra")
    totalcompra.innerHTML = "&cent;" + sumatotal
    totalsubtotal.innerHTML = "&cent;" + sumatotal
}
function deleteRow(button) {
    const row = button.parentElement.parentElement
    const idproducto = parseInt(row.dataset.id)
    const productos = JSON.parse(localStorage.getItem('productos'))
    const productosnuevo = productos.filter(item => item.idproducto !== idproducto)
    localStorage.setItem('productos', JSON.stringify(productosnuevo))
    row.remove()
    actualizarcompra()
}
function eliminar0(id) {
    const productos = JSON.parse(localStorage.getItem('productos'))
    const productosnuevo = productos.filter(item => item.idproducto !== id)
    localStorage.setItem('productos', JSON.stringify(productosnuevo))

    actualizarcompra()
}

