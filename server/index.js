const express = require('express')
const app = express()
const bikeCtrl = require('./controllers/bikeList')
const selectedBikeCtrl= require('./controllers/selectedBike')
const SERVER_PORT = 3001

app.use(express.json())

app.get('/api/bike-list', bikeCtrl.getFourRandomBikes)

app.get('/api/userbikes', selectedBikeCtrl.getSelectedBikes)
app.post('/api/userbikes', selectedBikeCtrl.selectBike)
app.put('/api/userbikes/:id', selectedBikeCtrl.editBikesName)
app.delete('/api/userbikes/:id', selectedBikeCtrl.deleteBikes)
console.log(selectedBikeCtrl.deleteBikes)

app.listen(SERVER_PORT, () => 
console.log(`Ride or Die ${SERVER_PORT}`)
)