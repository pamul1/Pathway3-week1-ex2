var http = require('http')
var url = require('url')


http.createServer( serverPurpose ).listen(3010)

function serverPurpose(req, res){
    
    // Exercise 3 : Division Calculator
    // Objective: Create a Route that divide two numbers.
    // Route: /divide?a=100&b=50
    // Expected Output: The division of 100 and 50 is 2.

    let urlObject =  url.parse(req.url, true)
    let parameters = urlObject.query 
    console.log(parameters)

    console.log(parameters.num1)

    console.log(parameters.num2)
    let divide = parseInt(parameters.num1)/parseInt(parameters.num2)
    console.log(divide)

    if (urlObject.pathname === '/divide'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let a = parseInt(parameters.num1)
        let b = parseInt(parameters.num2) 
        let divide = a / b
        let response = `The product is ${divide}`
        res.write(response)

    }else if (urlObject.pathname === '/substract'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let a = parseInt(parameters.num1)
        let b = parseInt(parameters.num2)
        let substract = a - b
        let response = `The result is ${substract}`
        res.write(response)

    } else if (urlObject.pathname === '/multiply'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let a = parseInt(parameters.num1)
        let b = parseInt(parameters.num2) 
        let multiply = a * b
        let response = `The product is ${multiply}`
        res.write(response)
    }
    res.end()
}