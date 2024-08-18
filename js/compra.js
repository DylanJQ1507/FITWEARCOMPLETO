// Función para cargar el carrito desde el localStorage
const loadCartFromLocalStorage = () => {
    var cartData = localStorage.getItem('productos');
    if (cartData) {
        let cartArray = JSON.parse(cartData);
        cargarcarritocompra(cartArray);
    } else {
        actualizarcompra(true);
    }
};


function cargarcarritocompra(data) {
    $("#detallecarrito").html('');
    data.forEach((clothes) => {
        const total = clothes.price * clothes.cantf;
        var price = clothes.pricepromo ? clothes.pricepromo : clothes.price;
        const rowproducts = `<div class="row" data-id="${clothes.idproducto}">
            <div class="col-md-2 border-end">
                <img src="${clothes.img ? clothes.img : 'img/image-not-found.jpg'}" class="img-fluid" id="imgproducto"
                    style="width:150px;height: 150px;">
            </div>
            <div class="col-md-2">
                <p class="fs-5">Nombre <br><span class="fs-6" id="nombreproducto">${clothes.name}</span></p>
            </div>
            <div class="col-md-2">
                <p class="fs-5" style="margin-bottom: 0;">Cantidad</p>
                <input type="number" class="form-control Cantidad" oninput="updateCalculos(this)" value="${clothes.cantf}">
            </div>
            <div class="col-md-2">
                <p class="fs-5" style="margin-bottom: 0;">Subtotal ¢</p>
                <input type="text" class="form-control subtotal" value="${price}">
            </div>
            <div class="col-md-2">
                <p class="fs-5" style="margin-bottom: 0;">Total ¢</p>
                <input type="text" class="form-control total" name="total[]" value="${total}">
            </div>
            <div class="col-md-2 border-bottom">
                <button class="btn btn-outline-primary" onclick="deleteRow(this)">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        </div>`;
        $("#detallecarrito").append(rowproducts);
    });
    actualizarcompra(); 
}


$(document).ready(function () {
    loadCartFromLocalStorage();
    $('input[name="metodoEntrega"]').on('change', function () {
        actualizarMetodoEntrega(this);
    });
});

function updateCalculos(cantidadInput) {
    const fila = cantidadInput.closest('.row');
    let cantidad = parseInt(cantidadInput.value);
    const subtotalInput = fila.querySelector('.subtotal');
    const totalInput = fila.querySelector('.total');
    const subtotal = parseInt(subtotalInput.value);

    const originalCantidad = parseInt(cantidadInput.value);

    const total = cantidad * subtotal;
    totalInput.value = total;

    if (cantidad === 0) {
        const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
        confirmDeleteModal.show();

        // Confirmar eliminación
        document.getElementById('confirmDeleteButton').addEventListener('click', function () {
            eliminar0(parseInt(fila.dataset.id));
            fila.remove();
            $.notify("Ropa Eliminada de la Compra", "warn");
            confirmDeleteModal.hide();
        });

        // Cancelar eliminación
        document.querySelector('#confirmDeleteModal .btn-secondary').addEventListener('click', function () {
            cantidadInput.value = originalCantidad; 
            $.notify("La eliminación fue cancelada", "info");
            confirmDeleteModal.hide();
        });

    } else {
        totalInput.value = total;
        actualizarcompra();
      
        updateLocalStorage(parseInt(fila.dataset.id), cantidad, total);
    }
}


function updateLocalStorage(idproducto, newCantidad, newTotal) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    const index = productos.findIndex(p => p.idproducto === idproducto);

    if (index > -1) {
       
        productos[index].cantf = newCantidad;
        productos[index].total = newTotal;
    
        productos[index].total = (productos[index].pricepromo || productos[index].price) * newCantidad;
        localStorage.setItem("productos", JSON.stringify(productos));
    }
}

// Función para actualizar el total de la compra
const actualizarcompra = (isInitialLoad = false) => {
    const totales = document.querySelectorAll(".total");
    let sumatotal = 0;
    totales.forEach(element => {
        const value = parseInt(element.value);
        if (!isNaN(value)) {
            sumatotal += value;
        }
    });

    let costoEnvio = 0;
    const metodoEntregaSeleccionado = document.querySelector('input[name="metodoEntrega"]:checked');
    if (metodoEntregaSeleccionado) {
        costoEnvio = parseInt(document.querySelector("#envioCosto")?.textContent.replace('¢', '') || 0);
    }
    const totalConEnvio = sumatotal + costoEnvio;

    const totalcompra = document.querySelector(".totalcompra");
    const totalsubtotal = document.querySelector(".subtotalcompra");
 const totadetalle=document.querySelector(".totaldetalle")
    if (isInitialLoad || totales.length === 0) {
        totalcompra.textContent = "¢0";
        totalsubtotal.textContent = "¢0";
          
    } else {
        totalcompra.textContent = "¢" + totalConEnvio;
        totalsubtotal.textContent = "¢" + sumatotal;
        totadetalle.textContent="TOTAL: "+"¢"+totalConEnvio 
    }


};

let currentDeleteButton; 


function deleteRow(button) {
    currentDeleteButton = button;
    const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    confirmDeleteModal.show();
}

// Confirmar eliminación del producto
document.getElementById('confirmDeleteButton').addEventListener('click', function () {
    if (currentDeleteButton) {
        const row = currentDeleteButton.parentElement.parentElement;
        const idproducto = parseInt(row.dataset.id);
        const productos = JSON.parse(localStorage.getItem('productos'));
        const productosnuevo = productos.filter(item => item.idproducto !== idproducto);
        localStorage.setItem('productos', JSON.stringify(productosnuevo));
        row.remove();
        actualizarcompra();
        
        $.notify("Ropa Eliminada de la Compra", "warn");
    }
    const confirmDeleteModal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
    confirmDeleteModal.hide();
});

// Cancelar eliminación del producto
document.querySelector('#confirmDeleteModal .btn-secondary').addEventListener('click', function () {
    $.notify("La eliminación fue cancelada", "info");
});


function eliminar0(id) {
    const productos = JSON.parse(localStorage.getItem('productos'));
    const productosnuevo = productos.filter(item => item.idproducto !== id);
    localStorage.setItem('productos', JSON.stringify(productosnuevo));
    actualizarcompra();
}


function actualizarMetodoEntrega(input) {
    const envioContainer = document.getElementById("envioContainer");
    const envioCosto = document.getElementById("envioCosto");
    const costoEnvio = 3000;

    if (input.value === "envio") {
        envioCosto.textContent = "¢" + costoEnvio;
        envioContainer.style.display = "flex";
    } else if (input.value === "retiro") {
        envioContainer.style.display = "none";
        envioCosto.textContent = "¢0";
    }
    actualizarcompra();
}


document.getElementById('realizarPedido').addEventListener('click', function() {
   
    document.getElementById('pagoSeccion').style.display = 'block';


    document.getElementById('pagoSeccion').scrollIntoView({ behavior: 'smooth' });
});



