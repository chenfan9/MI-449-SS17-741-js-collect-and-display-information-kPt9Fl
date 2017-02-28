var firstNameInput = document.getElementById('firstname-input')
var lastNameInput = document.getElementById('lastname-input')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email-input')
var phoneInput = document.getElementById('phone-input')
var previewParagraph = document.getElementById('preview')
var htmlParagraph = document.getElementById('html')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  previewParagraph.innerHTML =
    '<h1>Hi, my name is ' +
    firstName +
    ' ' +
    lastName +
    '!</h1>' +
    '<p>' +
    description +
    '</p>' +
    '<p>if you are interested in a date, you can email me at ' +
    '<a href="mailto:' +
    email +
    '" target="_blank">' +
    email +
    '</a>' +
    ' or give me a call at ' +
    '<a href="tel:' +
    phone +
    '" target="_blank">' +
    phone +
    '</a>' +
    '.</p>'
}

var updateHtml = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  htmlParagraph.textContent =
    '<h1>Hi, my name is ' +
    firstName +
    ' ' +
    lastName +
    '!</h1>' +
    '<p>' +
    description +
    '</p>' +
    '<p>if you are interested in a date, you can email me at ' +
    '<a href="mailto:' +
    email +
    '" target="_blank">' +
    email +
    '</a>' +
    ' or give me a call at ' +
    '<a href="tel:' +
    phone +
    '" target="_blank">' +
    phone +
    '</a>' +
    '.</p>'
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
descriptionInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)

firstNameInput.addEventListener('input', updateHtml)
lastNameInput.addEventListener('input', updateHtml)
descriptionInput.addEventListener('input', updateHtml)
emailInput.addEventListener('input', updateHtml)
phoneInput.addEventListener('input', updateHtml)
