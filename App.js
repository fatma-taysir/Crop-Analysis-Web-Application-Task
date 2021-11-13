import React , { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { useState } from "react";
import data from "./data/mapdata.json";
import Search from './Search';
import test from './test';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmF0bWEtdGF5c2lyIiwiYSI6ImNrdnI2bDJ1ejhtZzUydXF3cnU5dWZoMjEifQ.8F3fPrpeBI15Fs_H19ahoA';




class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      lng: -74,
      lat:  40.7128,
      zoom: 10,
      style: 'mapbox://styles/mapbox/streets-v11'
    };
    this.mapContainer = React.createRef();
    
  }



  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    var map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    
    map.on('move', () => {
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });
     
    
    
    
     


      data.forEach((location) => {
        console.log(location)
        var marker = new mapboxgl.Marker()
                        .setLngLat(location.coordinates)
                        .setPopup(new mapboxgl.Popup({ offset: 30 })
                        .setHTML('<h4>' + location.city + '</h4>' + "Crop : "+location.crop))
                        .addTo(map)
                        ;
                        

    });
    
    

         
  }
  
 
  onChangeValue = () => {
    this.setState( {
      style : 'mapbox://styles/mapbox/satellite-v9'
    }) 
    console.log(this.state.lng); 
   
    
   };









  render() {
    const { lng, lat, zoom } = this.state;
    
    return (
     <div>
        
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <Search />
        <div className="menu">
        <input onChange={this.onChangeValue} id="satellite-v9" type="radio" name="rtoggle" value="satellite" checked="checked"/>
        <label for="satellite-v9">satellite</label>
        <input onChange={this.onChangeValue} id="light-v10" type="radio" name="rtoggle" value="light"/>
        <label for="light-v10">light</label>
        <input onChange={this.onChangeValue} id="dark-v10" type="radio" name="rtoggle" value="dark"/>
        <label for="dark-v10">dark</label>
        <input onChange={this.onChangeValue} id="streets-v11" type="radio" name="rtoggle" value="streets"/>
        <label for="streets-v11">streets</label>
        <input onChange={this.onChangeValue} id="outdoors-v11" type="radio" name="rtoggle" value="outdoors"/>
        <label for="outdoors-v11">outdoors</label>
        
        </div>
        
        <div ref={this.mapContainer} className="map-container" />
        
      </div> 

      
    
    
    );
  }
}
export default App;
