import React, { Component } from 'react';
import '../styles/DayForecast.css';

export default class DayForecast extends Component {
  
  getImage() {
    let image = '';
      switch (this.props.report.status) {
        case 'Mostly sunny':
          image = 'mostly sun.png';
          break;
        case 'Cloudy':
          image = 'cloudy.png';
          break;
        case 'Foggy':
          image = 'fog.png';
          break;
        case 'Sunny':
          image = 'sun.png';
          break;
        case 'Very Sunny':
          image = 'sun.png';
          break;
        case 'Rainy':
          image = 'rain.png';
          break;
        case 'Snowie':
          image = 'snow.png';
          break;
      }
    return image;
  }

  render() {
    return (
        <div className="card bg-white">
          <img className="card-img" src={this.getImage()} />
          <div className="card-img-overlay">
            <h5 className="card-title text-right">{this.props.report.dayName}</h5>
          </div>
          <div className="card-body">
            <p className="text-bold text-center">{this.props.report.minTemp} °C - {this.props.report.maxTemp} °C</p>
            <p className="text-muted text-right small">{this.props.report.status}</p>
          </div>
        </div>
    );
  }
}