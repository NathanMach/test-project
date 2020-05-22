const express = require('express')
const app = express()
const bikeCtrl = require('./controllers/bikeList')
const selectedBikeCtrl= require('./controllers/selectedBike')
const SERVER_PORT = 3000

app.use(express.json())

app.get('/api/bike-list', bikeCtrl.getFourRandomBikes)

app.get('/api/bikes', selectedBikeCtrl.bikeList)
app.post('/api/bikes', selectedBikeCtrl.selectBike)
app.put('/api/bikes', selectedBikeCtrl.editBikesName)
app.delete('api/bikes', selectedBikeCtrl.deleteBikes)

app.listen(SERVER_PORT, () => 
console.log(`Ride or Die ${SERVER_PORT}`)
)