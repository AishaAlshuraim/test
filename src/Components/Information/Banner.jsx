import React from 'react';
import './Banner.scss'


 export default class Banner extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }
   render() {
    return (
      <section id="banner">
        <div className="inner">
          <h1>Golf</h1>
        </div>
      </section>
    );
  }
 }

 