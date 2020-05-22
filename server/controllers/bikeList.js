const axios = require('axios')

module.exports = {
    getFourRandomBikes: (req, res) => {
        const rand1 = Math.ceil(Math.random() * 6)
        const rand2 = Math.ceil(Math.random() * 6)
        const rand3 = Math.ceil(Math.random() * 6)
        const rand4 = Math.ceil(Math.random() * 6)

        const baseUrl = './data/data'

        axios.get(baseUrl + rand1).then((response1) => {
            bikeListArray.push(response1.data)

            axios.get(baseUrl + rand2).then((response2) => {
                bikeListArray.push(response2.data)

                axios.get(baseUrl + rand3).then((response3) => {
                    bikeListArray.push(response3.data)

                    axios.get(baseUrl + rand4).then((response4) => {
                        bikeListArray.push(response4.data)

                        res.status(200).send(bikeListArray)
                      })
                 })
            })
        })
     }
}    