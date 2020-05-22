import React, {Component} from 'react';
import UserList from './Components/userList'
import Finder from './Components/finder'
import Header from './Components/Header'
import './App.css';
import axios from 'axios'


class App extends Component{
  constructor(){
    super()
    this.state = {
      randomBikes: []
    }

    this.bikeSelect = this.bikeSelect.bind(this)
    this.saveName = this.saveName.bind(this)
    this.deleteBike = this.deleteBike.bind(this)
  }
  componentDidMount() {
    axios.get('/api/bike-list').then((res) => {
      this.setState({
        randomBikes: res.data
      })
    })
  }

  bikeSelect(name, image) {
    const body = { name, image }
    axios.post('/api/userbikes', body).then((res) => {
      this.setState({
        bikeSelect: res.data,
      })
    })
  }
  
  saveName(id, name) {
    const body = { name }
    axios.put(`/api/userbikes/${id}`, body).then((res) => {
      this.setState({
        bikeSelect: res.data,
      })
    })
  }
  deleteBike(id){
    axios.delete(`/api/userbikes/${id}`).then((res) => {
      this.setState({
      bikeSelect: res.data,
      })
    })
  }

  render(){
    console.log(this.state.randomBikes)
    return (
      <div className= 'App'>
        <Header />
        <Finder bikeSelect={this.bikeSelect} />
        <UserList
        bikeSelect={this.state.bikeSelect}
        saveName={this.saveName}
        deleteBike={this.deleteBike}
        />
      </div>
    )
  }
}


export default App;
