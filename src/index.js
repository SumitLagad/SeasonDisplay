import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

/* // import the react and reactDOM lib



// create react componenet
  // function based component
const App = () => {
    const name = { text : 'Sumit'};
    const style ={ backgroundColor: 'yellow', border: '1px solid red' } ;
    return (
    <div className='myClass' style={style}>Hi there {name.text} !</div>
    );
 };


// take react component and show it on screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

*/

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {lat: null, errMessage: null}
  // }

  // we can define state by other way also

  state = {lat: null, errMessage: null};

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({lat:position.coords.latitude});
      },
      error => {
        this.setState({errMessage:error.message});
        console.log(error);
      }
    );
  }

  getSeason() {
    if(this.state.lat !== null && this.state.errMessage === null) {
      return <div> <SeasonDisplay lat={this.state.lat}/></div>;
    }

    if(this.state.lat === null && this.state.errMessage !== null) {
      return <div> Error: {this.state.errMessage} </div>;
    }
    
    return <div> <Spinner message='Please allow location ! !'/></div>

  }

  

  render() {
    return <div>{this.getSeason()}</div>
  }
}

ReactDOM.render(<App />,document.querySelector('#root'))
