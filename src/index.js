import React, {Component} from 'react';
import  ReactDOM  from 'react-dom';
import App from './App'
import {ThemeProvider} from './Context'
class Out extends Component {
  render() {
    return (
      <div>
      <ThemeProvider> <App/></ThemeProvider>
     
      </div>

    )
  }
}
export default Out;

ReactDOM.render(<Out/>,document.getElementById('root')
);