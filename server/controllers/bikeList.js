const bikes = require('./data')

module.exports = {
    getFourRandomBikes: (req, res) => {
        const rand1 = Math.floor(Math.random() * 5)
        const rand2 = Math.floor(Math.random() * 5)
        const rand3 = Math.floor(Math.random() * 5)
        const rand4 = Math.floor(Math.random() * 5)
        const responseArr = [
         bikes[rand1],
         bikes[rand2],
         bikes[rand3],
         bikes[rand4],
        ]
        res.status(200).send(responseArr)
    }
}   