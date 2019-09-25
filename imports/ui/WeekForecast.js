import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";
 
class WeekForecast extends Component {

  renderDays() {
    return this.props.forecast.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
  }

  render() {
    return (
      <div className="col-12">
        <h4 className="d-block text-center gb-light pt-1">week { this.props.number }</h4>
        <div className="row justify-content-around">
          {this.renderDays()}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch(),
  };
})(WeekForecast);
