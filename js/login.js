document
    .getElementById('formulario-Log-In')
    .addEventListener('submit',function (){
        //event.preventDefault();//descomentar para ver resultados en consola
        console.log('usuario: ' + 
        event
            .target[0]
            .value
            );

        console.log('contraseña: ' + 
        event
            .target[1]
            .value
            );
    });

    (() => {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()