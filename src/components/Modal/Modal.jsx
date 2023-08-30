import {
  ModalCloseBtn,
  ModalContainer,
  ModalContent,
  ModalDiscription,
  ModalDiscriptionText,
  ModalDiscriptionTitle,
  ModalFilmDetailDiscription,
  ModalFilmDetailTable,
  ModalFilmDetailTd,
  ModalFilmDetailTitle,
  ModalFilmDetailTr,
  ModalPoster,
  ModalTextChangeBg,
  ModalTitle,
  ModalTansformTextToUpperCase,
  ModalButtonWrapper,
} from './ModalStyles';

import candyCane from '../../images/candy-cane.jpg';
import ModalGenres from '../ModalGenres/ModalGenres';
import Button from '../Button/Button';
import CloseIcon from '../UI/CloseIcon/CloseIcon';
import { useState } from 'react';
import { changeLocalStorage } from '../../js/changeLocalStorage';

const LOCAL_STORAGE_WATCHED_KEY = 'watched';
const LOCAL_STORAGE_QUEUE_KEY = 'queue';

let watchedArrey = [];
let queueArrey = [];
let isWat = false;
let isQue = false;
try {
  watchedArrey = JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY));
  isWat = true;
} catch (error) {
  console.log(error);
}
try {
  queueArrey = JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUEUE_KEY));
  isQue = true;
} catch (error) {
  console.log(error);
}

function Modal({ active, setActive, currentFilm }) {
  const [isWatched, setIsWatched] = useState(isWat);
  const [isQueued, setIsQueued] = useState(isQue);

  function handleChangeWatchedList() {
    changeLocalStorage(
      watchedArrey,
      currentFilm,
      setIsWatched,
      LOCAL_STORAGE_WATCHED_KEY
    );
  }
  function handleChangeQueueList() {
    changeLocalStorage(
      queueArrey,
      currentFilm,
      setIsQueued,
      LOCAL_STORAGE_QUEUE_KEY
    );
  }
  function changeActive() {
    setActive(!active);
  }

  console.log(currentFilm);
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
          <ModalFilmDetailTable>
            <ModalFilmDetailTr>
              <ModalFilmDetailTd>
                <ModalFilmDetailTitle>Vote / Votes</ModalFilmDetailTitle>
              </ModalFilmDetailTd>
              <ModalFilmDetailTd>
                <ModalFilmDetailDiscription>
                  <ModalTextChangeBg>
                    {Number(currentFilm.vote_average).toFixed(1)}{' '}
                  </ModalTextChangeBg>
                  / {currentFilm.vote_count}
                </ModalFilmDetailDiscription>
              </ModalFilmDetailTd>
            </ModalFilmDetailTr>
            <ModalFilmDetailTr>
              <ModalFilmDetailTd>
                <ModalFilmDetailTitle>Popularity</ModalFilmDetailTitle>
              </ModalFilmDetailTd>
              <ModalFilmDetailTd>
                <ModalFilmDetailDiscription>
                  {Number(currentFilm.popularity).toFixed(1)}
                </ModalFilmDetailDiscription>
              </ModalFilmDetailTd>
            </ModalFilmDetailTr>
            <ModalFilmDetailTr>
              <ModalFilmDetailTd>
                <ModalFilmDetailTitle>Original Title</ModalFilmDetailTitle>
              </ModalFilmDetailTd>
              <ModalFilmDetailTd>
                <ModalFilmDetailDiscription>
                  <ModalTansformTextToUpperCase>
                    {currentFilm.original_title}
                  </ModalTansformTextToUpperCase>
                </ModalFilmDetailDiscription>
              </ModalFilmDetailTd>
            </ModalFilmDetailTr>
            <ModalFilmDetailTr>
              <ModalFilmDetailTd>
                <ModalFilmDetailTitle>Genre</ModalFilmDetailTitle>
              </ModalFilmDetailTd>
              <ModalFilmDetailTd>
                <ModalFilmDetailDiscription>
                  <ModalGenres currentFilmGenre_ids={currentFilm.genre_ids} />
                </ModalFilmDetailDiscription>
              </ModalFilmDetailTd>
            </ModalFilmDetailTr>
          </ModalFilmDetailTable>
          <ModalDiscriptionTitle>About</ModalDiscriptionTitle>
          <ModalDiscriptionText>{currentFilm.overview}</ModalDiscriptionText>
          <ModalButtonWrapper>
            <Button
              change={handleChangeWatchedList}
              text={isWatched ? 'Rem to watched' : 'Add to watched'}
            ></Button>
            <Button
              change={handleChangeQueueList}
              text={isQueued ? 'Rem to queue' : 'Add to queue'}
            ></Button>
          </ModalButtonWrapper>
        </ModalDiscription>
      </ModalContent>
    </ModalContainer>
  );
}
export default Modal;
