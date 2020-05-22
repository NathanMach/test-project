import React from 'react'
import Bikes from './bike'

function UserList(props) {
    const bikeMap = props.selectedBike.map((bike) => (
        <bike
        key={bike.id}
        saveName={props.saveName}
        deleteBike={props.deleteBike}
        />
    ))
    return(
        <div>
            <h2>Garage</h2>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}></div>
        </div>
    )
}

export default UserList