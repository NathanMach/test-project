import React, {Component} from 'react'
import axios from 'axios'

class Finder extends Component {
    constructor() {
        super()
        this.state = {
            randomBike:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('/api/bikes').then((res) => {
            this.setState({
                randomBike: res.data
            })
        })
    }

    render() {
        const bikeMap = this.state.randomBike.map((bike) => (
       <bike
        key={bike.id}
        selectBike={this.props.selectBike}
        data={bike}
        refreshFn={this.componentDidMount}
        />
    ))

        return (
            <div style={{ displaya: 'flex', justifyContent: 'center'}}>
                {bikeMap}
            </div>  
        )
    }
}            

export default Finder