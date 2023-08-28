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
 } from './ModalStyles';
import candyCane from '../../images/candy-cane.jpg';


import ModalGenres from '../ModalGenres/ModalGenres';
import Button from '../Button/Button';
// import { useEffect, useState } from 'react';
// import { genres } from '../../data/genres';
import CloseIcon from '../UI/CloseIcon/CloseIcon';

const LOCAL_STORAGE_WATCHED_KEY = 'watched';
const LOCAL_STORAGE_QUEUE_KEY = 'queue';

let watchetArrey = [];
let queueArrey = [];
localStorage.setItem(LOCAL_STORAGE_WATCHED_KEY, watchetArrey);
localStorage.setItem(LOCAL_STORAGE_QUEUE_KEY, queueArrey);

function Modal({ active, setActive, currentFilm }) {
  // const [watched, setWatched] = useState(false);
  // const [queue, setQueue] = useState(false);
  watchetArrey = localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY);
  queueArrey = localStorage.getItem(LOCAL_STORAGE_QUEUE_KEY);

  function handleChangeWatchedList() {
    localStorage.setItem(
      LOCAL_STORAGE_WATCHED_KEY,
      JSON.stringify(currentFilm.id)
    );

    console.log(localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY));
  }

  function handleChangeQueueList() {
    localStorage.removeItem(LOCAL_STORAGE_WATCHED_KEY);
    // localStorage.setItem(LOCAL_STORAGE_QUEUE_KEY, currentFilm.id)
    console.log(currentFilm.id);
  }

  function changeActive() {
    setActive(!active);
  }

  console.log(currentFilm);
  return (
    <ModalContainer $active={active ? 1 : 0} onClick={changeActive}>
      <ModalContent $active={active ? 1 : 0} onClick={e => e.stopPropagation()}>
        <ModalCloseBtn onClick={changeActive} type="button">
          <CloseIcon/>
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
                  <ModalTansformTextToUpperCase>{currentFilm.original_title}</ModalTansformTextToUpperCase>
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
                  
      {/* {currentFilm.genre_ids.map((el, i) => {
      return <p>{currentFilm.genre_ids.length === i + 1 ? `${el}.` : `${el},`}</p>
      })}
     */}
                </ModalFilmDetailDiscription>
              </ModalFilmDetailTd>
            </ModalFilmDetailTr>
          </ModalFilmDetailTable>
          <ModalDiscriptionTitle>About</ModalDiscriptionTitle>
          <ModalDiscriptionText>{currentFilm.overview}</ModalDiscriptionText>
          <Button
            change={handleChangeWatchedList}
            text= 'Add to watched'
          ></Button>
          <Button change={handleChangeQueueList} text="Add to queue"></Button>
        </ModalDiscription>
      </ModalContent>
    </ModalContainer>
  );
}
export default Modal;
