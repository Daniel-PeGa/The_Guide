import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GoogleMaps from './GoogleMapsChange.js'


class App extends Component {

  constructor() {
    super();

    this.state = {
      churchlist: [],
      filteredchurchlist: [],
      inputValue: ''
    }
  }

  clearMarkers(){
    this.setState({
      churchlist: this.state.churchlist,
      filteredchurchlist: [],
      inputValue: ''
    });
  }

  componentDidMount() {
    //using fetch:
    fetch('')
      .then((response)=> response.json())
      .then((data) => {
        this.setState({
          churchlist: a //working on it
        })
      });

    // $.ajax({
    
    // })
    // .done((data) => {
    //   this.setState({
    //     churchlist:  //working on it //data, woo!
    //   })
    //   console.log("data?", data);
    // });
  }

  handleChange(evt) {

    this.setState({
      inputValue: evt.target.value,
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      console.log(this.state.inputValue);
      const filteredList = this.state.churchlist.filter((church) => {
        return church.state.toLowerCase().trim() == this.state.inputValue.toLowerCase();
      });
      // for (let i = 0; i < this.state.churchlist.length; i++) {
      //   let church = this.state.churchlist[i];
      //   if (church.state.indexOf(this.state.inputValue) > -1) {
      //     filteredList.push(church);
      //   }
      // }
      this.setState({
        inputValue: '',
        filteredchurchlist: filteredList
      });

      }
    }





  render() {

    console.log('filtered list in render', this.state.filteredchurchlist);
    let list;
    if (this.state.filteredchurchlist.length > 0) {
      list = this.state.filteredchurchlist.map((church) => {
        return <tr key={church.latitude}>
            <td  className="name">{church.name}</td>
            <td  className="city-name">{church.city}</td>
            <td  className="state-name">{church.state}</td>
            <td  className="denomination">{church.team}</td>
            <td  className="dates">{church.opened}</td>
            <td  className="capass">{church.seatingCapacity}</td>
        </tr>
      });
    }

    return (
      <div className="App">
        <input placeholder="State"
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          value={this.state.inputValue} />

          <div className="table-div">
        <table className="church-list">
          <thead>
            <tr>
              <th className="name">Name</th>
              <th className="city">City</th>
              <th className="state">State</th>
              <th className="denomination">Team</th>
              <th className="opened">Opened</th>
              <th className="cap">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>

        </div>
        <GoogleMaps filteredchurchlist={this.state.filteredchurchlist} clearMarkers={() => {this.clearMarkers()}} />

      </div>
    );
  }
}

export default App;