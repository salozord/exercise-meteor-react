import React, { Component } from "react";
import '../styles/MonthForecast.css';

import WeekForecast from "./WeekForecast";
 
class MonthForecast extends Component {

  renderWeeks() {
    return (
        <div className="row">
            <WeekForecast key="1" number="1"/>
            <WeekForecast key="2" number="2"/>
            <WeekForecast key="3" number="3"/>
            <WeekForecast key="4" number="4"/>
        </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="nav navbar-nav bg-white text-center">
          <h1>Week Forecasts - Random Month</h1>
        </header>
        <div className="row rest">
            {this.renderWeeks()}
        </div>
      </div>
    );
  }
}

export default MonthForecast;
