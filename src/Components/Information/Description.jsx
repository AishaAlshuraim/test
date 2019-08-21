import React from 'react';
import './Description.scss'


 export default class Description extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
     };
   }

   
   render() {
     return (
      <section>
        <div className="content">
          <header>
            <h2>Riyadh Golf Courses</h2>
          </header>
          <p>Riyadh Golf Courses are located just 20 minutes from Riyadh, making it the perfect location for members, visitors, golfers, and non-golfers to enjoy a unique range of benefits and remarkable golfing facilities. RGC has a relaxing comfortable environment whether you are playing golf, having a bite to eat, or using our sports facilities. You can enjoy the golf course challenge, the practice facilities, sports garden and clubhouse. The excellent golf course and RGC’s many other superb facilities are an oasis in the Saudi Arabian desert so please explore the website, book a tee time or just come to visit our “Pearl in the Desert”.</p>
        </div>
      </section>
     );
   }
 }





 