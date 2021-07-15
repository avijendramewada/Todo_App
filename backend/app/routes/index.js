const initRoutes = app => {
  app.get('/_ping', (req, res) => {
    res.sendStatus(200)
  })
}

export default initRoutes
