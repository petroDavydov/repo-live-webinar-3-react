import './App.css';
import { Component } from 'react';
import { Counter } from './components/Counter/Counter';

// function App() {
//   return (
// <div>
//   <h1>Hello world</h1>
// </div>
//   );
// }

class App extends Component {
  state = {
    counter: 0,
  };

  hendleDecrement = () => {
    // this.setState({
    //   counter: this.state.counter - 1,
    // });

    this.setState(prevState => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };
  hendleIncrement = () => {
    //    this.setState({
    //   counter: this.state.counter + 1,
    // });
    this.setState(prevState => {
      return {
        counter: prevState.counter + 2,
      };
    });
  };

  render() {
    const { counter } = this.state;
    const { hendleIncrement, hendleDecrement } = this;
    return (
      <div className="App">
        <h1 className="app-title">C O U N T E R</h1>
        <Counter
          counter={counter}
          hendleDecrement={hendleDecrement}
          hendleIncrement={hendleIncrement}
        />
      </div>
    );
  }
}
export default App;
