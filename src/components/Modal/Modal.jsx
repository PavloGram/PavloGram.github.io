import candyCane from"../../images/candy-cane.jpg";
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

} from "./ModalStyle";

import ModalList from "../ModalList/ModalList";
import Button from "../../UI/Button/Button";
import CloseIcon from "../../UI/CloseIcon/CloseIcon";
import { changeLocalStorage } from "../../js/changeLocalStorage";
import { detectIdInArrey } from "../../js/detectIdInArrey";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateActive } from "../../rtk/reducers/isActiveModal";
import { changeWatchedArray } from "../../rtk/reducers/watchedArray";
import { changeQueueArray } from "../../rtk/reducers/queueArray";

const LOCAL_STORAGE_WATCHED_KEY = "watched";
const LOCAL_STORAGE_QUEUE_KEY = "queue";

function Modal() {
  const activeModal = useSelector((state) => state.ActiveModal.value);
  const currentFilm = useSelector((state) => state.currentFilm.value);
  const dispatch = useDispatch();
  const watchedArrey = useSelector((state) => state.watchedArray.value);
  const queueArrey = useSelector((state) => state.queueArray.value);
  let isWatched = detectIdInArrey(watchedArrey, currentFilm);
  let isQueue = detectIdInArrey(queueArrey, currentFilm);

  function handleChangeWatchedList() {
    changeLocalStorage(
      watchedArrey,
      currentFilm,
      isWatched,
      LOCAL_STORAGE_WATCHED_KEY
    );

    dispatch(changeWatchedArray());
  }
  function handleChangeQueueList() {
    changeLocalStorage(
      queueArrey,
      currentFilm,
      isQueue,
      LOCAL_STORAGE_QUEUE_KEY
    );
    dispatch(changeQueueArray());
  }
  function changeActive() {
    dispatch(changeStateActive());
  }

  return (
    <ModalContainer $isActivModal={activeModal} onClick={changeActive}>
      <ModalContent
        $isActivModal={activeModal}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCloseBtn onClick={changeActive} type="button">
          <CloseIcon />
        </ModalCloseBtn>
        <ModalPoster
          src={
            currentFilm?.poster_path
              ? `https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`
              : candyCane
          }
        ></ModalPoster>
        <ModalDiscription>
          <ModalTitle>{currentFilm?.original_title}</ModalTitle>
          <ModalList currentFilm={currentFilm} />

          <ModalDiscriptionTitle>About</ModalDiscriptionTitle>
          <ModalDiscriptionText>{currentFilm?.overview}</ModalDiscriptionText>
          <ModalButtonWrapper>
            <Button
              change={handleChangeWatchedList}
              text={isWatched ? "Rem to watched" : "Add to watched"}
            ></Button>
            <Button
              change={handleChangeQueueList}
              text={isQueue ? "Rem to queue" : "Add to queue"}
            ></Button>
          </ModalButtonWrapper>
        </ModalDiscription>
      </ModalContent>
    </ModalContainer>
  );
}
export default Modal;
