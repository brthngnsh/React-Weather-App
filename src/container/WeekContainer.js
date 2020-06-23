import React, { Component } from 'react';
import { apiConfig } from "../apiKey/apikey";

class WeekContainer extends Component {
    state = {
        fullData: [],
        dailyData: []
    }

    componentDidMount = () => {
        const weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?id=1273865&units=imperial&APPID=${apiConfig.owmKey}'
        
    }

    render() {

        
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export default WeekContainer;