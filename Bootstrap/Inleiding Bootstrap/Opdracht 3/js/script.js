const success = document.getElementById('failure')
const successAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-success alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  success.append(wrapper)
}

const failure = document.getElementById('failure')
const failureAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-warning alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  failure.append(wrapper)
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      if (!form.checkValidity()) {
        failureAlert('Let op! U heeft niet alle velden ingevuld.')
        event.stopPropagation()
      } else {
        successAlert('Uw registratie is voltooid.')
      }

      form.classList.add('was-validated')
    }, false)
  })
})()