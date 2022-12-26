import { Component } from 'react';

const mobilePhones = [
  { title: 'iPhone', name: 'iphone' },
  { title: 'Android', name: 'android' },
];

export class Counter extends Component {
  //   constructor() {
  //     super()
  //     this.state = {counter:0}
  // }

  state = { counter: this.props.defaultValue, iphone: 0, android: 0 };

  handleVotePhone = e => {
    const { name } = e.target;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  handleIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  // onClick = (callback) => {
  //   const event = { event: 'click' };
  //   callback(event);
  // }

  render() {
    // console.log('this.props :>> ', this.props);
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          IPhone: {this.state.iphone}
        </p>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          Android: {this.state.android}
        </p>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {this.state.counter}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            name="iphone"
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
            onClick={this.handleVotePhone}
          >
            IPhone
          </button>
          <button
            className="btn p-3 btn-outline-light w-25 mx-2"
            name="android"
            type="button"
            onClick={this.handleVotePhone}
          >
            Android
          </button>

          <button className="btn p-3 btn-outline-light w-25 mx-2" type="button" onClick={this.handleIncrement}>
            Plus
          </button>
          <button className="btn p-3 btn-outline-light w-25 mx-2" type="button" onClick={this.handleDecrement}>
            Minus
          </button>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  defaultValue: 0,
};
// Counter.proptypes = {
//   defaultValue: PropTypes.number,isReqiered
// }

// export const Counter= ()=> {

//     return (
//       <div className="mb-5 p-5 text-white bg-dark rounded-3">
//         <h2 className="text-center">Counter</h2>
//         {mobilePhones.map(item => (
//           <p key={item.name} className="text-center my-5" style={{ fontSize: 80 }}>
//             {item.title} - {this.state[item.name]}
//           </p>
//         ))}

//         <div className="d-flex align-items-center justify-content-center w-100">
//           {mobilePhones.map(item => (
//             <button
//               key={item.name}
//               name={item.name}
//               type="button"
//               className="btn p-3 btn-outline-light w-25 mx-2"
//             >
//               {item.title}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   }
