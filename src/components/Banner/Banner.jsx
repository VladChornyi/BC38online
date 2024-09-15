import { Timer } from 'components/Timer/Timer';
import { useRef } from 'react';
import { PureComponent, useState } from 'react';
import { useEffect } from 'react';
import { Component } from 'react';

import { IoCashOutline } from 'react-icons/io5';

import { Modal } from '../Modal';
import { BannerItem } from './BannerItem';
import { BannerModal } from './BannerModal';

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export const Banner = () => {
  useEffect(() => {});
  // state = { isOpenModal: false };
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleToggleModal = () => {
    setIsOpenModal(prevIsOpenModal => !prevIsOpenModal);
  };

  return (
    <>
      <div className="row mb-5 p-5 row-cols-2 bg-light">
        <BannerItem title="Featured title" text={TEXT} onOpenModal={handleToggleModal}>
          <IoCashOutline />
        </BannerItem>
      </div>

      {isOpenModal && (
        <Modal onCloseModal={handleToggleModal}>
          <Timer />
        </Modal>
      )}
    </>
  );
};
