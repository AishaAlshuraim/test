import React from 'react';
import './Information.scss'

import Banner from './Information/Banner';
import Details from './Information/Details';
import Images from './Information/Images';
import Description from './Information/Description';
import * as parData from  "./HomePage/CityDB.json";

 export default class Information extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       Info : undefined,

     };
   }
 

   render() {
     return (
       <div>
        <Banner/>
          <div className="Image">
           <Images/>
          </div>
          <div className="Deta">
           <Details/>
          </div>
          <div className="Des">
           <Description/>
          </div>


       </div>

     );
   }

 }
