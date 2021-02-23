export default function posts(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    posts: [
      {id: 1, title: 'First posts', body: 'lorem10'},
      {id: 2, title: 'Second posts', body: 'lorem10'},
    ]
  }))
}