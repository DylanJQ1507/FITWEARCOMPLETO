function crearform(input) {

    if (input.value === "envio") {
        const formbody = ` <div class="card container-fluid overflow-x-auto">
        <p class="fs-4">Formulario de envio</p>
        <div class="container border border-primary-subtle ">
          <form
            class="row  justify-content-md-center row row-cols-1 row-cols-sm-2 row-cols-md-1 g-2 text-start needs-validation"
            novalidate>
            <div class="col-md-6  text-center">
              <label for="validationCustom01" class="form-label fs-5">Provincia</label>
              <select class="form-select" id="provincia" onchange="cargarcantones(event)" aria-label="Default select example">
                
              </select>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                selecciona una opcion
              </div>
            </div>
            <div class="col-md-6  text-center">
              <label for="validationCustom01" class="form-label fs-5">Canton</label>
              <select class="form-select" id="canton" onchange="cargarDistritos(event)" aria-label="Default select example">

              </select>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                selecciona una opcion
              </div>
            </div>
            <div class="col-md-6  text-center">
              <label for="validationCustom01" class="form-label fs-5">Distrito</label>
              <select class="form-select" id="distrito" aria-label="Default select example">

              </select>
              <div class="valid-feedback">
                Looks good!
              </div>
              <div class="invalid-feedback">
                selecciona una opcion
              </div>
            </div>
            <div class="form-floating col-md-8 offset-md-1">
                        <textarea class="form-control" name="comments" placeholder="Leave a comment here"
                            id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Direccion exacta</label>
            </div>
            
          </form>
        </div>
      </div>
`
        $('.formenvio').append(formbody)
        loadProvincias()
    } else {
        $('.formenvio').html('')
    }

}
var provincia
function loadProvincias() {
    $.ajax({
        dataType: "json",
        url: "https://ubicaciones.paginasweb.cr/provincias.json",
        data: {},
        success: function (data) {
            var provinciaSelect = $('#provincia');
            for (key in data) {
                provinciaSelect.append("<option value='" + key + "'>" + data[key] + "</option>");
            }

        }
    });
}
function cargarcantones(event) {
    var selectedValue = event.target.value;
    provincia = selectedValue
    if (selectedValue) {
        $.ajax({
            dataType: "json",
            url: "https://ubicaciones.paginasweb.cr/provincia/" + selectedValue + "/cantones.json",
            data: {},
            success: function (data) {
                var html = $('#canton');
                html.empty()
                for (key in data) {
                    html.append("<option value='" + key + "'>" + data[key] + "</option>");
                }

            }
        });
    }

}
function cargarDistritos(event) {

    var selectedCanton = event.target.value;

    if (provincia && selectedCanton) {
        $.ajax({
            dataType: "json",
            url: "https://ubicaciones.paginasweb.cr/provincia/" + provincia + "/canton/" + selectedCanton + "/distritos.json",
            data: {},
            success: function (data) {
                var html = $('#distrito');
                html.empty()
                for (key in data) {
                    html.append("<option value='" + key + "'>" + data[key] + "</option>");
                }

            }
        });
    }

}







