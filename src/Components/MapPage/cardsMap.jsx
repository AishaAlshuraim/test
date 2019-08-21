import React, { Component } from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import  './CardsMap.scss';

import * as parData from  "../HomePage/CityDB.json";
console.log(parData.default.cities[0].centers[0].sportKind);

export default class CardsMap extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }





  render() {
    return (
      <div>
        {parData.default.cities[0].centers.map(park => (
          <div className="card">
          <RecipeReviewCard
             name={park.centerName}
              image={park.images[0]}
              kind={park.sportKind}/>
        </div>
        ))}

        </div>
    );
  }

}
