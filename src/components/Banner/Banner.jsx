import { Timer } from 'components/Timer/Timer';
import { PureComponent } from 'react';
import { Component } from 'react';

import { IoCashOutline } from 'react-icons/io5';

import { Modal } from '../Modal';
import { BannerItem } from './BannerItem';
import { BannerModal } from './BannerModal';

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export const Banner = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const changeFocus = e => {};
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        console.log(phoneRef);
        phoneRef.current.focus();
      }
    });
  });
  useEffect(() => {});
  // state = { isOpenModal: false };
  const [isOpenModal, setIsOpenModal] = useState(false);

  export class Banner extends Component {
    state = { isOpenModal: false };

    getSnapshotBeforeUpdate(prevProps, prevState) {
      return 'Hello world';
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(snapshot);
    }

    handleOpenModal = () => {
      this.setState({ isOpenModal: true });
    };
    handleCloseModal = () => {
      this.setState({ isOpenModal: false });
    };

    handleToggleModal = () => {
      this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
    };

    render() {
      return (
        <>
          <div className="row mb-5 p-5 row-cols-2 bg-light">
            <BannerItem title="Featured title" text={TEXT} onOpenModal={this.handleToggleModal}>
              <IoCashOutline />
            </BannerItem>
          </div>

          {this.state.isOpenModal && (
            <Modal onCloseModal={this.handleToggleModal}>
              <Timer />
            </Modal>
          )}
          <Test test={{ obj: {} }} />
        </>
      );
    }
  }
};
