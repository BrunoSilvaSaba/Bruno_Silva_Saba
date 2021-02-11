
function login() {
    
    const params = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    }

    let http = new XMLHttpRequest()
    let url = "http://mockbin.org/bin/c7453271-fd59-48a8-9317-75059a32a32a"
    http.open('POST', '/log')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params)) 
    http.onload = function() {
       
        alert(http.responseText)
    }
}