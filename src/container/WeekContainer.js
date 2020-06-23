import React, { Component } from 'react';
import DayCard from "../component/DayCard";
import fetch from 'cross-fetch';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY
const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?id=1273865&units=imperial&APPID="+apiKey

class WeekContainer extends Component {
    state = {
        days: []
    }

    componentDidMount = () => {
        fetch(weatherURL)
        .then(res => {
            console.log(apiKey)
            console.log(res)
            if (res.status >= 400) {
              throw new Error("Bad response from server");
            }
            return res.json();
          })
    .then(data => {
        console.log("Data List Loaded", data.list)
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({days: dailyData})
      })
    }

    formatDayCards = () => {
        return this.state.days.map((day, index) => <DayCard day={day} key={index}/>)
      }

    render() {

        
        return(
            <div className="container">
                <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                <h3 className="display-5 text-muted">Coimbatore, India</h3>
                <div className="row justify-content-center">
                    <div>
                        {this.formatDayCards()}
                    </div>
                </div>
            </div>
        );
    }
}

export default WeekContainer;