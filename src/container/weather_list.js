import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const NAME = cityData.city.name;
    const TEMPS = cityData.list.map(weather => weather.main.temp);
    const PRESSURE = cityData.list.map(weather => weather.main.pressure);
    const HUMIDITY = cityData.list.map(weather => weather.main.humidity);
    const LON = cityData.city.coord.lon;
    const LAT = cityData.city.coord.lat;

    return (
      <tr key={NAME}>
        <td><GoogleMap lon={LON} lat={LAT} /></td>
        <td><Chart data={TEMPS} color="orange" units="K"/></td>
        <td><Chart data={PRESSURE} color="red" units="hPa" /></td>
        <td><Chart data={HUMIDITY} color="grey" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

//LINK TO REDUCER TO GET DATA
function mapStateToProps({ weather }) {
  return { weather };
}

/* Is the same 
function mapStateToProps(state) {
  return { weather: state.weather };
}
*/

export default connect(mapStateToProps)(WeatherList);
