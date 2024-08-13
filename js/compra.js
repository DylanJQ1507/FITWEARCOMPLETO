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
        const subtotal=clothes.price*clothes.cantf
        const rowproducts = `<div class="row">
                        <div class="col-md-2  border-end">
                            <img src="${clothes.img ? clothes.img : 'img/image-not-found.jpg'}" class="img-fluid" id="imgproducto"
                                style="width:150px;height: 150px;">
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5">Nombre <br><span class="fs-6" id="nombreproducto">${clothes.name}</span></p>
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5" style="margin-bottom: 0;">Cantidad</p>
                            <input type="number" class="form-control" id="Cantidad" value="${clothes.cantf}">
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5" style="margin-bottom: 0;">Subtotal</p>
                            <input type="text" class="form-control" id="subtotal" value="${clothes.price}">
                        </div>
                        <div class="col-md-2">
                            <p class="fs-5" style="margin-bottom: 0;">Total</p>
                            <input type="text" class="form-control" id="total" value="${subtotal}">
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-outline-primary">
                                <i class="bi bi-trash3"> </i>
                        </div>
                    </div>`
                    $("#detallecarrito").append(rowproducts)
                 }
    )

}
$(document).ready(function () {
loadCartFromLocalStorage()

    
  });

// Trabaja con el carrito cargado
