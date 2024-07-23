function DetalleProducto(id) {
    window.location.href = `detalle-ropa.html?id=${id}`;
}
function displayclothesmoresold(data) {
    $("#clothe-list").html('')
    data.forEach((clothes) => {
        if (clothes.categories[0] == "Mas vendidos") {
            const colclothes = document.createElement("div")
            colclothes.classList.add("col")
            const cardclothes = `<div class="col">
            <div class="card">
              <img class="card-img-top" style="max-height:260px;" role="img" src="${clothes.imgprincipalUrl ? clothes.imgprincipalUrl : 'img/image-not-found.jpg'}"
                alt="Imagen" />
              <div class="card-body">
                <p class="fs-3 card-title">${clothes.name}</p>
                <hr>
                <p class="fs-4">${clothes.subdescription}</p>
                <hr>
                <p class="fs-5">${clothes.talla}</p>
                <hr>
                <h1 class="card-title text-end">&cent;${clothes.price}</h1>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-lg " onclick="detalleLibro(${clothes._id})">VER</button>
                </div>
              </div>
            </div>
          </div>`
            $("#clothe-list").append(cardclothes)
        }
    });
}
function displayclothespromotion(data) {
    $("#clothe-list-promo").html('')
    data.forEach((clothes) => {
        if (clothes.categories[0] == "Promocion") {
            const colclothes = document.createElement("div")
            colclothes.classList.add("col")
            const cardclothes = `<div class="col">
            <div class="card">
              <img class="card-img-top" style="max-height:260px;" role="img" src="${clothes.imgprincipalUrl ? clothes.imgprincipalUrl : 'img/image-not-found.jpg'}"
                alt="Imagen" />
              <div class="card-body">
                <p class="fs-3 card-title">${clothes.name}</p>
                <hr>
                <p class="fs-4">${clothes.subdescription}</p>
                <hr>
                <p class="fs-5">${clothes.price}</p>
                <hr>
                <h1 class="card-title text-end">2x&cent;${clothes.pricepromo}</h1>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-lg " onclick="detalleLibro(${clothes._id})">VER</button>
                </div>
              </div>
            </div>
          </div>`
            $("#clothe-list-promo").append(cardclothes)
        }
    }
    )
}



$(document).ready(function () {
    

    displayclothesmoresold(clothes)
    displayclothespromotion(clothes)
    
    $('#filter').change(function () {
    });
});