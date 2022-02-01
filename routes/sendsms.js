module.exports = function (express, app) {
    let router = express.Router()
    router.post('/', (req, res) => {
        try {
            let mobile = req.body.receiver
            let message = req.body.message
            res.send(mobile + " => " + message)
            console.log(mobile + " => " + message)
        } catch (e) {
            console.log(e)
        }
    })
    app.use('/sendsms', router)
}