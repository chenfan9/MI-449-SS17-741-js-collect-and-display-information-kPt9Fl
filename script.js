var firstNameInput = document.getElementById('firstname-input')
var lastNameInput = document.getElementById('lastname-input')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email-input')
var phoneInput = document.getElementById('phone-input')
var previewParagraph = document.getElementById('preview')
var htmlParagraph = document.getElementById('html')

var updateContent = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  var profile =
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

  previewParagraph.innerHTML = profile
  htmlParagraph.textContent = profile
}

firstNameInput.addEventListener('input', updateContent)
lastNameInput.addEventListener('input', updateContent)
descriptionInput.addEventListener('input', updateContent)
emailInput.addEventListener('input', updateContent)
phoneInput.addEventListener('input', updateContent)
