import React, { Component } from 'react';
var moment = require('moment');
import { Card,CardImg,CardTitle, CardBody, CardText, CardImgOverlay } from 'reactstrap';

class DayCard extends Component {
    // Props: day, key(index)
  
    render() {
      let newDate = new Date();
      const weekday = this.props.day.dt * 1000
      newDate.setTime(weekday)
  
      const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x red"
  
      // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32
  
  
      return (
        <Card>
            <CardImg width="100%" src={imgURL} alt={Math.round(this.props.day.main.temp)} />
            <CardImgOverlay><CardTitle>{moment(newDate).format('dddd MMMM Do, h:mm a')}</CardTitle></CardImgOverlay>
            <CardBody>
            
            <CardTitle>{Math.round(this.props.day.main.temp)} °F</CardTitle>
            <CardText>{this.props.day.weather[0].description}</CardText>
            </CardBody>
        </Card>
      )
    }
  }

export default DayCard;