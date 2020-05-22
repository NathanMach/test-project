const bike = [{ id: 0, name: 'bike 1', image: 'image'}]
let id = 1

module.exports = {
    getSelectedBikes: (req, res) => {
        res.status(200).send(bikes)
    },
    selectBike: (req, res) => {
        const { name, image } = req.body

        const newBike = { id, name, image }

        bike.push(newBike)

        id++

        res.status(200).send(bikes)
    },
    editBikesName: (req, res) => {
        const { bike_id } = req.params
        const { newName }= req.body
        
        const index = bike.findIndex((element) => element.id === +bike_id)

        if (index === -1) {
            return res.status(404).send('Bike not found')
        }

        bike[index].name = newBike

        res.status(200).send(bike)
    },
    deleteBikes: (req, res) => {
        const { bike_id } = req.params

        const index = bike.findIndex((element) => element.id === +bike_id)

        if (index === -1) {
            return res.status(404).send('Bike not found')
        }

        bike.splice(index, 1)

        res.status(200).send(bike)
    },
}