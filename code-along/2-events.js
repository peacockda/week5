// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener

document.addEventListener('DOMContentLoaded', function(event){
    // alert('The page is loadz0r!')
    let outputElement = document.querySelector('.output')

    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton.addEventListener('click', function(event){
        outputElement.insertAdjacentHTML('beforeend', '<p>Click Me! was clicked.</p>')
    })

    let googleLink = document.querySelector('.google-link')
    googleLink.addEventListener('click', function(event){
        event.preventDefault()
        outputElement.insertAdjacentHTML('beforeend', `Google!!!1`)
    })

    let nameInput = document.querySelector('#firstName')
    nameInput.addEventListener('keyup', function(event){
        let greetElement = document.querySelector('#greet')
        if (nameInput.value.length > 0){
            greetElement.innerHTML = `Hello, ${nameInput.value}!`
        } else {
            greetElement.innerHTML = ``
        }
    })
})

