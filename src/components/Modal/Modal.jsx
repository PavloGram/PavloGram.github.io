import {
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalDiscription,
  ModalDiscriptionText,
  ModalDiscriptionTitle,
  ModalPoster,
  ModalTitle,
  ModalButtonWrapper,
} from './ModalStyles';

import candyCane from '../../images/candy-cane.jpg';
import Button from '../Button/Button';
import CloseIcon from '../UI/CloseIcon/CloseIcon';
import { useState } from 'react';
import { changeLocalStorage } from '../../js/changeLocalStorage';
import ModalList from '../ModalList/ModalList';
import { localStorageParse } from '../../js/localStorageParce';
import { detectIdInArrey } from '../../js/detectIdInArrey';
import React from 'react'

const LOCAL_STORAGE_WATCHED_KEY = 'watched';
const LOCAL_STORAGE_QUEUE_KEY = 'queue';

function Modal({ active, setActive, currentFilm }) {
  const [toggle, setToggle] = useState(false);

  let watchedArrey = localStorageParse(LOCAL_STORAGE_WATCHED_KEY);
  let queueArrey = localStorageParse(LOCAL_STORAGE_QUEUE_KEY);
  let isWatched = detectIdInArrey(watchedArrey, currentFilm);
  let isQueue = detectIdInArrey(queueArrey, currentFilm);
  console.log(watchedArrey)

  function handleChangeWatchedList() {
    setToggle(!toggle);
    changeLocalStorage(
      watchedArrey,
      currentFilm,
      isWatched,
      LOCAL_STORAGE_WATCHED_KEY
    );
  }
  function handleChangeQueueList() {
    setToggle(!toggle);
    changeLocalStorage(
      queueArrey,
      currentFilm,
      isQueue,
      LOCAL_STORAGE_QUEUE_KEY
    );
  }
  function changeActive() {
    setActive(!active);
  }

  // console.log(currentFilm);
  return (
    <ModalContainer $active={active ? 1 : 0} onClick={changeActive}>
      <ModalContent $active={active ? 1 : 0} onClick={e => e.stopPropagation()}>
        <ModalCloseBtn onClick={changeActive} type="button">
          <CloseIcon />
        </ModalCloseBtn>
        <ModalPoster
          src={
            currentFilm.poster_path
              ? `https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`
              : candyCane
          }
        ></ModalPoster>
        <ModalDiscription>
          <ModalTitle>{currentFilm.original_title}</ModalTitle>
          <ModalList currentFilm={currentFilm} />

          <ModalDiscriptionTitle>About</ModalDiscriptionTitle>
          <ModalDiscriptionText>{currentFilm.overview}</ModalDiscriptionText>
          <ModalButtonWrapper>
            <Button
              change={handleChangeWatchedList}
              text={isWatched ? 'Rem to watched' : 'Add to watched'}
            ></Button>
            <Button
              change={handleChangeQueueList}
              text={isQueue ? 'Rem to queue' : 'Add to queue'}
            ></Button>
          </ModalButtonWrapper>
        </ModalDiscription>
      </ModalContent>
    </ModalContainer>
  );
}
export default Modal;
