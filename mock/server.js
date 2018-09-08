const fs = require('fs')
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const Mock = require('mockjs')
const template = require('./router/template')

var Random = Mock.Random

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

function getData (fileName) {
  let data = fs.readFileSync(path.join(__dirname, 'data', fileName + '.json'))
  return JSON.parse(data.toString())
}

setRouter(template)
/**
 * 可增添目录
 */
function setRouter(urls){
  urls.forEach(obj => {
    var folder = obj.folder
    obj.urlsGet && obj.urlsGet.forEach(url => {
      let name = url.match(/\w+$/)[0]
      if (!name) return
      server.get(url, (req, res) => {
        setTimeout(() => {
          res.send(getData(folder + '/' + name))
        }, 1000)
      })
    })
    obj.urlsPost && obj.urlsPost.forEach(url => {
      let name = url.match(/\w+$/)[0]
      if (!name) return
      server.post(url, (req, res) => {
        setTimeout(() => {
          res.send(getData(folder + '/' + name))
        }, 1000)
      })
    })
  })
}


// Add custom routes before JSON Server router
// Use default router
// server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running at http://localhost:3000')
})
