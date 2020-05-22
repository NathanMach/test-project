import React from 'react'
import Bike from './bike'


function UserList(props) {
    const bikeMap = props.bikeSelect((bike) => (
        <Bike
        key={bike.id}
        saveName={props.saveName}
        deleteBike={props.deleteBike}
        />
    ))
    return(
        <div>
            <h2>Garage</h2>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}></div>
            {bikeMap}
            <button onClick={() => this.props.deleteBike(this.props.data.id)}>Delete</button>
        </div>
    )
}

export default UserList