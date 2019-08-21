import React from 'react';
import './HeaderImage.scss';
import axios from 'axios';
class HeaderImage extends React.Component {
  state = {
    img:  undefined
  }
  componentDidMount() {
    // axios.get(`https://api.unsplash.com/photos/random/?client_id=c4268fc7a9c8c92823adc3e91336ba33b2eb873fa71c3a79ca93a12fa0d53887`)
     axios.get(`https://source.unsplash.com/1600x900/?sport/?client_id=c4268fc7a9c8c92823adc3e91336ba33b2eb873fa71c3a79ca93a12fa0d53887`)

     .then(response => {
                 console.log(response);

        this.setState({
          
    img: response.request.responseURL
      });
      })
     .catch(error => {
       console.log(error)
     })
 
  }
    render() {
return (
   
      <div className="container">
      <header id="header"
      style ={ { backgroundImage: "url("+this.state.img+")" } }>
        <div id="header-content" />
        <h1 className="centered">
          Find Where To Play!
        </h1>
      </header>
      </div>
  );
}
}
export default HeaderImage;
