import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalContainer = document.getElementById('modal');

export const Modal = ({ onCloseModal, title, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  const handleEscPress = event => {
    if (event.key === 'Escape') {
      onCloseModal();
    }
  };

  const jsx = (
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" style={{ display: 'block' }} onClick={handleBackdropClick}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>

              <button type="button" className="btn-close" aria-label="Close" onClick={onCloseModal} />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
  return createPortal(jsx, modalContainer);
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleEscPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleEscPress);
//   }

//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onCloseModal();
//     }
//   };

//   handleEscPress = event => {
//     if (event.key === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const jsx = (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div className="modal fade show" style={{ display: 'block' }} onClick={this.handleBackdropClick}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{this.props.title}</h5>

//                 <button type="button" className="btn-close" aria-label="Close" onClick={this.props.onCloseModal} />
//               </div>

//               <div className="modal-body">{this.props.children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//     return createPortal(jsx, modalContainer);
//   }
// }

Modal.propType = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
