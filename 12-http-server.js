const http = require("http")

const server = http.createServer((req ,res)=>{
    if (req.url === '/') {
        res.end("welcome to Home page")
    }
   if (req.url === '/about') {
     res.end("welcome to About page")
   }
//    res.end("404")
   res.end(`<h1>Oos!!</h1> <p> we did not find the page </p> <a href="/"> back home </a>`)
})


server.listen(5000)


