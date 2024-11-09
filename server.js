var http = require('http')

http.createServer( serverPurpose ).listen(3000)

function serverPurpose(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})

    let radius = 10
    let area= 3.1416 * (radius*radius)

    res.write(`<h1>The radius is ${radius}</h1>`)
    res.write(`<h1>The area is ${area}</h1>`)
    res.end(`<h2>Good bye</h2>`)
}