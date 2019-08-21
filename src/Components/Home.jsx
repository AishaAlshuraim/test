import React from 'react';
import './Home.scss'
import Cities from './HomePage/Cities'
import HeaderImage from './HomePage/HeaderImage'
import * as city from './HomePage/CityDB.json';
// import './HomePage/HeaderImage';
import MapGallery from './mapGallery';
import {Link} from 'react-router-dom'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
      return (
        <div> 
     <HeaderImage/>
     <div className="cities">
       <Cities city={city} />
       </div>
         </div> 
         );
  }

}
