function DetalleProducto(id) {
  window.location.href = `detalle-ropa.html?id=${id}`;
}
function displayclothesmoresold(data) {
  $("#clothe-list").html('')
  data.forEach((clothes) => {
    if (clothes.categories[0] == "MAS VENDIDOS") {
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
                  <button type="button" class="btn btn-outline-primary " onclick="DetalleProducto(${clothes._id})">VER</button>
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
    if (clothes.categories[0] == "PROMOCION") {
      const cardclothes = `<div class="col">
            <div class="card">
              <img class="card-img-top" style="max-height:260px;" role="img" src="${clothes.imgprincipalUrl ? clothes.imgprincipalUrl : 'img/image-not-found.jpeg'}"
                alt="Imagen" />
              <div class="card-body">
                <p class="fs-3 card-title">${clothes.name}</p>
                <hr>
                <p class="fs-4">${clothes.subdescription}</p>
                <hr>
                <p class="fs-5" style="text-decoration:line-through">Precio Regular: &cent${clothes.price}</p>
                <hr>
                <h1 class="card-title text-end" style="font-weight:bold">&cent;${clothes.pricepromo}</h1>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn1 btn-outline-primary" onclick="DetalleProducto(${clothes._id})">VER</button>
                </div>
                
              </div>
            </div>
          </div>`
      $("#clothe-list-promo").append(cardclothes)
    }
  }
  )
}
function displayclothes(data) {
  $("#productos").html('')
  data.forEach((clothes) => {
    const colclothes = document.createElement("div")
    colclothes.classList.add("col")
    let pricePromoHtml = ''
    if (clothes.pricepromo) {
      pricePromoHtml = `<h1 class="card-title text-end"style="font-weight:bold">PROMO &cent;${clothes.pricepromo}</h1><hr>`
    }
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
                <h2 class="card-title text-end">&cent;${clothes.price}</h2>
                <hr>
                 ${pricePromoHtml}
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-primary " onclick="DetalleProducto(${clothes._id})">VER</button>
                </div>
                
              </div>
            </div>
          </div>`
    $("#productos").append(cardclothes)

  });
}
function displaycategories() {
  var select = $('#filter');
  var categories = [];
  $.each(clothes, function (index, clothe) {
    $.each(clothe.categories, function (index, category) {
      if ($.inArray(category, categories) === -1) {
        categories.push(category)
        //Añadir opción al select
        select.append(`<option value="${category}"> ${category} </option>`)
      }
    })
  })
}


$(document).ready(function () {


  displayclothesmoresold(clothes)
  displayclothespromotion(clothes)
  displayclothes(clothes)
  displaycategories()
  $('#filter').change(function () {
    var category = $(this).val()
    var filterclothes
    if (category === 'all') {
      filterclothes = clothes
    } else {
      filterclothes = clothes.filter((function (clothe) {
        return clothe.categories.includes(category)
      }))
    }
    displayclothes(filterclothes)
  });
});