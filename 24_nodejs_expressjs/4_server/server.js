const http = require('http')

const server = http.createServer((request, response) => {
	// console.log('I hear you, thanks for the request.') // will print to servers console
	
	console.log('headers:', request.headers)
	console.log('method:', request.method)
	console.log('url:', request.url)

	// response.setHeader('Content-Type', 'text/html')
	// response.end('<h1>Hellooo</h1>')

	const data = {
		name: "John",
		hobby: "skating"
	}
	response.setHeader('Content-Type', 'application/json')
	response.end(JSON.stringify(data))
})

const portNum = 3000
server.listen(portNum)