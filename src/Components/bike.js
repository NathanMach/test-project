import React, { Component } from 'react'

class Bike extends Component {
    constructor(props) {
        super(props)
        this.state= {
            bikeClicked: false,
            
        }
    }
    checkBike() {
        const { data } = this.props
        this.props.selectBike(data.name, data.model, data.year)
        this.props.refreshFn()
    }

    render() {
        return (
            <div>
                <img
                src={this.props.data.bike}
                alt={this.props.data.name}
                onClick={() => this.checkBike()}
                />
                <p>{this.props.data.name}</p>
            </div>
        )
    }
}

export default Bike