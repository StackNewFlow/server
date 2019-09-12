const app = require('./src/app'),
    {DB_URI} = require('./src/config/index'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000

mongoose.connect(DB_URI, {
    useNewUrlParser: true
})

app.listen(port, function () {
    console.log(`Listening on port: ${port}`)
})