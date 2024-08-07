// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            alert("tu mensaje ha sido enviado")
            form.setAttribute('action','https://formsubmit.co/d6a7aaa38713601e79006e37b7bda120')
            form.setAttribute('method', 'POST');
        }
  
        form.classList.add('was-validated')
       
      }, false)
    })
  })()