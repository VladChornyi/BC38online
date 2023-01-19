import { useCallback } from 'react';
import { memo, useMemo, useState, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterSelector, getUserEmail } from 'redux/counter/counter.selectors';
import { decrementAction, incrementAction } from 'redux/counter/counter.slice';

const mobilePhones = [
  { title: 'iPhone', name: 'iphone' },
  { title: 'Android', name: 'android' },
];

const Test = memo(({ test }) => {
  return (
    <button type="button" className="btn p-3 btn-outline-light w-25 mx-2" onClick={test}>
      button
    </button>
  );
});

export const Counter = ({ defaultValue }) => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterSelector);

  const [iphone, setIphone] = useState(0);
  const [android, setAndroid] = useState(0);

  const handleVotePhone = e => {
    const { name } = e.target;
    switch (name) {
      case 'iphone':
        setIphone(prev => prev + 1);
        break;
      case 'android':
        setAndroid(prev => prev + 1);
        break;
      default:
        throw new Error('something went wrong');
    }
  };

  const handleIncrement = () => {
    dispatch(incrementAction(10));
    // dispatch({ type: INCREMENT, payload: 1 });
    // setCounter(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    dispatch(decrementAction(10));
  };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      {/* <p className="text-center my-5" style={{ fontSize: 80 }}>
        IPhone: {iphone}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {android}
      </p> */}
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {counter}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        {/* <button name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" type="button" onClick={handleVotePhone}>
          IPhone
        </button>
        <button className="btn p-3 btn-outline-light w-25 mx-2" name="android" type="button" onClick={handleVotePhone}>
          Android
        </button> */}

        <button className="btn p-3 btn-outline-light w-25 mx-2" type="button" onClick={handleIncrement}>
          Plus
        </button>
        <button className="btn p-3 btn-outline-light w-25 mx-2" type="button" onClick={handleDecrement}>
          Minus
        </button>
      </div>
    </div>
  );
};

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
