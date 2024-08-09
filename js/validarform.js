// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      //regex para verificar los campos
      var regex = /^[^\d]*$/
      var regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      //obtener los valores de todos los campos
      var name = form.querySelector('#name')
      var lastName = form.querySelector('#lastname')
      var email = form.querySelector('#email')
      var datebirth = form.querySelector('#datebirth')
      var genero = form.querySelector('#genero')
      var tema=form.querySelector('#tema')
      if (!form.checkValidity() ) {
        if (!regex.test(name.value) || name.value=="") {
          name.classList.remove("is-valid")
          name.classList.add("is-invalid")
        } else {
          name.classList.remove("is-invalid")
          name.classList.add("is-valid")
        }
        if (!regex.test(lastName.value)|| lastName.value=="") {
          lastName.classList.remove("is-valid")
          lastName.classList.add("is-invalid")
        } else {
          lastName.classList.remove("is-invalid")
          lastName.classList.add("is-valid")
        }
        if (!regexmail.test(email.value)) {
          email.classList.remove("is-valid")
          email.classList.add("is-invalid")
        } else {
          email.classList.remove("is-invalid")
          email.classList.add("is-valid")
        } if (datebirth.value == "") {
          datebirth.classList.remove("is-valid")
          datebirth.classList.add("is-invalid")
        } else {
          datebirth.classList.remove("is-invalid")
          datebirth.classList.add("is-valid")
        } if (genero.value =="0" ) {
          
          genero.classList.remove("is-valid")
          genero.classList.add("is-invalid")
        } else {
          genero.classList.remove("is-invalid")
          genero.classList.add("is-valid")
        }
        if (tema.value == 0) {
          tema.classList.remove("is-valid")
          tema.classList.add("is-invalid")
        } else {
          tema.classList.remove("is-invalid")
          tema.classList.add("is-valid")
        }
        event.preventDefault()
        event.stopPropagation()
      } 
        alert("listo")
      form.action='https://formsubmit.co/d6a7aaa38713601e79006e37b7bda120'
      form.method='POST';
        form.reset()
      
      


    }, false)
  })
})()