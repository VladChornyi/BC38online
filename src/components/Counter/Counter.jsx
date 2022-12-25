import { Component } from 'react';

const mobilePhones = [
  { title: 'iPhone', name: 'iphone' },
  { title: 'Android', name: 'android' },
];
let counter = 0;

export const Counter = () => {
  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {counter}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Plus
        </button>

        <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
          Minus
        </button>
      </div>
    </div>
  );
};

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
