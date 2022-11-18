import React from 'react';

class GoogleMaps extends React.Component {

  constructor(){
    super();
    this.currentMarkers = [];
  }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: 39.8282, lng: -98.5795 },
      zoom: 4
    });

  }
  //Put markers in based on state
  loadMarkers(){
    let googleMap = this.googleMap;
    this.currentMarkers.forEach((marker) => {
      marker.setMap(null);
    });
    this.currentMarkers = [];
    let currentMarkers = this.currentMarkers;

  this.props.filteredStadiumList.forEach((loc) => {
    // console.log(loc);
    var marker = new window.google.maps.Marker({
      position: {lat:parseFloat(loc.latitude), lng:parseFloat(loc.longitude) },
      map: googleMap,
      title: 'Jesus'

    });
    currentMarkers.push(marker);
    //  marker.setMap(this.map);

  });

  console.log(this.props);
}



  render() {
    this.loadMarkers();

    return (
      <div>
        <h1>church finder</h1>

        <div ref={(map) => { this.map = map; }} style={{width: '100%', height: '400px'}}></div>
        <button onClick={this.props.clearMarkers}>clear markers</button>


      </div>
    );
  }

}

export default GoogleMaps;