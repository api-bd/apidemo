module.exports = function (express, app) {
    let router = express.Router()
    router.post('/', (req, res) => {
        try {
            let response = {}
            response.success = "1"
            response.message = "Submitted to SMSC"
            response.msgid = "14590961"
            response.jobid = "587080"
            response.msisdn = req.body.receiver
            console.log(req.body.receiver + " => " + req.body.message)
            res.send(JSON.stringify(response))

        } catch (e) {
            console.log(e)
        }
    })
    app.use('/sendsms', router)
}