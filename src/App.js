import React, {Component} from 'react';
import data from './data/data';
import bike from './Components/bike'
import userList from './Components/userList'
import Finder from './Components/finder'
import './App.css';
import axios from 'axios'


class App extends Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
    this.bike = this.bike.bind(this)
    this.saveName = this.saveName.bind(this)
    this.deleteBike = this.deleteBike.bind(this)
  }
  componentDidMount() {
    axios.get('/api/data').then((res) => {
      this.ListeningStateChangedEvent({
        userList: res.data
      })
    })
  }

  bikeSelect(name, image) {
    const body = { name, image }
    axios.post('/api/data', body).then((res) => {
      this.setState({
        bikeSelect: res.data,
      })
    })
  }
  
  saveName(id, newName) {
    const body = { newName }
    axios.put(`/api/data/${id}`, body).then((res) => {
      this.setState({
        bikeSelect: res.data,
      })
    })
  }
  deleteBike(id){
    axios.delete(`/api/data/${id}`).then((res) => {
      this.setState({
      bikeSelect: res.data,
      })
    })
  }

  render(){
    return (
      <div className= 'App'>
        <Header />
        <Finder bikeSelect={this.bikeSelect} />
        <userList
        bikeSelect={this.state.bikeSelect}
        saveName={this.saveName}
        deleteBike={this.deleteBike}
        />
      </div>
    )
  }
}


export default App;
